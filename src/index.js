import { LitElement, html } from 'lit-element'
import './components/top-bar'

class App extends LitElement {
  render() {
    return html`
      <top-bar></top-bar>
      <h1>LitElement Web App</h1>
    `
  }
}

customElements.define('custom-app', App)