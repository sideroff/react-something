import React from 'react'

import UserActions from '../../actions/userActions'
import UserRegistrationForm from '../UserRegistrationForm.jsx'

export default class Users extends React.Component {
    constructor(props) {
        super(props)

        this.setUserState = this.setUserState.bind(this)
        this.registerUser = this.registerUser.bind(this)

        this.state = { user: { id: '', firstName: '', lastName: '', email: '', password: '', confirmPassword: '' } }
    }

    setUserState(event) {
        console.log('user')
        console.dir(this.state.user)
        console.log('targetName')
        console.dir(event.target.name)
        console.log('targetValue')
        console.dir(event.target.value)
        let field = event.target.name
        let value = event.target.value
        this.state.user[field] = value
        return this.setState({ user: this.state.user })
    }

    registerUser(event) {
        event.preventDefault()
        console.dir(UserActions.registerUser)
        UserActions.registerUser(this.state.user)
    }

    render() {
        return (
            <div>
                <h1>Users</h1>  
                <UserRegistrationForm
                    author={this.state.user}
                    onChange={this.setUserState}
                    onSubmit={this.registerUser} />
            </div>
        )
    }
}