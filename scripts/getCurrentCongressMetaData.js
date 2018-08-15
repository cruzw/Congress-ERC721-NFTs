// get current congress members from propublica service, creating token metadata

const signale = require('signale')
const FS = require('fs')
const fetch =  require('node-fetch')

const {
  stateLabelLookup,
  partyBgLookup,
  partyLabelLookup,
  capitalize,
  saveData,
  arrToTokenLookup
} = require('./utils')

const massageRepMetadata = require('./metadataSchema')

fetch('https://congress-members.now.sh/list?listAll=true')
    .then(res => res.json())
    .then(repData => saveData(repData, `${__dirname}/../src/assets/metadata`,'propublica'))
    .then(massageRepMetadata)
    // .then(repData => arrToTokenLookup(repData))
    .then(repMetaData => saveData(repMetaData, `${__dirname}/../src/assets/metadata`,'tokens'))
    .catch(signale.error)
