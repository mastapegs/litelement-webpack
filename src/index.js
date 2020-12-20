import { LitElement, html } from 'lit-element'

class App extends LitElement {
  render() {
    return html`
      <h1>LitElement Web App</h1>
    `
  }
}

customElements.define('custom-app', App)