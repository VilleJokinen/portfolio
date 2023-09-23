import React from 'react';
import '../style.css';

const Contact = () => {
    return(
        <div>
            <h1>Contact me: </h1>
            
            <a href="mailto:villeejjokinen@gmail.com" target="_blank" rel="noopener noreferrer">
                <button className="mailbutton">Email: villeejjokinen@gmail.com</button>
            </a>
            <div>
            <a>
                Phone: +358 9806622
                </a>
            </div>
        </div>
    )
}

export default Contact;