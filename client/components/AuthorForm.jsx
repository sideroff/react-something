import React from 'react'

import Input from './common/Input.jsx'

export default class AuthorForm extends React.Component {
    render() {
        return (
            <div>
                <h2>AuthorForm</h2>
                <form>
                    <label htmlFor="firstName">First Name</label>
                    <input type="text"
                        name="firstName"
                        placeholder="First Name"
                        ref="firstName"
                        value="" />
                    <br />
                    <Input />
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text"
                        name="lastName"
                        placeholder="Last Name"
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