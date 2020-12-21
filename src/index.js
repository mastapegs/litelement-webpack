import { LitElement, html } from 'lit-element'
import "./styles.css"
import './components/top-bar'

class App extends LitElement {

  createRenderRoot() {
    return this
  }
  
  render() {
    return html`
      <top-bar></top-bar>
      <h1 class='shadow w-1/2 mx-auto px-10 py-4 mt-3 bg-white'>LitElement Web App</h1>
    `
  }

}

customElements.define('custom-app', App)