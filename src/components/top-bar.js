import { LitElement, html } from 'lit-element'

class TopBar extends LitElement {
  render() {
    return html`
      <p>top-bar</p>
    `
  }
}

customElements.define('top-bar', TopBar)