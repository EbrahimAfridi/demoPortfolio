import './App.css'
import React from 'react'
import Header from "./components/Header.jsx";
import Intro from './components/Intro';
import Project from './components/Projects/Projects';

function App(){

  return (
    <div className=" bg-gradient-to-b from-blue-900 via-blue-600 to-blue-400">
      <Header/>
      <Intro/>
      <Project/>
    </div>
  )

}

export default App