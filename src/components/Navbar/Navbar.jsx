import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import {Button} from '../../components/Button/Button';
import '../../components/Navbar/Navbar.css';

function Navbar() {

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
  
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
  
    const showButton = () => {
      if (window.innerWidth <= 960) {
        setButton(false);
      } else {
        setButton(true);
      }
    };
  
    useEffect(() => {
      showButton();
    }, []);
  
    window.addEventListener('resize', showButton);

    return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            Finverko
            <i class='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/om-oss' className='nav-links' onClick={closeMobileMenu}>
                Om oss
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/maskinpark'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Maskinpark
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/english' className='nav-links' onClick={closeMobileMenu}>
                In English
              </Link>
            </li>
            <li>
              <Link
                to='/kontakta-oss'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
            Kontakta oss
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>Kontakta oss</Button>}
        </div>
      </nav>
    </>
    )
}

export default Navbar