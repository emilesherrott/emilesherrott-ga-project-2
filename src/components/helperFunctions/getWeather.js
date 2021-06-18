export const getCloudCoverage = (clouds) => {
  if (clouds >= 75) {
    return 'cloudy'
  } else if (clouds > 15) {
    return 'mid-cloud'
  } else {
    return 'min-cloud'
  }
}


export const getRainLevel = (rain) => {
  if (rain > 0.2) {
    return 'light-rain'
  } else if (rain >= 0.5) {
    return 'moderate-rain'
  } else if (rain > 2) {
    return 'rain'
  }
}


export const willItSnow = (snow) => {
  if (snow === 0) {
    return 'no-snow'
  } else if (snow === 1) {
    return 'snow'
  }
}