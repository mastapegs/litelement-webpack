import { LitElement, html } from 'lit-element'

class About extends LitElement {
  firstUpdated() {
    const title = document.getElementsByTagName('title')[0]
    title.innerText = 'About | LitElement'
  }
  render() {
    return html`
      <h1>About</h1>
      <p>About Page Placeholder</p>
    `
  }
}

customElements.define('about-page', About)