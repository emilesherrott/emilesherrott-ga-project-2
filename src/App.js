import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import NavBar from './components/NavBar'
import Home from './components/Home'
import DisplayWeather from './components/DisplayWeather'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path='/displayweather' component={DisplayWeather} />
        <Route path='/' component={Home} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
