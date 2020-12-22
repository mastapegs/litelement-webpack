import { html } from 'lit-element'
import LitTailement from '../utils/LitTailement'
import '../components/prose-container'

class Contact extends LitTailement {

  firstUpdated() {
    const title = document.getElementsByTagName('title')[0]
    title.innerText = 'Contact | LitElement'
  }

  render() {
    const page = html`
      <h1>Contact</h1>
      <p>Contact Page Placeholder</p>
    `
    return html`
      <prose-container .component="${page}"></prose-container>
    `
  }
  
}

customElements.define('contact-page', Contact)