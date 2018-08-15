const imgStyle = {
  width: 200
}

export default () => (
  <section id="nonprofits" class="section is-donations is-small is">
    <h2 class="title has-text-centered">
      Supporting Political Oversight
      <br/>
      with Blockchain
    </h2>
    <nav class="level is-paddingless	">
      <p class="level-item has-text-centered">
        <a href="https://sunlightfoundation.com/about/" target="_blank" rel="nofollow noreferrer">
          <img src="../assets/images/nonprofits/SunlightFoundation.gif" alt="" style={imgStyle}/>
        </a>
      </p>
      <p class="level-item has-text-centered">
        <a href="https://coincenter.org/about" target="_blank" rel="nofollow noreferrer">
          <img src="./assets/images/nonprofits/CoinCenter.png" alt="" style={imgStyle}/>
        </a>
      </p>
      <p class="level-item has-text-centered">
        <a href="https://www.propublica.org/about" target="_blank" rel="nofollow noreferrer">
          <img src="../assets/images/nonprofits/ProPublica.png" alt="" style={imgStyle}/>
        </a>
      </p>
    </nav>
    <h4 class="subtitle has-text-centered">
      100% of proceeds donated
    </h4>
  </section>
)
