import React from 'react'
import Header from './Header.jsx'
import Body from './Body.jsx'
import Home from './Home.jsx'
import Contacts from './Contacts.jsx'
import NotFound from './NotFound.jsx'
import Footer from './Footer.jsx'
import Navigation from './Navigation.jsx'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header></Header>
            <Route exact path='/' component={Body} />
            <Route exact path='/contacts' component={Contacts} />
            <Route path='/404' component={NotFound} />

            <Redirect from='*' to='/404' />
            <Footer></Footer>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}