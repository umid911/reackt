
import React from 'react';


class Clock extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: this.props.count
        }
        this.increment = this.increment.bind(this)
        this.increments = this.increments.bind(this)
        this.random = this.random.bind(this)
        this.res = this.res.bind(this)
    }
    increment() {
        if (this.state.count < 30) {
            this.setState({
                count: this.state.count +1
                
            })
        }
        
    }
    increments() {
        if (this.state.count > -30) {
            this.setState({
                count: this.state.count -1
                
            })
        }
        
    }
    random() {
        this.setState({
            count:Math.floor(Math.random () * (100 - 1 + 1) + 1 ) 
        })
    }
    res() {
        this.setState({
            count: 0
        })
    }


    render() {
        return (
           <div>
            <h1>{this.state.count}</h1>
            <button onClick={this.increment}>Click +</button>
            <button onClick={this.increments}>Click -</button>
            <button onClick={this.random}>Click random</button>
            <button onClick={this.res}>Click reset</button>
           </div>
        )
    }
}
export default Clock;