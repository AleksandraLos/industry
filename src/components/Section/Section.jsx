import React from 'react';
import '../../components/Section/Section.css';

function Section() {
  return (
    <>
    <div className="section-container">
      <div className="section-item">
        <h1>Det här är vi</h1>
       <p>Lorem ipsum dolor sit amet consectetur.</p>
      </div>
      <div className="section-item">
        <img src="/img/personal.jpg" alt=""/>
      </div>
    </div>
    </>
  )
}

export default Section