import React from 'react';
import {
  Routes,
  Route
} from "react-router-dom";
import Pokedex from '../core/Pokedex';
import Welcome from '../core/Welcome';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/pokedex" element={<Pokedex />} />
    </Routes>
  );
}

export default AppRoutes;
