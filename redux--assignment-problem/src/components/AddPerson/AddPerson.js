import React, { Component } from 'react';

import './AddPerson.css';

class AddPerson extends Component {

    state = {
        name: '',
        age: ''
    }

    changeHandler = (event) => {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }
    render() {
        return (
            < div className="AddPerson" >
                <input name="name" placeholder="Your name" onChange={this.changeHandler} value={this.state.name} />
                <input name="age" placeholder="your age" onChange={this.changeHandler} value={this.state.age} />
                <button onClick={() => this.props.personAdded(this.state.name, this.state.age)}>Add Person</button>
            </div >
        )
    }

}

export default AddPerson;