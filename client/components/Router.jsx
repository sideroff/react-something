import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Body from './controllerViews/Body.jsx'
import Contacts from './controllerViews/Contacts.jsx'
import ManageAuthorPage from './controllerViews/ManageAuthorPage.jsx'
import NotFound from './NotFound.jsx'

export default class Router extends React.Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/' component={Body} />
                    <Route path='/contacts' component={Contacts} />
                    <Route path='/authors' component={ManageAuthorPage} />
                    <Route component={NotFound} />
                </Switch>
            </div>
        )
    }
}