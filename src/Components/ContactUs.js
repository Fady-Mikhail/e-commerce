import React, { useState } from 'react';
import './ContactUs.css';

function ContactUs() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`);
    // Do something with the form data, such as sending it to a server
  };

  return (
    <div className="container">
      <h1>Contact Us</h1>

      <div className="map-container">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60377.422685187715!2d-122.41941509062526!3d37.774929536615264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808580bac44b437f%3A0x1b078a40b8ffea15!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sin!4v1645889278996!5m2!1sen!2sin" title="Location" width="600" height="450" loading="lazy"></iframe>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={name} onChange={(event) => setName(event.target.value)} required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={email} onChange={(event) => setEmail(event.target.value)} required />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="phone">Phone:</label>
            <input type="tel" id="phone" name="phone" value={phone} onChange={(event) => setPhone(event.target.value)} required />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" value={message} onChange={(event) => setMessage(event.target.value)} required></textarea>
          </div>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ContactUs;
