import React from 'react'
import { Link } from 'react-router-dom'

export default class Navigation extends React.Component {
    render() {
        return (
            <div>
                <Link to="/">Home</Link>
                <Link to="/contacts">Contacts</Link>
                <Link to="/authors">Authors</Link>
            </div>
        )
    }
}