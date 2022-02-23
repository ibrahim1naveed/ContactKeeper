import React from 'react'
import { useContext, Fragment } from 'react';
import ContactContext from '../../context/contact/contactContext';
import ContactItem from './ContactItem';

 const Contacts = () => {
    // with this i have access to any state or methods or action associated to this 'context'.
    const contactContext = useContext(ContactContext);

    const { contacts } = contactContext;

  return (
    <Fragment>
        {contacts.map(contact => (
        <ContactItem key={contact.id} contact={contact}></ContactItem>
        ))}
    </Fragment>
  );
};

export default Contacts;
