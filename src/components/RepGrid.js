import { Component } from 'preact'
import RepCard from './RepCard'

export default class RepGrid extends Component {

  state = {
    filter: '',
    CongressMetaData: null
  }

  componentDidMount() {

    fetch('/assets/metadata/tokens.json')
      .then(d => d.json())
      .then(CongressMetaData => {
        CongressMetaData = CongressMetaData.map(tkn => {
          tkn.attributes.forEach(attr => {
            tkn[attr.trait_type] = attr.value
          })
          return tkn
        })
        setTimeout(() => { this.setState({ CongressMetaData }) }, 1000)
      })
  }

  handleInput = () => {
    let { value } = document.getElementById('repSearch')
    this.setState({ filter: value })
  }

  filter = (el, i, all) => {
    let { filter } = this.state
    let { name, attributes } = el
    let { state } = attributes

    if (filter == '' && i > 5) {
      return false;
    }

    if (`${name} ${state}`.toLowerCase().indexOf(filter.toLowerCase()) !== -1) {
      return true
    } else {
      return false;
    }
  }

  render() {
    let { CongressMetaData, filter } = this.state
    if (!CongressMetaData) {
      return (
        <div id="representative-grid" class="section is-medium has-background-info has-text-centered">
          <span class="icon is-large" style="padding: 10vh 0; color: white;">
            <i class="fas fa-spinner fa-3x fa-pulse" />
          </span>
        </div>
      )
    }

    return (
      <div id="representative-grid" class="section repGrid is-medium">
        <h3 class="title has-text-centered has-text-white is-size-1">Explore</h3>
        <div class="search box">
          <div class="field">
            <div class="control is-expanded has-icons-left">
              <input id="repSearch" onInput={e => this.handleInput(e)} class="input has-text-centered is-large is-rounded" type="search" placeholder="Find A Representative" />
              <span class="icon is-small is-left">
                <i class="fas fa-search" />
              </span>
            </div>
          </div>
        </div>
        <div class="columns is-multiline">
          {
            CongressMetaData.filter(this.filter).map((md, i) => {
              return (<RepCard {...md} key={i}/>)
            })
          }
        </div>
      </div>
    )
  }
}
