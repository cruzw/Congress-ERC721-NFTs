const {
  NETWORK,
  MNEMONIC,
  PROVIDER_URL,
  CONTRACT_ADDRESS
} = require('../.config.js').rinkeby

const signale = require('signale')
const FS = require('fs')
const promisify = require('tiny-promisify')
const HDWalletProvider = require("truffle-hdwallet-provider")
const web3 = require('web3')

const PROVIDER = new HDWalletProvider(MNEMONIC, PROVIDER_URL)
const WEB3 = new web3(PROVIDER)
const ABI = JSON.parse(
  FS.readFileSync(`${__dirname}/../build/contracts/CongressToken.json`)
).abi
const CONGRESS_METADATA = JSON.parse(
  FS.readFileSync(`${__dirname}/../src/assets/metadata/tokens.json`)
)

const parseReceiptLog = receipt => {
  let { blockNumber, gasUsed, cumulativeGasUsed } = receipt
  return `Receipt: block# ${blockNumber}, gasUsed ${gasUsed}, totalGas ${cumulativeGasUsed}`
}

const mintToken = (Contract, _acct, _uri, _metadata, _tokenId) => {

  return new Promise((res, rej) => {
    Contract.methods.tokenURI(_tokenId).call({ from: _acct }, (error, result) => {
      if (error) {
        signale.info(`${_tokenId}/ ${_metadata.name} not yet minted`)

        Contract.methods
          .mintTo(parseInt(_tokenId), _uri)
          .send({ from: _acct })
          .on('transactionHash', hash => {
            signale.pending(`${_tokenId}/ ${_metadata.name} tx submitted: ${hash}`)
            setTimeout(() => { res(hash) }, 10 * 1000)
          })
          .on('receipt', receipt => {
            signale.success(`${_tokenId}/ ${_metadata.name} ${parseReceiptLog(receipt)}`)
            // res(receipt)
          })
          .on('error', err => {
            signale.error(`${_tokenId}/ ${_metadata.name} ::starting timeout::`, err)
            setTimeout(() => { rej(err) }, 25 * 1000)
          })
      } else {
        signale.warn(`${_tokenId}/ already minted, URI=${result.toString()}`)
        setTimeout(() => res(), 250)
      }
    })
  })
}

const main = async () => {
  let accts = await promisify(WEB3.eth.getAccounts)()

  if (!accts.length) {
    signale.error(`accounts: ${accts}`)
  } else {
    signale.note(`accounts: ${accts.length} / ${accts}`)
  }

  let CongressToken = new WEB3.eth.Contract(ABI, CONTRACT_ADDRESS)
  let totalTokens = CONGRESS_METADATA.length
  let e, i

  signale.note(`total tokens ${totalTokens}`)

  for (i = 0; i < totalTokens; i++) {
    let { name, tokenId } = CONGRESS_METADATA[i]
    let { id } = CONGRESS_METADATA[i].attributes
    signale.note(`${tokenId}/ ${name}`)

    try {

      await mintToken(
        CongressToken,
        accts[0],
        `http://congrex.io/assets/tokens/${tokenId}.json`,
        CONGRESS_METADATA[i],
        tokenId
      )
    } catch (err) {
      signale.error(`${tokenId}/ ${name}: `, err)
    } finally {
      signale.complete(`${tokenId}/ ${name} proceeding to next token`)
    } // end of try-catch-finally
  } // end of for-loop
} // end of main()

main()
