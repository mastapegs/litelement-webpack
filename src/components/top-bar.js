import { LitElement, html } from 'lit-element'

class TopBar extends LitElement {

  createRenderRoot() {
    return this
  }
  
  render() {
    return html`
      <p class='text-center'>top-bar</p>
    `
  }

}

customElements.define('top-bar', TopBar)