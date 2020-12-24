import { LitElement, html } from 'lit-element'
import './components/top-bar'
import './components/page-router'

class App extends LitElement {
  render() {
    return html`
      <top-bar></top-bar>
      <page-router></page-router>
    `
  }
}

customElements.define('custom-app', App)