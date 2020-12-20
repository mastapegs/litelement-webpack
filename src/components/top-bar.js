import { LitElement, html } from 'lit-element'

class TopBar extends LitElement {

  createRenderRoot() {
    return this
  }

  render() {
    return html`
    <div class='w-full bg-blue-700 text-white'>
      <p class='text-center'>top-bar</p>
    </div>
    `
  }

}

customElements.define('top-bar', TopBar)