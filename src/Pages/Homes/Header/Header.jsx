import React from 'react';
import Navbar from '../Navbar/Navbar';
import Banner from '../Banner/Banner';
import styles from './Header.module.css';
import BusinessInfo from '../BusinessInfo/BusinessInfo';

const Header = () => {
  return (
    <div className= {styles.header}>
      {/* <Navbar /> */}
      <Banner />
      <BusinessInfo/>
    </div>
  );
}

export default Header;
