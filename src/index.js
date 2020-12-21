import { LitElement, html } from 'lit-element'
import './tailwind.css'
import './components/top-bar'
import './components/page-router'

class App extends LitElement {
  createRenderRoot() {
    return this
  }
  render() {
    return html`
      <top-bar></top-bar>
      <div class='container mx-auto my-8 p-6 bg-white rounded-lg shadow-lg'>
        <page-router></page-router>
      </div>
    `
  }
}

customElements.define('custom-app', App)