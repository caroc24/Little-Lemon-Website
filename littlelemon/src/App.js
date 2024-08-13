import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Main from './components/Main';


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
      <Main/>
    </>
  );
}

export default App;
