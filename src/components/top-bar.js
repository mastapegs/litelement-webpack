import { LitElement, html } from 'lit-element'

class TopBar extends LitElement {

  createRenderRoot() {
    return this
  }

  render() {
    return html`
    <div class='w-full bg-blue-700 text-white'>
      <ul class='flex'>
        <li><a href='/'>Home</a></li>
        <li><a href='/about'>About</a></li>
        <li><a href='/contact'>Contact</a></li>
      </ul>
    </div>
    `
  }

}

customElements.define('top-bar', TopBar)