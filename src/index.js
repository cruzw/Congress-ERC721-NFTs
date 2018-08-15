import './style'
import { Component } from 'preact'
import Hero from './components/Hero'
import About from './components/About'
import RepGrid from './components/RepGrid'
import Faq from './components/Faq'
import NonProfits from './components/NonProfits'
import Footer from './components/Footer'

const Cta = () => (
  <div class="box has-background-link cta">
    <p class="has-text-centered has-text-white is-size-6">
     Website Under <span class="tag is-warning is-size-6">Construction</span>
    </p>
  </div>
)

export default class App extends Component {

  render() {
    return (
      <div>
        <Cta />
        <Hero />
        <About />
        <RepGrid />
        <NonProfits />
        <Faq />
        <Footer />
      </div>
    );
  }
}
