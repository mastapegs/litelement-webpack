import { LitElement, html } from 'lit-element'

class TopBar extends LitElement {

  static get properties() {
    return {
      navList: { type: Array },
    }
  }

  constructor() {
    super()
    this.navList = [
      {
        path: '/',
        text: 'Home',
      },
      {
        path: '/about',
        text: 'About',
      },
      {
        path: '/contact',
        text: 'Contact',
      },
    ]
  }

  render() {
    return html`
    <nav>
      <ul>
        ${this.navList.map(({ path, text }) =>
         html`<li><a href=${path}>${text}</a></li>`
         )}
      </ul>
    </nav>
    `
  }

}

customElements.define('top-bar', TopBar)