import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css';
import Header from './components/Header';
import Home from './components/Home'
import Search from './components/Search'
import Watchlist from './components/Watchlist'
import Originals from './components/Originals'
import Movies from './components/Movies'
import Series from './components/Series'
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route exact path='/' element={<Home />} /> 
          <Route path='/search' element={<Search />} /> 
          <Route path='/wacthlist' element={<Watchlist />} /> 
          <Route path='/originals' element={<Originals />} /> 
          <Route path='/movies' element={<Movies />} /> 
          <Route path='/series' element={<Series />} />
          <Route path='/series' element={<Series />} />
          <Route path='*' element={<NotFound />} />
        </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App
