import React from 'react'

const MainForm = () => {

  return (
    <div className="main-container">
      <span className="inline-block main-text"> What&apos;s the weather like in...</span>
      <form
        onSubmit={handleSubmit}
        className="inline-block home-form">
        <input
          onChange={handleChange}
          className="home-input"
          placeholder=""
          name="location"
          autoComplete="off" />
      </form>
    </div>
  )
}

export default MainForm