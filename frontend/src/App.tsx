import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import PostPage from './pages/PostPage';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className='pages'>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/post" element={<PostPage />} />
            </Routes> 
        </div> 
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
