import { html } from 'lit-element'
import LitTailement from '../utils/LitTailement'

class ProseContainer extends LitTailement {
  
  static get properties() {
    return {
      component: { type: Object },
    }
  }

  firstUpdated() {
    const title = document.getElementsByTagName('title')[0]
    title.innerText = 'Home | LitElement'
  }

  render() {
    return html`
    <div class='max-w-none prose prose-sm lg:prose-lg xl:prose-xl'>
      ${this.component}
    </div>
    `
  }
  
}

customElements.define('prose-container', ProseContainer)