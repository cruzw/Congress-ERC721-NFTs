import { Component } from 'preact';

export default class RepCard extends Component {

  componentWillMount() {

  }

  onImgError = e => {
    console.log(`Congress Token Card onImgError: ${e}`)
    e.target.src = 'images/placeholder.png'
  }

  render() {
    let {
      attributes,
      background_color,
      description,
      image,
      name,
      tokenId,
      id,
      title,
      date_of_birth,
      gender,
      party,
      chamber,
      state,
      current_meeting,
      next_election
    } = this.props


     return (
      <div class="column is-full-mobile is-half-tablet is-one-third-desktop is-one-third-widescreen is-one-quarter-fullhd">
        <div class="card" style={`border: 3px solid #${background_color}`}>
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <figure class="image is-64x64">
                  <img src={`assets/images/congress/100x100/${id}.jpg`}  alt={`photo of CONGRESS token #${tokenId}, ${title} ${name}`} onError={e => this.onImgError(e)} />
                </figure>
              </div>
              <div class="media-content">
                <p class="title is-5">#{tokenId} {name}</p>
                <p class="subtitle is-6">
                  {description}
                </p>
              </div>
            </div>
          </div>
          <footer class="card-footer">
            <p class="card-footer-item">
              <span class="has-text-centered">
                <figure class="opensea image is-24x24">
                  <img src="../assets/images/opensea-icon.png" />
                </figure>
                <a
                  class="title is-size-5"
                  target="_blank"
                  rel="nofollow noreferrer"
                  href={`https://rinkeby.opensea.io/assets/0x71a7bc84135e32de9fff35e91d7b5e7b5b4b80e4/${tokenId}`}
                >
                  Trade
                </a>
              </span>
            </p>
            <p class="card-footer-item">
              <span>
                <span class="icon is-medium">
                  <i class="fas fa-university" />
                </span>
                <span class="icon is-medium">
                  <i class="fab fa-facebook" />
                </span>
                <span class="icon is-medium">
                  <i class="fab fa-twitter" />
                </span>
              </span>
            </p>
          </footer>
        </div>
      </div>
    )
  }
}
