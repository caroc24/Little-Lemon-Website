import './App.css';

function App() {
  return (
    <react>
      <meta name="description" content="The Little Lemon restaurant proudly serves mediterranean family recipes with a modern twist." />
      <meta name="og:title" content="Little Lemon Restaurant"/>
      <meta name="og:description" content="The Little Lemon restaurant app allows customers to view the menu, make reservations, and order online."/>
      <meta name="og:image" content="logo.jpg"/>
      
      <Header/>
      <Nav/>
      <Main/>
      <Footer/>
    </react>
  );
}

export default App;
