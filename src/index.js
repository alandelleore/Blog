import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Blog from './routes/Blog.jsx';
import Contacto from './routes/Contacto.jsx';
import Inicio from './routes/Inicio.jsx';
import NoEncontrada from './routes/NoEncontrada.jsx';
import Post from './routes/Post.jsx';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  
    <BrowserRouter>
     <Routes>
       <Route path='/' element={<App />}>
        <Route index element={<Inicio />} />
        <Route path='blog' element={<Blog />}/>
        <Route path='blog/:id' element={<Post />}/>
        <Route path='contacto' element={<Contacto />}/>
        
        <Route path='*' element={<NoEncontrada />}/>
       </Route>
       
     </Routes>
      
    </BrowserRouter>
  </>
);

