import { LitElement, html } from 'lit-element'
import { Router } from '@vaadin/router'
import "./styles.css"
import './components/top-bar'
import './pages/home-page'
import './pages/about-page'
import './pages/contact-page'

class App extends LitElement {

  createRenderRoot() {
    return this
  }

  firstUpdated() {
    const outlet = document.getElementById('router-outlet')
    const router = new Router(outlet)
    router.setRoutes([
      { path: '/', component: 'home-page' },
      { path: '/about', component: 'about-page' },
      { path: '/contact', component: 'contact-page' },
    ])
  }

  render() {
    return html`
      <top-bar></top-bar>
      <div id='router-outlet'></div>
    `
  }

}

customElements.define('custom-app', App)