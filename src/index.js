import { LitElement, html } from 'lit-element'
import "./styles.css"
import './components/top-bar'
import './components/page-router'

class App extends LitElement {
  createRenderRoot() {
    return this
  }
  render() {
    return html`
      <top-bar></top-bar>
      <page-router></page-router>
    `
  }
}

customElements.define('custom-app', App)