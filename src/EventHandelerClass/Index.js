import React, { Component } from 'react'

export default class Index extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             changedValue: ' '
        }
    }
    handelClick = ()=>{
        console.log("Button Clicked")
    }
    handelOnchange = (e) => {
        // console.log(e.target.value)
        this.setState({
            changedValue : e.target.value
        },()=>{
            console.log(this.state.changedValue)
        })
        
    }
    
    
    render() {
        return (
            <div>
                <input className="btn btn-primary" onClick={this.handelClick} type="button" value="clicke here"/>
                <br />
                <input type="text" onChange={this.handelOnchange} />
                <p>{this.state.changedValue}</p>
            </div>
        )
    }
}
