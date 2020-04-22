import React, { Component } from 'react';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';
import { connect } from 'react-redux';

class Persons extends Component {

    addPerson = () => {
        const newPerson = {
            id: Math.random(), // not really unique but good enough here!
            name: 'Mevin',
            age: Math.floor(Math.random() * 40)
        }
        this.props.personAddedHandler(newPerson)
    }
    render() {
        return (
            <div>
                <AddPerson personAdded={this.addPerson} />
                {this.props.persons.map(person => (
                    <Person
                        key={person.id}
                        name={person.name}
                        age={person.age}
                        clicked={() => this.props.personDeletedHandler(person.id)} />
                ))}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        persons: state.persons
    }
}

const mapDispatcherToProps = dispatch => {
    return {
        personAddedHandler: (newPerson) => dispatch({ type: 'personAdded', newPerson }),
        personDeletedHandler: (id) => dispatch({ type: 'personDeleted', id })
    }
}

export default connect(mapStateToProps, mapDispatcherToProps)(Persons);