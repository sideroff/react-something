import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Router from './Router.jsx'

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Router />
        </div>
      </BrowserRouter>
    )
  }
}