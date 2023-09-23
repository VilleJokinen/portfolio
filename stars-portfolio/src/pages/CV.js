import React from 'react';
import '../style.css';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import ReactPDF from '@react-pdf/renderer';


const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});
const CV = () => {
    return(
    <div>
            <h1>Dynamic cv coming later... Here is a link to a pdf instead:</h1>
            

            <a href="https://www.canva.com/design/DAFYI2ZbvTA/9atjN4sURqGViH8GWPvXxw/edit?utm_content=DAFYI2ZbvTA&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" target="_blank" rel="noopener noreferrer">
                <button className="cvbutton">Click</button>
            </a>

            


    </div>
    )
    
}


export default CV;