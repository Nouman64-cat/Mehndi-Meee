import React, { useState } from 'react'
import axios from 'axios';
import './contact.css'
const Contact = () => {
  const [ name, setName] = useState('');
  const [ email, setEmail] = useState('');
  const [ phone, setPhone] = useState('');
  const [ message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create an object with the form data
    const formData = {
      name: name,
      email: email,
      phone: phone,
      message: message
    };

    axios.post('/contact', formData)
      .then((response) => {
        console.log(response.data);
        // Handle success, e.g., display a success message
      })
      .catch((error) => {
        console.error(error);
        console.log('message is not sending')
        // Handle error, e.g., display an error message
      });
  };
  
  return (
    <div className='contact-container' id='contact-area'>
      <h1 className='contact-main-header'>Book an order</h1>
    <p>Reach us through our social media account.</p>
    <form className='contact-form' onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Name'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type='email'
        placeholder='Email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type='tel'
        placeholder='Phone'
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
      />
      <textarea
        placeholder='Message'
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      />
      <button type='submit'>Submit</button>
    </form>
    </div>
  )
}

export default Contact
