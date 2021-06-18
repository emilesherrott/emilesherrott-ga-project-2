import React, { useState, useEffect } from 'react'
import axios from 'axios'


const Home = () => {
  const [formData, setFormData] = useState({
    location: '',
  })
  const [formSubmit, setFormSubmit] = useState('')
  const [weather, setWeather] = useState('')
  const [displayExtra, setDisplayExtra] = useState(false)

  const handleChange = (event) => {
    const newFormData = { ...formData, [event.target.name]: event.target.value }
    setFormData(newFormData)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setFormSubmit(formData.location)
  }


  const resetForm = () => {
    setWeather('')
  }

  const toggleDisplay = () => {
    setDisplayExtra(!displayExtra)
  }
  const displayShowHide = displayExtra ? 'Show More' : 'Hide Info'

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=bc3268a2d36f4676922230553211606&q=${formSubmit}&days=1&aqi=yes&alerts=no`)
        setWeather(data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [formSubmit])




  return (
    <>
      {!weather ?
        <section className="hero is-fullheight-with-navbar">
          <div className="hero-body">
            <div className="container">
              <p className="title is-1 has-text-text-centered">
                <span className="title"> What&apos;s the weather like in...</span>
                <form onSubmit={handleSubmit}>
                  <input
                    className="input"
                    placeholder=""
                    name="location"
                    onChange={handleChange}
                    autoComplete="off"
                  />
                </form>
              </p>
            </div>
          </div>
        </section>
        :
        < section className="hero is-fullheight-with-navbar" >
          <div className="hero-body">
            <div className="container display-container">
              <div classNmae="main">
                <p className="title is-1 has-text-text-centered">The weather in
                  <span> {weather.location.name} </span> is
                  <span> {weather.current.condition.text.toLowerCase()} </span>
                </p>
                <p className="title has-text-text-centered toggle" onClick={toggleDisplay}>{displayShowHide}</p>
                <p className="title has-text-text-centered reset" onClick={resetForm}>Explore somewhere new</p>
              </div>
              {!displayExtra ?
                <>
                  <div className="extra-information-container">
                    <div className="extra-information">
                      <p className="title has-text-text-centered extra-info"><span>Temperature:</span><span>{weather.current.temp_c} &#8451;</span></p>
                      <p className="title has-text-text-centered extra-info"><span>Feels like:</span> <span>{weather.current.feelslike_c} &#8451;</span></p>
                      <p className="title has-text-text-centered extra-info"><span>Max Temperature:</span><span>{weather.forecast.forecastday[0].day.maxtemp_c} &#8451;</span></p>
                      <p className="title has-text-text-centered extra-info"><span>Min Temperature:</span><span>{weather.forecast.forecastday[0].day.mintemp_c} &#8451;</span></p>
                    </div>
                    <div className="extra-information">
                      <p className="title has-text-text-centered extra-info"><span>Wind Speed:</span> <span>{weather.current.wind_kph} kph</span></p>
                      <p className="title has-text-text-centered extra-info"><span>Wind Direction:</span> <span>{weather.current.wind_dir}</span></p>
                      <p className="title has-text-text-centered extra-info"><span>Precipitation:</span> <span>{weather.current.precip_mm} mm</span></p>
                      <p className="title has-text-text-centered extra-info"><span>Humidity:</span> <span>{weather.current.humidity} &#37;</span></p>
                    </div>
                  </div>
                </>
                :
                <>
                </>
              }
            </div>
          </div>
        </section >
      }
    </>
  )
}




export default Home