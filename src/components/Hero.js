// TODO: handle mobile hero nav onClick
const Head = () => (
  <div class="hero-head">
    <nav class="navbar">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item">
            <h1 class="title is-size-2">CONGREX</h1>
          </a>
          <span class="navbar-burger burger" data-target="navbarMenuHeroA">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbarMenuHeroA" class="navbar-menu">
          <div class="navbar-end">
            <a href="#about" class="navbar-item">
              About
            </a>
            <a href="#representative-grid" class="navbar-item">
              Explore
            </a>
            <a href="#faq" class="navbar-item">
              F.A.Q
            </a>
            <a
              href="https://rinkeby.opensea.io/accounts/0xd749adf80793616663993144a9ed3c11bcd186fa"
              class="navbar-item"
              target="_blank"
              rel="nofollow noreferrer"
            >
              Trade
            </a>
          </div>
        </div>
      </div>
    </nav>
  </div>
)

const Body = () => (
  <div class="hero-body">
    <div class="container has-text-centered">
      {/*<h1 class="title is-size-1 is-hidden-mobile">
        Congreth Tokens
      </h1>
      <h1 class="title is-size-3 is-hidden-tablet">
        Congreth Tokens
      </h1>*/}
      <img class="image is-logo is-square" src="../assets/images/logo.png" />
      <h2 class="shimmer subtitle is-size-2 is-hidden-mobile">
        Limited Edition Collectibles of United States Congress Members on the Ethereum Blockchain

      </h2>
      <h2 class="shimmer subtitle is-size-4 is-hidden-tablet">
        Limited Edition Collectibles of United States Congress Members on the Ethereum Blockchain
      </h2>
    </div>
  </div>
)

const Footer = () => (
  <div class="hero-footer">
    <nav class="level is-mobile">
      <div class="level-item has-text-centered">
        <div>
          <p class="title">553 tokens</p>
          <p class="heading is-size-7">from the</p>
          <p class="title">115th Congress</p>
        </div>
      </div>
    </nav>
  </div>
)

export default () => (
  <section class="hero is-link is-fullheight">
    <Head />
    <Body />
    <Footer />
  </section>
);
