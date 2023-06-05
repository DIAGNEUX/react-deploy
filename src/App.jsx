import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Accueil from './Accueil';
import Profil from './Profil';
import BtsSio from './BtsSio.jsx';
import Ecole from './Ecole';
import Entreprise from './Entreprise';
import VeilleTechnologique from './VeilleTechnologique';
import VeilleJuridique from './VeilleJuridique';
import "./App.css"
import github from './assets/github.png'
import linkedin from './assets/linkedin.png'
import gmail from './assets/gmail.png'

const App = () => {
  return (
    <div className='wrapper'> 
      <div className="Navbar">
        <Navbar />
      </div>
      <div className='container' >
      <Routes>
        <Route path='/' element={<Accueil />} />
        <Route path='/acceuil' element={<Accueil />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/bts-sio" element={<BtsSio />} />
        <Route path="/ecole" element={<Ecole />} />
        <Route path="/entreprise" element={<Entreprise />} />
        <Route path="/veille-technologique" element={<VeilleTechnologique />} />
        <Route path="/veille-juridique" element={<VeilleJuridique />} />
      </Routes>
      <div className='contact'>
        <li> <img src={linkedin} alt="" /> </li>
        <li> <img src={github} alt="" /> </li>
        <li> <img src={gmail} alt="" /> </li>
      </div>
      
      </div>

    </div>
  );
}

export default App;
