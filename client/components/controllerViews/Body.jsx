import React from 'react'

export default class Body extends React.Component {
    constructor(props) {
        super(props)

        this.test = this.test.bind(this)
        this.a = 5
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
                <form action="">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" value=""/>
                    <input type="password" id="password" />
                </form>
                <button onClick={this.test}>Test</button>
            </main>
        )
    }
}