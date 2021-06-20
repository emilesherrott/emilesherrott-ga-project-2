import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Background from './components/Background'

import NavBar from './components/NavBar'
import History from './components/History'
import Forecast from './components/Forecast'
import Home from './components/Home'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Background />
      <Switch>
        <Route path='/history' component={History} />
        <Route path='/forecast' component={Forecast} />
        <Route path='/' component={Home} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
