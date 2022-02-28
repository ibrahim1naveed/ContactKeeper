import React, { useContext, useState } from 'react'
import ContactContext from '../../context/contact/contactContext';

const ContactForm = () => {
    // instead of having a state for each piece of attribute we will just have a single piece of object
    // called setContact
    const [ contact, setContact ] = useState({
        name: '',
        email: '',
        phone: '',
        type: 'personal'
    });

    const { name, email, phone, type} = contact;
    const contactContext = useContext(ContactContext);

    // function that takes in an event parameter ... ==> spread operator.
    // e,target.name is the current state
    // e.target.value is what we type in
    const onChange = e => 
        setContact({ ...contact, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        contactContext.addContact(contact);
        setContact({
            name: '',
            email: '',
            phone: '',
            type: 'personal'
        });
    }

  return (
      <form onSubmit={onSubmit}>
          <h2 className='text-primary'>
              Add Contact
          </h2>
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
                <input type='submit' value="Add Contact" className='btn btn-primary btn-block'/>
            </div>
      </form>
  )
}

export default ContactForm;