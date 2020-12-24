import { LitElement, html } from 'lit-element'

class HomePage extends LitElement {
  firstUpdated() {
    const title = document.getElementsByTagName('title')[0]
    title.innerText = 'Home | LitElement'
  }
  render() {
    return html`
      <h1>Home Page</h1>
      <p>litelement.matthewpagan.com landing page</p>
    `
  }
}

customElements.define('home-page', HomePage)