import { LitElement, html, css } from 'lit-element'

class TopBar extends LitElement {

  static get styles() {
    return css`
      nav {
        background: hsl(220, 100%, 50%);
        color: white;
        box-shadow: 0 2px 2px rgba(0, 0, 0, 0.5);
      }
      ul {
        display: flex;
        margin: 0;
        padding: 0;
        list-style: none;
        justify-content: space-evenly;
        padding: 1rem;
      }
      a {
        display: inline-block;
        background: hsla(220, 50%, 50%, 1);
        padding: 0.5rem 1rem;
        border-radius: 20%;
        box-shadow: 0 2px 2px rgba(0, 0, 0, 0.5);
        color: inherit;
        text-decoration: inherit;
        text-shadow: 1px 1px black;
        font-weight: bold;
      }
      a:active {
        box-shadow: inset 0px 0px 3px 3px rgba(0, 0, 0, 0.5);
        background: hsla(220, 80%, 30%, 1);
      }
    `
  }
  
  static get properties() {
    return {
      navList: { type: Array },
    }
  }

  constructor() {
    super()
    this.navList = [
      {
        path: '/',
        text: 'Home',
      },
      {
        path: '/about',
        text: 'About',
      },
      {
        path: '/contact',
        text: 'Contact',
      },
    ]
  }

  render() {
    return html`
    <nav>
      <ul>
        ${this.navList.map(({ path, text }) =>
         html`<li><a href=${path}>${text}</a></li>`
         )}
      </ul>
    </nav>
    `
  }

}

customElements.define('top-bar', TopBar)