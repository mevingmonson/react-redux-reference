import React from 'react'

const initialState = {
    persons: []
}

const Reducer = (state = initialState, action) => {
    if (action.type === 'personAdded') {
        return {
            ...state,
            persons: state.persons.concat(action.newPerson)
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