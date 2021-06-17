import React, { useState, useEffect } from 'react'
import axios from 'axios'
// import { Link } from 'react-router-dom'

const Home = () => {
  const [formData, setFormData] = useState({
    location: '',
  })
  const [formSubmit, setFormSubmit] = useState('')

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

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=bc3268a2d36f4676922230553211606&q=${formSubmit}&days=1&aqi=yes&alerts=no`)
        console.log(response)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  },[formSubmit])


  return (
    <section className="hero is-fullheight-with-navbar">
      <div className="hero-body">
        <div className="container">
          <h1 className="title is-1 has-text-text-centered">
            {/* <Link to='/displayweather'> */}
            <span className="title"> What&apos;s the Weather like in...</span>
            <form onSubmit={handleSubmit}>
              <input
                className="input"
                placeholder=""
                name="location"
                onChange={handleChange}
              />
            </form>
            {/* </Link> */}
          </h1>
        </div>
      </div>
    </section>
  )
}

export default Home