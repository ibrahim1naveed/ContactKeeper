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
                name: 'Sam Smith',
                email: 'sam@gmail.com',
                phone: '222-222-222',
                type: 'professional'
            },
            {
                id: 3,
                name: 'Sara Johnson',
                email: 'sara@gmail.com',
                phone: '333-333-333',
                type: 'personal'
            }
        ],
        current: null,
        filtered: null
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
    const deleteContact = id => {
        // dispatch to our reducer
        dispatch({ type: DELETE_CONTACT, payload: id });
    }

    // Set current contact
    const setCurrent = contact => {
        // dispatch to our reducer
        dispatch({ type: SET_CURRENT, payload: contact });
    }

    // Clear current contact
    const clearCurrent = () => {
        // dispatch to our reducer
        dispatch({ type: CLEAR_CURRENT });
    }

    // Update contact
    const updateContact = contact => {
         // dispatch to our reducer
         dispatch({ type: UPDATE_CONTACT, payload: contact });
    }   

    // Filter contacts
    const filterContacts = text => {
        // dispatch to our reducer
        dispatch({ type: FILTER_CONTACTS, payload: text });
    }

    // Clear filter
    const clearFilter = () => {
        // dispatch to our reducer
        dispatch({ type: CLEAR_FILTER });
    }

    // RETURN OUR PROVIDER. The idea is to wrap our entire application with this context
    return (
        // Anything that we need to access from other components including actions and state need to go 
        // in value="" 
        <ContactContext.Provider 
        value={{
            contacts: state.contacts,
            current: state.current,
            filtered: state.filtered,
            addContact,//whenever we need to access anything through a component via the context we add it here.
            deleteContact, // very importtant to provide this as we are providing this function to our component.
            setCurrent,
            clearCurrent,
            updateContact,
            filterContacts,
            clearFilter
            
           }}>
            { props.children }
        </ContactContext.Provider>
    )
};

export default ContactState;

