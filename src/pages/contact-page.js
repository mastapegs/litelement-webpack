import { LitElement, html } from 'lit-element'

class Contact extends LitElement {
  firstUpdated() {
    const title = document.getElementsByTagName('title')[0]
    title.innerText = 'Contact | LitElement'
  }
  render() {
    return html`
      <h1>Contact</h1>
      <p>Contact Page Placeholder</p>
    `
  }
}

customElements.define('contact-page', Contact)