import { Component } from 'preact'

const LoremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque risus mi, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum felis venenatis efficitur. Aenean ac eleifend lacus, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.`

const Msg = ({ q, m, showIndex, i, setShown }) => (
  <article class="message is-marginless">
    <div class="message-header" onClick={e => (showIndex === i) ? setShown(-1) : setShown(i)}>
      <p>{q}</p>
      <a class="button is-small is-outlined">
        <span class="icon is-small">
           <i class={`fa ${(showIndex === i) ? 'fa-minus' : 'fa-expand-arrows-alt'}`}></i>
         </span>
      </a>
    </div>
    {
      (showIndex === i) && (
        <div class="message-body">
          {LoremIpsum}
        </div>
      )
    }
  </article>
)

export default class FAQ extends Component {

  state = {
    faqList: [
      { q: 'What are Congress Tokens?', m: LoremIpsum },
      { q: 'What do I need to buy & sell Congress Tokens?', m: LoremIpsum },
      { q: 'How much do Congress Tokens cost?', m: LoremIpsum },
      { q: 'Is this legal?', m: LoremIpsum }
    ],
    showIndex: -1
  }

  setShown = i => {
    this.setState({ showIndex: i })
  }

  render() {
    let { faqList, showIndex } = this.state

    return (
      <section id="faq" class="section is-faq is-small">
        <div class="container">
            <h2 class="title is-size-1 has-text-white has-text-centered">F.A.Q</h2>
            {
              faqList.map((faq, i) => (
                <Msg q={faq.q} m={faq.m} i={i} showIndex={showIndex} setShown={this.setShown} />
              ))
            }
        </div>
      </section>
    )
  }
}
