import React from 'react'

import AuthorForm from '../AuthorForm.jsx'

export default class ManageAuthorPage extends React.Component {
    constructor(props) {
        super(props)

        this.setAuthorState = this.setAuthorState.bind(this)

        this.state = { author: { id: '', firstName: '', lastName: '' } }
    }

    setAuthorState(event) {
        let field = event.target.name
        let value = event.target.value
        this.state.author[field] = value
        return this.setState({ author: this.state.author })
    }

    render() {
        return (
            <div>
                <h1>Authors</h1>
                <AuthorForm
                    author={this.state.author}
                    onChange={this.setAuthorState} />
            </div>
        )
    }
}

module.exports = ManageAuthorPage