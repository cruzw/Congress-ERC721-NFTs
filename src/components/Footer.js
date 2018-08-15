const Anchor = ({_link, _icon}) => (
  <a href={_link} /*target="_blank" rel="noreferrer nofollow"*/>
    <i class={`fab fa-fw fa-lg ${_icon}`} />
  </a>
)

export default () => (
  <footer class="footer">
    <div class="container">
      <div class="content has-text-centered">
        <p>
          <span class="icons">
            <Anchor
              _link={"#"}
              _icon="fa-github"
            />
            <Anchor
              _link={"https://rinkeby.etherscan.io/address/0x547AE95FDFf94C59191549aE3f0005e4D4e03Df8"}
              _icon="fa-ethereum"
            />
            <Anchor
              _link={"#"}
              _icon="fa-twitter"
            />
          </span>
        </p>
        <p class="is-size-4">
          <strong>© 2018 CONGREX</strong>
        </p>
      </div>
    </div>
  </footer>
)

// TODO: modal informing user about peepeth.com
// const twitterModal = () => (
//   <div class="modal">
//     <div class="modal-background"></div>
//     <div class="modal-card">
//       <header class="modal-card-head">
//         <p class="modal-card-title">Modal title</p>
//         <button class="delete" aria-label="close"></button>
//       </header>
//       <section class="modal-card-body">
//         <!-- Content ... -->
//       </section>
//       <footer class="modal-card-foot">
//         <button class="button is-success">Save changes</button>
//         <button class="button">Cancel</button>
//       </footer>
//     </div>
//   </div>
// )
