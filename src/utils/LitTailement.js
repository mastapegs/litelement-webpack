import { LitElement, css, unsafeCSS } from 'lit-element'
import tailwind from '!!raw-loader!../tailwind.css'

class LitTailement extends LitElement {
  static get styles() {
    return css`${unsafeCSS(tailwind)}`
  }
}

export default LitTailement