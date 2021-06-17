/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import axios from 'axios'

const DisplayWeather = () => {
  const [weather, setWeather] = useState('')

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get('http://api.weatherapi.com/v1/forecast.json?key=bc3268a2d36f4676922230553211606&q=London&days=1&aqi=yes&alerts=no')
        console.log(data)
        setWeather(data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [])
  if (!weather) return null
  return (
    <>

      <div className="section">
        <div className="container">
          <h1 className="weather-title has-text-centered">{weather.location.name}</h1>
          <h2 className="weather-title has-text-centered">{weather.location.country}</h2>
          <h2 className="weather-title has-text-centered">Last Updated: {weather.location.localtime}</h2>
          <hr />
          <div className="columns">
            <div className="column is-half">
              <p className="weather-title">Current Temperature: {weather.current.temp_c}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DisplayWeather