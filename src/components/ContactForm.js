import React, { useState } from 'react';
const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    phone: '',
    services: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://api.hsforms.com/submissions/v3/integration/submit/45794914/ad201b1e-3da2-4258-a445-ad1b5c38d184', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fields: [
            {
              name: 'firstname',
              value: formData.firstName,
            },
            {
              name: 'email',
              value: formData.email,
            },
            {
              name: 'phone',
              value: formData.phone,
            },
            {
              name: 'services',
              value: formData.services,
            },
            {
              name: 'message',
              value: formData.message,
            }
          ],
        }),
      });

      if (response.ok) {
        console.log('Form submitted successfully');
        setSubmitted(true);
      } else {
        console.error('Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };
  return (
    <div>
      {!submitted ? (
        <>
        <h4>Request A Quote</h4>
                            <p>
                                Complete control over products allow us to our customers the best quality
                                prices and services. We take great pride in everything that we do in Jhontraktor 
                            </p>
        <form onSubmit={handleSubmit}>
          <div className="row">
                <div className="form-group col-md-6">
                    <input type="text" className="form-control" name="name" value={formData.firstname} onChange={handleChange} placeholder="Name" required />
                </div>
                <div className="form-group col-md-6">
                    <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
                </div>
          </div>
          <div className="row">
                <div className="form-group col-md-6">
                <input type="number" className="form-control" name="phone" value={formData.phone} onChange={handleChange}  placeholder="Phone Number"/>
                </div>
                <div className="form-group col-md-6">
                    <select id="inputState" className="form-control" name="services" value={formData.services} onChange={handleChange} >
                        <option selected>Select Your Service</option>
                        <option value="renovation">Renovations</option>
                        <option value="custom-home-development">Custom Home Development</option>
                    </select>
                </div>
            </div>
            <div className="form-group">
                <textarea className="form-control" name="message" value={formData.message} onChange={handleChange} rows="5" placeholder="Additional Details"></textarea>
            </div>
            <button type="submit" className="btn btn-default w-100 mt-3">Submit Request</button>
        </form>
        </>
        ) : (
          <div className='form-thanks'>
            <h3>Thank You for Choosing Greene Builders!</h3>
            <p>Your project inquiry has been received, and our team will be in touch within 12 business hours to discuss your vision and answer any questions you may have.</p>
          </div>
        )}
      </div>
  );
};



export default ContactForm;
