import React from 'react'

const initialState = {
    persons: []
}

const Reducer = (state = initialState, action) => {
    if (action.type === 'personAdded') {
        const newPerson = {
            id: Math.random(),
            name: action.personData.name,
            age: action.personData.age
        }
        return {
            ...state,
            persons: state.persons.concat(newPerson)
        }
    }
    if (action.type === 'personDeleted') {
        return {
            ...state,
            persons: state.persons.filter(person => person.id !== action.id)
        }
    }
    return state;
}

export default Reducer;