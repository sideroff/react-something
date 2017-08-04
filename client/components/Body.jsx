import React from 'react'

export default class Body extends React.Component {
    constructor(props) {
        super(props)

        this.test = this.test.bind(this)
    }

    test() {
        fetch('api/test').then(response => {
            response.json().then(res => console.log(res))
        }).catch(error => {
            console.dir(error)
        })
    }

    render() {
        return (
            <main>
                <h1>HI THIS IS BODY</h1>
                <button onClick={this.test}>Test</button>
            </main>
        )
    }
}