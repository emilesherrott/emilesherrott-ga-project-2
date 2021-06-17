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
    console.log(formData.location)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setFormSubmit(formData.location)
    console.log(formSubmit)
  }


  const resetForm = () => {
    setWeather('')
  }

  const toggleDisplay = () => {
    setDisplayExtra(!displayExtra)
  }

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




  console.log(weather)
  return (
    <>
      {!weather ?
        <section className="hero is-fullheight-with-navbar">
          <div className="hero-body">
            <div className="container">
              <h1 className="title is-1 has-text-text-centered">
                <span className="title"> What&apos;s the weather like in...</span>
                <form onSubmit={handleSubmit}>
                  <input
                    className="input"
                    placeholder=""
                    name="location"
                    onChange={handleChange}
                  />
                </form>
              </h1>
            </div>
          </div>
        </section>
        :
        < section className="hero is-fullheight-with-navbar" >
          <div className="hero-body">
            <div className="container">
              <p className="title is-1 has-text-text-centered">The weather in
                <span> {weather.location.name}</span> is
                <span> {weather.current.condition.text.toLowerCase()}</span>
              </p>
              <p className="title has-text-text-centered">
                <span>{weather.current.temp_c}</span> &#8451;
              </p>
              {!displayExtra ?
                <>
                  <p className="title has-text-text-centered" onClick={toggleDisplay}>Less Information</p>
                  <p className="title has-text-text-centered">Feels like: {weather.current.feelslike_c} &#8451;</p>
                  <p className="title has-text-text-centered">Humidity: {weather.current.humidity} &#37;</p>
                  <p className="title has-text-text-centered">Wind Speed: {weather.current.wind_kph}</p>
                  <p className="title has-text-text-centered">Wind Direction: {weather.current.wind_dir}</p>
                </>
                :
                <>
                  <p className="title has-text-text-centered" onClick={toggleDisplay}>More Information</p>
                </>
              }
              <p
                className="title"
                onClick={resetForm}>Explore somewhere new</p>
            </div>
          </div>
        </section >
      }
    </>
  )
}




export default Home