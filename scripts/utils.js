// helper functions

const promisify = require('tiny-promisify')
const signale = require('signale')
const { writeFileSync } = require('fs')

const capitalize = (s) => s[0].toUpperCase() + s.slice(1)

// NOTE: will be useful when programmatically starting auctions
// const dateToBlockNumber = async (_endDate) => {
//     let currentNumber = await web3.eth.getBlockNumber()
// }

const saveData = async (data, dir, filename) => {
    signale.info('data.length', data.length)
    let jsonData = JSON.stringify(data, null, 3)
    let filePath = `${dir}/${filename}.json`

    try {
      signale.pending(`saving data to ${filePath}`)
      writeFileSync(filePath, jsonData)
    }
    catch (error) {
      signale.error('Error writing file', error)
    }
    finally {
      signale.success(`saved ${filePath}`)
      return data
    }
}

const parseReceiptLog = receipt => {
  let { blockNumber, gasUsed, cumulativeGasUsed } = receipt
  return `Receipt: block# ${blockNumber}, gasUsed ${gasUsed}, totalGas ${cumulativeGasUsed}`
}

const getAccounts = async (w3) => {
  let accts = await promisify(w3.eth.getAccounts)()

  if (!accts.length) {
    signale.error(`getAccounts(): ${accts}`)
  } else {
    signale.note(`getAccounts(): ${accts.length} / ${accts}`)
  }

  return accounts
}

const sortByLastName = mD => mD.sort((a, b) => {
  let A = a.last_name.toLowerCase()
  let B = b.last_name.toLowerCase()

  if (A < B) { return -1 }
  else if (A > B) { return  1 }
  else { return 0 }
})

const partyBgLookup = party => ({
    R: "FF7669",
    I: "606769",
    D: "6EE3FF"
}[party])

const partyLabelLookup = party => ({
    R: "Republican",
    I: "Independent",
    D: "Democrat"
}[party])

const arrToTokenLookup = arr => new Promise(
  (res, rej) => {
    let obj = {}
    arr.forEach((v, i) => { obj[v.tokenId] = v })
    res(obj)
  }
)

const stateLabelLookup = state => ({
    "AL": "Alabama",
    "AK": "Alaska",
    "AS": "American Samoa",
    "AZ": "Arizona",
    "AR": "Arkansas",
    "CA": "California",
    "CO": "Colorado",
    "CT": "Connecticut",
    "DE": "Delaware",
    "DC": "District Of Columbia",
    "FM": "Federated States Of Micronesia",
    "FL": "Florida",
    "GA": "Georgia",
    "GU": "Guam",
    "HI": "Hawaii",
    "ID": "Idaho",
    "IL": "Illinois",
    "IN": "Indiana",
    "IA": "Iowa",
    "KS": "Kansas",
    "KY": "Kentucky",
    "LA": "Louisiana",
    "ME": "Maine",
    "MH": "Marshall Islands",
    "MD": "Maryland",
    "MA": "Massachusetts",
    "MI": "Michigan",
    "MN": "Minnesota",
    "MS": "Mississippi",
    "MO": "Missouri",
    "MT": "Montana",
    "NE": "Nebraska",
    "NV": "Nevada",
    "NH": "New Hampshire",
    "NJ": "New Jersey",
    "NM": "New Mexico",
    "NY": "New York",
    "NC": "North Carolina",
    "ND": "North Dakota",
    "MP": "Northern Mariana Islands",
    "OH": "Ohio",
    "OK": "Oklahoma",
    "OR": "Oregon",
    "PW": "Palau",
    "PA": "Pennsylvania",
    "PR": "Puerto Rico",
    "RI": "Rhode Island",
    "SC": "South Carolina",
    "SD": "South Dakota",
    "TN": "Tennessee",
    "TX": "Texas",
    "UT": "Utah",
    "VT": "Vermont",
    "VI": "Virgin Islands",
    "VA": "Virginia",
    "WA": "Washington",
    "WV": "West Virginia",
    "WI": "Wisconsin",
    "WY": "Wyoming"
}[state])

module.exports = {
  parseReceiptLog,
  getAccounts,
  stateLabelLookup,
  partyBgLookup,
  partyLabelLookup,
  capitalize,
  saveData,
  arrToTokenLookup
}
