import './App.css'
import React from 'react'
import Grid from './Grid'
import {usersData} from "../src/Grid"
function App(){

  return (
    <div className="gap-7 flex flex-wrap">
      <Grid users={usersData} />
      <Grid users={usersData} />
      <Grid users={usersData} />
      <Grid users={usersData} />
    </div>
  )

}

export default App