import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import SelectProject from "./SelectProject"
import Cards from "./Cards"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import {projects} from "./seed"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Cards />}/>
        {projects.map((project) => (
          <Route path={`/${project}`} key={{project}+"a"} element={<SelectProject projectname={project} key={project}/>}/>
        ))}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);