import React from 'react'

import Input from './common/Input.jsx'

export default class AuthorForm extends React.Component {
    render() {
        return (
            <div>
                <h2>AuthorForm</h2>
                <form>
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
                    <input type="submit"
                        value="Save" />
                </form >
            </div>
        )
    }
}