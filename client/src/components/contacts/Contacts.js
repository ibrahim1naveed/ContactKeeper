import React from 'react'
import { useContext, Fragment } from 'react';
import ContactContext from '../../context/contact/contactContext';
import ContactItem from './ContactItem';
import {  CSSTransition, TransitionGroup } from 'react-transition-group';

 const Contacts = () => {
    // with this i have access to any state or methods or action associated to this 'context'.
    const contactContext = useContext(ContactContext);

    const { contacts, filtered } = contactContext;

    if (contacts.length === 0) {
      return <h4>Please add a contact</h4>;
    }

  return (
    <Fragment>
      {filtered !== null ? filtered.map(
          contact => (<ContactItem key={contact.id} contact={contact}/>
          ))
        : contacts.map(
          contact => (<ContactItem key={contact.id} contact={contact}/>
          ))}
    </Fragment>
  );
};

export default Contacts;
