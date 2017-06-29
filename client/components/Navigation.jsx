import React from 'react'
import App from './App.jsx'
import Contacts from './Contacts.jsx'
import NavLink from 'react-router-dom'

export default class Navigation extends React.Component {
    render() {
        return(
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/contacts">Contacts</NavLink></li>
            </ul>
        )
    }
}

