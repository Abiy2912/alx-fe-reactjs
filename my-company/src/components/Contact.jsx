import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted!');
  };

  return (
    <div style={{ padding: '20px', backgroundColor: 'lightpink' }}>
      <h1 style={{ textAlign: 'center' }}>Contact Us</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 auto' }}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          style={{ margin: '10px 0', padding: '5px', borderRadius: '5px', border: '1px solid gray' }}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          style={{ margin: '10px 0', padding: '5px', borderRadius: '5px', border: '1px solid gray' }}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          style={{ margin: '10px 0', padding: '5px', borderRadius: '5px', border: '1px solid gray', width: '50%', height: '150px' }}
        />
        <button type="submit" style={{ margin: '10px 0', padding: '5px 10px', borderRadius: '5px', backgroundColor: 'blue', color: 'white' }}>Send Message</button>
      </form>
    </div>
  );
}

export default Contact;