import React from 'react'
import Header from './Header.jsx'
import Body from './Body.jsx'
import Home from './Home.jsx'
import Contacts from './Contacts.jsx'
import Footer from './Footer.jsx'
import Navigation from './Navigation.jsx'
import { BrowserRouter, Route } from 'react-router-dom'

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header></Header>
          <Route exact path='/' component={Body} />
          <Route exact path='/contacts' component={Contacts} />
          <Footer></Footer>
        </div>
      </BrowserRouter>
    )
  }
}