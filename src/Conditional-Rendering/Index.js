import React, { Component } from 'react'
import HomePage from './HomePage'
import LoginPage from './LoginPage'

export default class Index extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn:true
        }
    }
    
    render() {
        return (
            <div>
                {this.state.isLoggedIn===false?<LoginPage/>:<HomePage/>}
            </div>
        )
    }
}
