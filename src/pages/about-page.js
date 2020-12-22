import { html } from 'lit-element'
import LitTailement from '../utils/LitTailement'
import '../components/prose-container'

class About extends LitTailement {

  firstUpdated() {
    const title = document.getElementsByTagName('title')[0]
    title.innerText = 'About | LitElement'
  }

  render() {
    const page = html`
      <h1>About</h1>
      <p>About Page Placeholder</p>
    `
    return html`
      <prose-container .component="${page}"></prose-container>
    `
  }
  
}

customElements.define('about-page', About)