import React, { Component } from 'react'

export default class Card2 extends Component {
    render() {
        return (
            <div>
                <h3>{this.props.name} {this.props.desc}</h3>
            </div>
        )
    }
}
