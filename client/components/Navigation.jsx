import React from 'react'
import App from './App.jsx'
import Contacts from './Contacts.jsx'
import { NavLink } from 'react-router-dom'

export default class Navigation extends React.Component {
    render() {
        return (
            <div>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/contacts">Contacts</NavLink>
            </div>
        )
    }
}

