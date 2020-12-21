import { LitElement, html } from 'lit-element'

class About extends LitElement {
  createRenderRoot() {
    return this
  }
  render() {
    return html`
      <div class='max-w-none prose prose-sm lg:prose-lg xl:prose-xl'>
        <h1>About</h1>
        <p>About Page Placeholder</p>
      </div>
    `
  }
}

customElements.define('about-page', About)