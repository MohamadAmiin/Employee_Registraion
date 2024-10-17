import React from 'react';
import Registration from './components/Registraion';
import Empolyee from "./components/Empolyee"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Empolyee />} />
          <Route path='/register' element={<Registration />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
