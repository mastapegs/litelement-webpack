import { LitElement, html } from 'lit-element'

class TopBar extends LitElement {

  createRenderRoot() {
    return this
  }

  render() {
    return html`
    <nav class='w-full h-12 bg-blue-700 text-white'>
      <ul class='flex h-full justify-evenly items-center'>
        <li><a href='/'>Home</a></li>
        <li><a href='/about'>About</a></li>
        <li><a href='/contact'>Contact</a></li>
      </ul>
    </nav>
    `
  }

}

customElements.define('top-bar', TopBar)