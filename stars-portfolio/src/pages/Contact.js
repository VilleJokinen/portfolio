import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import '../style.css';

const Contact = () => {
    const form = useRef();
    const [buttonText, setButtonText] = useState('Send Me a Message');
    const [buttonColor, setButtonColor] = useState('#0077b5');

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'service_eth46zs',
                'template_lckhc6n',
                form.current,
                'mwHUJqu4_uNPwawaG'
            )
            .then(
                (result) => {
                    console.log('Success:', result.text);
                    setButtonText('Message Sent Successfully!');
                    setButtonColor('#28a745'); // Green color for success
                },
                (error) => {
                    console.log('Error:', error.text);
                    setButtonText('Failed to Send Message');
                    setButtonColor('#dc3545'); // Red color for failure
                }
            );

        e.target.reset();
    };

    return (
        <div className="contact-container">
            <h1>Contact Me</h1>

            {/* Contact Information Section */}
            <div className="contact-info">
                <p>
                    <strong>Email:</strong>{' '}
                    <a href="mailto:villeejjokinen@gmail.com">
                        villeejjokinen@gmail.com
                    </a>
                </p>
                <p>
                    <strong>Phone:</strong>{' '}
                    <a href="tel:+358449806622">+358 44 9806622</a>
                </p>
                <p>
                    <strong>LinkedIn:</strong>{' '}
                    <a
                        href="https://www.linkedin.com/in/ville-jokinen-9257a5261/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Ville Jokinen
                    </a>
                </p>
            </div>

            {/* Form Section */}
            <form ref={form} onSubmit={sendEmail} className="contact-form">
                <label htmlFor="name">Your Name:</label>
                <input type="text" id="name" name="user_name" required />

                <label htmlFor="email">Your Email:</label>
                <input type="email" id="email" name="user_email" required />

                <label htmlFor="message">Your Message:</label>
                <textarea id="message" name="user_message" rows="5" required />

                <button type="submit" className="send-button" style={{ backgroundColor: buttonColor }}>
                    {buttonText}
                </button>
            </form>
        </div>
    );
};

export default Contact;