import React from 'react'

import Input from './common/Input.jsx'

export default class UserRegistrationForm extends React.Component {
    render() {
        return (
            <div>
                <h2>Register</h2>
                <form onSubmit={this.props.onSubmit} >
                    <Input
                        labelFor="firstName"
                        labelText="First Name"
                        type="text"
                        name="firstName"
                        ref="firstName"
                        onChange={this.props.onChange}
                        value={this.props.author.firstName} />
                    <br />
                    <Input
                        labelFor="lastName"
                        labelText="Last Name"
                        type="text"
                        name="lastName"
                        ref="lastName"
                        onChange={this.props.onChange}
                        value={this.props.author.lastName} />
                    <br />
                    <Input
                        labelFor="email"
                        labelText="Email"
                        type="text"
                        name="email"
                        ref="email"
                        onChange={this.props.onChange}
                        value={this.props.author.email} />
                    <br />
                    <Input
                        labelFor="password"
                        labelText="Password"
                        type="password"
                        name="password"
                        ref="password"
                        onChange={this.props.onChange}
                        value={this.props.author.password} />
                    <br />
                    <Input
                        labelFor="confirmPassword"
                        labelText="Confirm Password"
                        type="password"
                        name="confirmPassword"
                        ref="confirmPassword"
                        onChange={this.props.onChange}
                        value={this.props.author.confirmPassword} />
                    <br />
                    <input type="submit"
                        value="Save"/>
                </form >
            </div>
        )
    }
}