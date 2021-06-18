export const getTimeFromWeather = (weather) => {
  const time = weather
  const timeTwo = time.substring(11)
  const timeThree = timeTwo.slice(0,2)
  const timeFour = timeTwo.slice(3,5)
  const timeFive = `${timeThree}${timeFour}`
  return Number(timeFive)
}


export const getSunriseTimeFromWeather = (weather) => {
  const time = weather
  const timeTwo = time.substring(0,5)
  const timeThree = timeTwo.slice(0,2)
  const timeFour = timeTwo.slice(3,5)
  const timeFive = `${timeThree}${timeFour}`
  return Number(timeFive)
}

export const getSunsetTimeFromWeather = (weather) => {
  const time = weather
  const timeTwo = time.substring(0,5)
  const timeThree = timeTwo.slice(0,2)
  const timeThreePointFive = Number(timeThree) + 12
  const timeFour = timeTwo.slice(3,5)
  const timeFive = `${timeThreePointFive}${Number(timeFour)}`
  return Number(timeFive)
}