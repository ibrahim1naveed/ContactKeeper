import React, { useContext, useEffect, useState } from 'react'
import ContactContext from '../../context/contact/contactContext';

const ContactForm = () => {
    // instead of having a state for each piece of attribute we will just have a single piece of object
    // called setContact
    const contactContext = useContext(ContactContext);
    const [ contact, setContact ] = useState({
        name: '',
        email: '',
        phone: '',
        type: 'personal'
    });

    const { name, email, phone, type} = contact;
    const { addContact, current, clearCurrent, updateContact } = contactContext;

    useEffect(() => {
        if (current !== null) {
            setContact(current);
            
        } else { // do nothing and keep it to its default state basically!
            setContact({
                name: '',
                email: '',
                phone: '',
                type: 'personal'
            });

        }
    }, [contactContext, current]); // do only if these two values have been changed!

    // function that takes in an event parameter ... ==> spread operator.
    // e,target.name is the current state
    // e.target.value is what we type in
    const onChange = e => 
        setContact({ ...contact, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        if (current === null) {
            addContact(contact);
        } else {
            updateContact(contact);
        }
        
    }

    const clearAll = () => {
        clearCurrent();
    }

  return (
      <form onSubmit={onSubmit}>
          <h2 className='text-primary'>{current ? 'Edit Contact' : 'Add Contact'}</h2>
          <input
            type='text'
            placeholder='Name'
            name='name'
            value={name}
            onChange={onChange}
            />
            <input
            type='text'
            placeholder='Email'
            name='email'
            value={email}
            onChange={onChange}
            />
            <input
            type='text'
            placeholder='Phone'
            name='phone'
            value={phone}
            onChange={onChange}
            />
            <h5>Contact Type</h5>
            <input type="radio" name="type" value="personal" checked={type === 'personal'} onChange={onChange}/>
            Personal {' '}
            <input type="radio" name="type" value="professional" checked={type === 'professional'} onChange={onChange}/>
            Professional {' '}
            <div>
                <input type='submit' value={current ? 'Update Contact' : 'Add Contact'} className='btn btn-primary btn-block'/>
            </div>
            {current && 
            <div>
                <button className='btn btn-light btn-block' onClick={clearAll}>
                    Clear
                </button>   
            </div>}
      </form>
  )
}

export default ContactForm;