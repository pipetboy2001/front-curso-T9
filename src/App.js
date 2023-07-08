import React from 'react';
import Navbar from './Components/Navbar';
import Header from './Components/HeaderPage';
import Main from './Components/MainPage';
import Aside from './Components/AsidePilares';
import DidYouKnow from './Components/YouKnow';
import Footer from './Components/FooterPage';
import './Style/style.scss'

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
