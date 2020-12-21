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
      <h1>LitElement Web App</h1>
    `
  }

}

customElements.define('custom-app', App)