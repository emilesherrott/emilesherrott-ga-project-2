export const getTimeFromWeather = (weather) => {
  const time = weather
  const timeTwo = time.substring(11)
  const colon = timeTwo.indexOf(':')
  const timeThree = timeTwo.slice(0,colon)
  const timeFour = timeTwo.slice(3)
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

export const trimSunrise = (astro) => {
  const time = astro
  const timeNoAM = time.slice(0,5)
  return timeNoAM
}

export const trimSunset = (astro) => {
  const time = astro
  const timeNoPM = time.slice(0,5)
  const timeArray = timeNoPM.split(':')
  const timeHourString = timeArray[0]
  const timeHourNumber = Number(timeHourString)
  const time24 = timeHourNumber + 12
  const time24String = time24.toString()
  timeArray[0] = time24String
  const finalTimeNoPM = timeArray.join(':')
  return finalTimeNoPM
}

export const trimHourTime = (timeParam) => {
  const time = timeParam
  const justTime = time.slice(11,13)
  return justTime
}

export const wholeNumTemp = (temp) => {
  const fullTemp = temp
  const tempShort = Math.round(fullTemp)
  return tempShort
}

export const windDirection = (wind) => {
  const windDir = wind
  const windShort = windDir.slice(0,1)
  return windShort
}

export const windSpeed = (wind) => {
  const windSp = wind
  const windSpeedShort = Math.round(windSp)
  return windSpeedShort
}