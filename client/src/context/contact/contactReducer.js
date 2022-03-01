import { 
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACTS,
    CLEAR_FILTER

} from '../types';

export default (state, action) => {
    switch(action.type) {
        case ADD_CONTACT:
            return {
                ...state, // current state
                contacts: [...state.contacts, action.payload]
            };
        case DELETE_CONTACT:
            return {
                ...state, // current state
                // return all contacts that are not this id given in the action. Delete that one!!
                contacts: state.contacts.filter(
                    contact => contact.id !== action.payload)
            }
        default: 
            return state;
    }
};
