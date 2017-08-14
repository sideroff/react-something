import React from 'react'

export default class Input extends React.Component {
    constructor(props) {
        super(props)

        this.props = props
    }

    render() {
        return (
            <div className={this.props.className + "-wrapper"}>
                <label htmlFor={this.props.labelFor || this.props.id || this.props.name}
                    className={this.props.className + "-label"}>{this.props.labelText}</label>
                <input id={this.props.id}
                    name={this.props.name}
                    className={this.props.className}
                    type={this.props.type}
                    onChange={this.props.onChange}
                    value={this.props.value} />
            </div>
        )
    }
}