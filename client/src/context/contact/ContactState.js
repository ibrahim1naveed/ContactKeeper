import React, { useReducer } from 'react';
import { v4 as uuid } from 'uuid';
import ContactContext from './contactContext';
import ContactReducer from './contactReducer';
import { 
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACTS,
    CLEAR_FILTER

} 
    from '../types';

// Creating our initial state

const ContactState = props => {
    const initialState = {
        contacts: [
            {
                id: 1,
                name: 'Jill Johnson',
                email: 'jill@gmail.com',
                phone: '111-111-111',
                type: 'personal'
            },
            {
                id: 2,
                name: 'Jill Johnson',
                email: 'jill@gmail.com',
                phone: '111-111-111',
                type: 'professional'
            },
            {
                id: 3,
                name: 'Jill Johnson',
                email: 'jill@gmail.com',
                phone: '111-111-111',
                type: 'personal'
            }
        ]
    };
    // state allows us to access anything in our state.
    // dispatch allows us to dispatch objects to the 'Reducer'.
    const [state, dispatch] = useReducer(ContactReducer, initialState);

    // All of our actions
    
    // Add contact
    const addContact = contact => {
        contact.id = uuid();
        // dispatch to our reducer
        dispatch({ type: ADD_CONTACT, payload: contact });
    }

    // Delete contact

    // Set current contact

    // Clear current contact

    // Update contact

    // Filter contacts

    // Clear filter

    // RETURN OUR PROVIDER. The idea is to wrap our entire application with this context
    return (
        // Anything that we need to access from other components including actions and state need to go 
        // in value="" 
        <ContactContext.Provider 
        value={{
            contacts: state.contacts,
            addContact //whenever we need to access anything through a component via the context we add it here.
           }}>
            { props.children }
        </ContactContext.Provider>
    )
};

export default ContactState;

