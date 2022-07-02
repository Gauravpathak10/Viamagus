import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import DatePickerr from './components/DatePicker';
import Login from './components/Login';
import Video from './components/Video';

function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route  path='/' element={<Login/>}/>
        <Route path='/Video' element={<Video />} />
        <Route path='/Date' element={<DatePickerr />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
