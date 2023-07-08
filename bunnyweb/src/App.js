import React from 'react';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Main from './Components/Main';
import Aside from './Components/Aside';
import DidYouKnow from './Components/DidYouKnow';
import Footer from './Components/Footer';
import './Style/css/style.css'

function App() {
  return (
    <div className="layout">
      <Navbar />
      <Header />
      <Main />
      <Aside />
      <DidYouKnow />
      <Footer />
    </div>
  );
}

export default App;
