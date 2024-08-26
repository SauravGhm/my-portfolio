import React from 'react';
import './Contact.css'; // Import custom CSS for the contact form

const Contact = () => {
    return (
        <section id="contact" className="contact-section" data-aos="fade-up">
            <h2>Contact Me</h2>
            <p>If you have any questions, feel free to reach out to me through the form below!</p>
            <form className="contact-form">
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required />
                </div>
                
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                </div>
                
                <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" rows="4" required></textarea>
                </div>

                <button type="submit" className="submit-btn">Submit</button>
            </form>
        </section>
    );
};

export default Contact;
