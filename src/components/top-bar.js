import { LitElement, html } from 'lit-element'

class TopBar extends LitElement {

  static get properties() {
    return {
      navList: { type: Array },
    }
  }

  createRenderRoot() {
    return this
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
    <nav class='w-full h-12 bg-blue-700 text-white'>
      <ul class='flex h-full justify-evenly items-center'>
        ${this.navList.map(({ path, text }) => html`<li><a href=${path}>${text}</a></li>`)}
      </ul>
    </nav>
    `
  }

}

customElements.define('top-bar', TopBar)