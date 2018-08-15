# About

Tokens representing Members of the [115th US Congress](https://en.wikipedia.org/wiki/115th_United_States_Congress) using [ERC-721 Non-Fungible Token standard](http://erc721.org/) tailored to be a non-profit fundraising mechanism via [OpenSea.io](https://opensea.io/).

A fun project to work on, but will not be going live.

###[Congrex.io](http://congrex.io/)
###[Senator Example](https://rinkeby.opensea.io/assets/0x71a7bc84135e32de9fff35e91d7b5e7b5b4b80e4/81)


## Try It Locally

clone & cd into repo, then..
```
$ npm i
$ npm run metadata-pipeline

# with ganache running..
$ npm run truffle-migrate-dev
$ node scripts/mintCongressMembers.js
$ npm run dev
```

### Prerequisites

* [Ganache](https://truffleframework.com/ganache) is used to run an ethereum blockchain locally.
* [Infura](https://infura.io/) API key is used for testnet/mainnet deployment.

rename .config.example.js and fill in INFURA_KEY, MNEMONIC, & CONTRACT_ADDRESS as needed.
