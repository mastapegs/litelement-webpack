import { LitElement, html } from 'lit-element'
import "./styles.css"
import './components/top-bar'
import './pages/home-page'

class App extends LitElement {

  createRenderRoot() {
    return this
  }

  render() {
    return html`
      <top-bar></top-bar>
      <home-page></home-page>
    `
  }

}

customElements.define('custom-app', App)