import { LitElement, html } from 'lit-element'

class Contact extends LitElement {
  createRenderRoot() {
    return this
  }
  render() {
    return html`
      <div class='max-w-none prose prose-sm lg:prose-lg xl:prose-xl'>
        <h1>Contact</h1>
        <p>Contact Page Placeholder</p>
      </div>
    `
  }
}

customElements.define('contact-page', Contact)