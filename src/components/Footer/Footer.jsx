import React from 'react';
import '../../components/Footer/Footer.css';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div> <div className='footer-container'>
    <section className='footer-subscription'>
      <p className='footer-subscription-heading'>
        Kontakta oss redan idag !
      </p>
      <p className='footer-subscription-text'>
        Lorem ipsum
      </p>
    </section>
    <div class='footer-links'>
      <div className='footer-link-wrapper'>
        <div class='footer-link-items'>
          <h2><Link to='/maps'>Vi finns här</Link></h2>
          <p>
              Finverko AB <br/>Mogatan 1<br/> 254 64 Helsingborg</p>
          
        </div>
      </div>
      <div className='footer-link-wrapper'>
        <div class='footer-link-items'>
          <h2>E-post</h2>
          <a href = "mailto: mail@finverko.se">mail@finverko.se</a>
        </div>
        <div class='footer-link-items'>
          <h2>Telefon</h2>
          <a href="tel:+46 42 161100">Tel: + 46 42 161100</a>
          <a href="tel:+46 42 161101">Fax: + 46 42 161101</a>
        </div>
      </div>
    </div>
  </div>
);</div>
  )
}
