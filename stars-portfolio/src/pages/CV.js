import React from 'react';
import '../style.css';

const CV = () => {
    return (
        <div className="cv-container">
            <h1>Dynamic CV coming later... Here is a link to a PDF instead:</h1>
            <a href="https://www.canva.com/design/DAFYI2ZbvTA/9atjN4sURqGViH8GWPvXxw/edit?utm_content=DAFYI2ZbvTA&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" target="_blank" rel="noopener noreferrer">
                <button className="cvbutton">View CV</button>
            </a>
        </div>
    );
}

export default CV;