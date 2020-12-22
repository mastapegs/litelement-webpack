import { html } from 'lit-element'
import LitTailement from '../utils/LitTailement'

class TopBar extends LitTailement {

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
    <nav class='w-full h-16 bg-blue-700 text-white'>
      <ul class='flex h-full justify-evenly items-center'>
        ${this.navList.map(({ path, text }) => html`
        <li class='border bg-blue-900 rounded shadow-md p-2'>
          <a href=${path}>${text}</a>
        </li>
        `)}
      </ul>
    </nav>
    `
  }

}

customElements.define('top-bar', TopBar)