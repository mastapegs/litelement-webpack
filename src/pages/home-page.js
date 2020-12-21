import { LitElement, html } from 'lit-element'

class HomePage extends LitElement {
  createRenderRoot() {
    return this
  }
  render() {
    return html`
    <div class='max-w-none prose prose-sm lg:prose-lg xl:prose-xl'>
      <h1>Styling an entire block of Vanilla HTML with Tailwind</h1>
      <p>Right off the bat, check out how cool this code block looks...</p>
      <pre><code>console.log('Hello, World!!!')</code></pre>
      <p>That is amazing!</p>
    </div>
    `
  }
}

customElements.define('home-page', HomePage)