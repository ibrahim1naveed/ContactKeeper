import React from 'react'
import ContactForm from '../contacts/ContactForm';
import Contacts from '../contacts/Contacts';
import ContactFilter from '../contacts/contactFilter';

const Home = () => {
  return (
    // in the css file i have grid-2 as a class for a two column grid to structure the home page.
    <div className="grid-2"> 
      <div>
        <ContactForm></ContactForm>
      </div>
      <div>
        <ContactFilter/>
        <Contacts/>
      </div>

    </div>
  );
};

export default Home
