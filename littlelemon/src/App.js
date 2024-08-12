import React from 'react';
import './App.css';

import Booking from './components/Booking';
import BookingForm from './components/BookingForm';
import ConfirmedBooking from './components/ConfirmedBooking';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <meta name="description" content="The Little Lemon restaurant proudly serves mediterranean family recipes with a modern twist." />
      <meta name="og:type" content="website"/>
      <meta name="og:image" content="logo.jpg"/>
      <meta name="og:url" content="https://littlelemon"/>
      <meta name="og:title" content="Little Lemon Restaurant"/>
      <meta name="og:description" content="Little Lemon is a family-owned Mediterranean restaurant that mixes family recipes with a modern twist."/>
      <meta name="og:locale" content="en_US"/>
      <meta name="og:site_name" content="Little Lemon"/>

      <Nav/>
      <Header/>
    </>
  );
}

export default App;
