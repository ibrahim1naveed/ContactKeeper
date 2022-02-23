import React from 'react'
import Contacts from '../contacts/Contacts'

const Home = () => {
  return (
    // in the css file i have grid-2 as a class for a two column grid to structure the home page.
    <div className="grid-2"> 
      <div>
        {/*Contact Form*/}
      </div>
      <div>
        <Contacts></Contacts>
      </div>

    </div>
  );
};

export default Home
