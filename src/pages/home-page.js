import { html } from 'lit-element'
import LitTailement from '../utils/LitTailement'

class HomePage extends LitTailement {

  firstUpdated() {
    const title = document.getElementsByTagName('title')[0]
    title.innerText = 'Home | LitElement'
  }

  render() {
    const page = html`
      <h1>Styling an entire block of Vanilla HTML with Tailwind</h1>
      <p>Right off the bat, check out how cool this code block looks...</p>
      <pre><code>console.log('Hello, World!!!')</code></pre>
      <p>That is amazing!</p>
    `
    return html`
      <prose-container .component="${page}"></prose-container>
    `
  }
  
}

customElements.define('home-page', HomePage)