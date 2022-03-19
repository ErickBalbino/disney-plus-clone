import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import Detail from './components/Detail'
import Login from './components/pages/Login'
import Search from './components/pages/Search'
import Watchlist from './components/pages/Watchlist'
import Originals from './components/pages/Originals'
import Movies from './components/pages/Movies'
import Series from './components/pages/Series'
import NotFound from './components/pages/NotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route exact path='/' element={<Home />} /> 
          <Route path='/login' element={<Login />} />
          <Route path='/detail' element={<Detail />} />
          <Route path='/search' element={<Search />} /> 
          <Route path='/watchlist' element={<Watchlist />} /> 
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
