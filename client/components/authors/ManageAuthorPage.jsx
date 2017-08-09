import React from 'react'
import AuthorForm from './AuthorForm.jsx'

const ManageAuthorPage = React.createClass ({
    getInitialState: function() {
        return { author: { id: '', firstName: '', lastName: '' } }
    },
    setAuthorState: function(event) {
        let field = event.target.name
        let value = event.target.value
        this.state.author[field] = value
        return this.setState({ author: this.state.author })
    },
    render: function() {
        return (
            <div>
                <h1>Authors</h1>
                <AuthorForm
                    author={this.state.author}
                    onChange={this.setAuthorState} />
            </div>
        )
    }
})
module.exports = ManageAuthorPage