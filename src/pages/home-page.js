import { LitElement, html } from 'lit-element'

class HomePage extends LitElement {
  createRenderRoot() {
    return this
  }
  render() {
    return html`
    <div class='shadow-md max-w-md mx-auto px-10 py-4 my-3 bg-white'>LitElement Web App</div>
    <div class='container mx-auto p-6 bg-white rounded-lg shadow-lg'>
      <div class='max-w-none prose prose-sm lg:prose-lg xl:prose-xl'>
        <h1>Styling an entire block of Vanilla HTML with Tailwind</h1>
        <p>Right off the bat, check out how cool this code block looks...</p>
        <pre><code>console.log('Hello, World!!!')</code></pre>
        <p>That is amazing!</p>
      </div>
    </div>
    `
  }
}

customElements.define('home-page', HomePage)