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

const App = () => {
  return (
    <div className='wrapper'> 
      <div className="Navbar">
        <Navbar />
      </div>
      <Routes>
        <Route path="/"  element={<Accueil />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/bts-sio" element={<BtsSio />} />
        <Route path="/ecole" element={<Ecole />} />
        <Route path="/entreprise" element={<Entreprise />} />
        <Route path="/veille-technologique" element={<VeilleTechnologique />} />
        <Route path="/veille-juridique" element={<VeilleJuridique />} />
      </Routes>
    </div>
  );
}

export default App;
