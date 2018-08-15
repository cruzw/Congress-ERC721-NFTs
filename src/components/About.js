const Cards = () => (
    <div class="columns features">
      <div class="column is-4">
          <div class="card is-shady">
              <div class="card-image has-text-centered">
                  <i class="fa fa-dove fa-5x"></i>
              </div>
              <div class="card-content">
                  <div class="content has-text-centered">
                      <h4>Tristique senectus et netus et. </h4>
                      <p>Purus semper eget duis at tellus at urna condimentum mattis.
                      Non blandit massa enim nec.
                      Integer enim neque volutpat ac tincidunt vitae semper quis.
                      </p>
                  </div>
              </div>
          </div>
      </div>
      <div class="column is-4">
          <div class="card is-shady">
              <div class="card-image has-text-centered">
                  <i class="fab fa-ethereum fa-5x"></i>
              </div>
              <div class="card-content">
                  <div class="content has-text-centered">
                      <h4>Tempor orci dapibus ultrices in.</h4>
                      <p>Ut venenatis tellus in metus vulputate.
                      Amet consectetur adipiscing elit pellentesque.
                      Sed arcu non odio euismod lacinia at quis risus.
                      </p>
                  </div>
              </div>
          </div>
      </div>
      <div class="column is-4">
          <div class="card is-shady">
              <div class="card-image has-text-centered">
                  <i class="fa fa-address-card fa-5x"></i>
              </div>
              <div class="card-content">
                  <div class="content has-text-centered">
                      <h4> Leo integer malesuada nunc vel risus. </h4>
                      <p>Imperdiet dui accumsan sit amet nulla facilisi morbi.
                      Fusce ut placerat orci nulla pellentesque dignissim enim.
                      Libero id faucibus nisl tincidunt eget nullam.</p>
                  </div>
              </div>
          </div>
      </div>
    </div>
)

export default () => (
  <section id="about" class="section is-donations is-small is">
    <h2 class="title has-text-centered">
      About
    </h2>
    <p class="has-text-centered">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec justo ut elit tristique bibendum. Pellentesque est diam, posuere ac orci a, molestie ornare libero. Aliquam ut vulputate libero. Nullam id augue quis elit fringilla tincidunt. Suspendisse sed elit varius, viverra augue non, ultrices erat.
    </p>
    <Cards />
  </section>
)
