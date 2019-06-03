import React, {Component} from 'react'
import axios from 'axios'
import {updateUser} from '../redux/userReducer'
import { connect } from 'react-redux'

class Details extends Component {
    componentDidMount(){
        axios.get
        this.props
    }
    render() {
        return <h1>Details</h1>
    }
    .catch((err) => )
}

render() {
    console.log(this.props);
    return (
        <div>
            <h1>Details</h1>
        </div>
    )
}

export default Details