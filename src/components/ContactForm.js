import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const serviceID = 'service_r3sreim';
    const templateID = 'template_1nosx0b';
    const userID = 'GCfa_OgC0Vpzov1Z7ccGh';

    emailjs.sendForm(serviceID, templateID, e.target, userID)
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

    setName('');
    setEmail('');
    setMessage('');
    setPhone('');
    setService('');
  };

  return (
    <form onSubmit={handleSubmit}>
        <div className="row">
            <div className="form-group col-md-6">
                <input type="text" className="form-control" name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
            </div>
            <div className="form-group col-md-6">
                <input type="email" className="form-control" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
            </div>
        </div>
        <div className="row">
            <div className="form-group col-md-6">
            <input type="number" className="form-control" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)}  placeholder="Phone Number"/>
            </div>
            <div className="form-group col-md-6">
                <select id="inputState" className="form-control"  value={service} onChange={(e) => setService(e.target.value)}>
                    <option selected>Select Your Service</option>
                    <option value="renovation">Renovations</option>
                    <option value="building_inspections">Building Inspections</option>
                    <option value="custom_home">Custom Home Development</option>
                </select>
            </div>
        </div>
        <div className="form-group">
            <textarea className="form-control" name="message" value={message} onChange={(e) => setMessage(e.target.value)} rows="5" placeholder="Additional Details"></textarea>
        </div>
        <button type="submit" className="btn btn-default w-100 mt-3">Submit Request</button>
    </form>
  );
};

export default ContactForm;
