import React, { useEffect } from "react";
import { useState } from 'react'
import { ContactForm } from '../../components/contactForm/ContactForm'
import { TileList } from '../../components/tileList/TileList'


export const ContactsPage = ({handleContact,contacts}) => {
  const [isDuplicate, setIsDuplicate] = useState(false)

  //current values
  const [ name, setName ] = useState('');
  const [ phone, setPhone ] = useState('');
  const [ email, setEmail ] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    //checking if name is duplicate
    if(!isDuplicate) {
      handleContact(name, phone, email)
      //clearing the form
      setName('');
      setPhone('')
      setEmail('')
    } else (alert('Contact name is already in use'))
    
  };
  //checking if duplicate
  useEffect(() => {
    if(contacts.find(element => element.name === name)) {
      setIsDuplicate(true)
      alert('Contact name is already in use');
    } else { setIsDuplicate(false) }
  }, [name])

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm 
        name={name}
        setName={setName}
        phone={phone}
        setPhone={setPhone}
        email={email}
        setEmail={setEmail}
        handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList information={contacts}/>
      </section>
    </div>
  );
};
