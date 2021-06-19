import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { trimSunrise, trimSunset } from './helperFunctions/getTime'

import ForecastDay from './ForecastDay'

const Forecast = () => {

  const [formData, setFormData] = useState('')
  const [formNumberData, setFormNumberData] = useState('')
  const [formSubmit, setFormSubmit] = useState({
    location: '',
    number: 1,
  })
  const [weather, setWeather] = useState('')
  const [forecasts, setForecasts] = useState([])
  // const [displayExtra, setDisplayExtra] = useState(false)

  const handleChange = (event) => {
    setFormData(event.target.value)
  }

  const handleNumberChange = (event) => {
    setFormNumberData(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const newFormSubmit = { ...formSubmit, location: formData, number: formNumberData }
    setFormSubmit(newFormSubmit)
  }

  const resetForm = () => {
    setWeather('')
  }

  // const toggleDisplay = () => {
  //   setDisplayExtra(!displayExtra)
  // }
  // const displayShowHide = displayExtra ? 'Expand' : 'Condense'

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=bc3268a2d36f4676922230553211606&q=${formSubmit.location}&days=${formSubmit.number}&aqi=yes&alerts=no`)
        setWeather(data)
        setForecasts(data.forecast.forecastday)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [formSubmit])

  console.log(weather)
  console.log('forecasts---->', forecasts)


  return (
    <>
      {!weather ?
        <div className="main-container">
          <form
            onSubmit={handleSubmit}
            className="inline-block home-form">
            <div>
              <span className="inline-block main-text"> What&apos;s the weather like in...</span>
              <input
                onChange={handleChange}
                className="home-input"
                placeholder=""
                name="location"
                autoComplete="off" />
            </div>
            <div>
              <span className="inline-block main-text"> For the next...</span>
              <input
                onChange={handleNumberChange}
                onWheel={(event) => event.target.blur()}
                className="number-input main-text"
                type="number"
                name="number"
                min="1"
                max="3" />
              <span className="inline-block main-text"> {formNumberData === '1' ? 'day' : 'days'}</span>
            </div>
            <div>
              <input
                type="submit"
                style={{ position: 'absolute', left: '-9999px' }}
              />
            </div>
          </form>
        </div >
        :
        <>
          <div className="display-flex-row">
            <div className="main-container">
              <span className="block"><span className="main-display-text">The weather in {weather.location.name} is {weather.current.condition.text.toLowerCase()} </span></span>
              <span className="forecast-text-astro flex-space-between"><span>Sunrise: {trimSunrise(weather.forecast.forecastday[0].astro.sunrise)}</span><span>Sunset: {trimSunset(weather.forecast.forecastday[0].astro.sunset)}</span></span>
              <span className="main-options-text block" onClick={resetForm}>New search</span>
            </div>
            <div className="forecast-container">
              {forecasts.map(forecast => (
                <ForecastDay key={forecast.date} {...forecast} />
              ))}
            </div>

            {/* {!displayExtra ? */}
            {/* } */}
          </div>
        </>
      }
    </>
  )
}


export default Forecast