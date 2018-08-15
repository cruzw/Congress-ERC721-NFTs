// exported fn to parse into opensea.io schema
// more @ https://docs.opensea.io/docs/2-adding-metadata

const {
  stateLabelLookup,
  partyBgLookup,
  partyLabelLookup,
  capitalize
} = require('./utils')

module.exports = (congressMembers) => congressMembers.map(
    (cM, i) => ({
        name: `${cM.first_name} ${cM.last_name}`,
        description: `${partyLabelLookup(cM.party)} ${cM.first_name} ${cM.last_name} of ${stateLabelLookup(cM.state)}${(cM.district && cM.district != 'At-Large') ? ' (district '+cM.district+')' : ''}. ${cM.title} in the 115th Congress of the United States`,
        tokenId: i+1,
        external_url: `http://congrex.io/assets/tokens/${i+1}.json`,

        // // FIXME: swap url w/ IPFS
        image: `http://congrex.io/assets/images/congress/400x400/${cM.id}.jpg`,

        // FIXME: opensea.io recommended lighter bg color
        background_color: `${partyBgLookup(cM.party)}`,

        attributes: [
          {
            trait_type: "id",
            value: cM.id
          }, {
            trait_type: "title",
            value: cM.title
          }, {
            trait_type: "current_meeting",
            value: 115,
            display_type: "number"
          }, {
            trait_type: "party",
            value: partyLabelLookup(cM.party)
          }, {
            trait_type: "state",
            value: stateLabelLookup(cM.state)
          }, {
            trait_type: "chamber",
            value: `${capitalize(cM.chamber)}`
          }, {
            trait_type: "next_election",
            value: 2018,
            display_type: "number"
          }, {
            trait_type: "dw_nominate",
            value: parseFloat(parseFloat(cM.dw_nominate).toFixed(2)),
            display_type: "number"
          }, {
            trait_type: "date_of_birth",
            value: new Date(cM.date_of_birth).toLocaleDateString(),
            display_type: "number"
          }, {
            trait_type: "gender",
            value: (cM.gender == 'F') ? 'Female' : 'Male'
          }, {
            trait_type: "seniority",
            value: parseInt(cM.seniority),
            display_type: "number"
          }, {
            trait_type: "missed_votes_pct",
// FIXME: there's a more coherent way to sanitize besides 2x parseFloat, but it's late
            value: parseFloat(parseFloat(cM.missed_votes_pct).toFixed(2)),
            display_type: "boost_percentage"
          }, {
            trait_type: "votes_with_party_pct",
            value: parseFloat(parseFloat(cM.votes_with_party_pct).toFixed(2)),
            display_type: "boost_percentage"
          }
        ]
    })
)
