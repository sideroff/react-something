import React from 'react'
import Header from './Header.jsx'
import Body from './Body.jsx'
import Home from './Home.jsx'
import Contacts from './Contacts.jsx'
import NotFound from './NotFound.jsx'
import Footer from './Footer.jsx'
import Navigation from './Navigation.jsx'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

export default class App extends React.Component {
  render() {
    return (
      < BrowserRouter >
        <div>
          <Header />
          <Switch>
            <Route exact path='/' component={Body} />
            <Route path='/contacts' component={Contacts} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter >
    )
  }
}