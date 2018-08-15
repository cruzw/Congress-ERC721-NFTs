// builds static json API for tokens

const signale = require('signale')
const { readFileSync } = require('fs')
const { saveData } = require('./utils')

const main = async () => {
    signale.time('Build Meta Pages')
    try {
        let repMetaData = JSON.parse(
            readFileSync(`${__dirname}/../src/assets/metadata/tokens.json`)
        )
        repMetaData.forEach(async (rep) => {
            let { tokenId } = rep
            // let repData = JSON.stringify(rep, null, 3)

            await saveData(rep, `${__dirname}/../src/assets/tokens`, tokenId)
        })
    } catch (error) {
        console.log('error:', error)
    } finally {
      signale.timeEnd('Build Meta Pages')
    }
}

main()
