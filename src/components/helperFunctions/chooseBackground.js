import overcastOne from '../../styles/assets/overcastOne.jpg'
import midCloudTwo from '../../styles/assets/midCloudTwo.jpg'
import blueSkyThree from '../../styles/assets/blueSkyThree.jpg'
import moderateRainFour from '../../styles/assets/moderateRainFour.jpg'
import rainFive from '../../styles/assets/rainFive.jpg'
import snowSix from '../../styles/assets/snowSix.jpg'
import nightRainSeven from '../../styles/assets/nightRainSeven.jpg'
import nightSnowEight from '../../styles/assets/nightSnowEight.jpg'


export const sunUpSunDown = (timeProp, sunriseProp, sunsetProp) => {
  if (timeProp > sunriseProp && timeProp < sunsetProp) {
    return 'day'
  } else if (timeProp < sunriseProp || timeProp > sunsetProp) {
    return 'night'
  }
}

export const chooseBackground = (timeOfDayProp, cloudsProp, rainProp, snowProp) => {
  if (timeOfDayProp === 'day' && cloudsProp === 'cloudy' && rainProp === 'light-rain') {
    return overcastOne
  } else if (timeOfDayProp === 'day' && cloudsProp === 'mid-cloud' && rainProp === 'light-rain') {
    return midCloudTwo
  } else if (timeOfDayProp === 'day' && cloudsProp === 'min-cloud' && rainProp === 'light-rain') {
    return blueSkyThree
  } else if (timeOfDayProp === 'day' && (cloudsProp === 'cloudy' || cloudsProp === 'mid-cloud' || cloudsProp === 'min-cloud') && rainProp === 'moderate-rain') {
    return moderateRainFour
  } else if (timeOfDayProp === 'day' && (cloudsProp === 'cloudy' || cloudsProp === 'mid-cloud' || cloudsProp === 'min-cloud') && rainProp === 'rain') {
    return rainFive
  } else if (timeOfDayProp === 'day' && snowProp === 'snow') {
    return snowSix
  } else if (timeOfDayProp === 'night' && (cloudsProp === 'cloudy' || cloudsProp === 'mid-cloud' || cloudsProp === 'min-cloud') && (rainProp === 'light-rain' || rainProp === 'moderate-rain' || rainProp === 'rain')) {
    return nightRainSeven
  } else if (timeOfDayProp === 'night' && cloudsProp === 'mid-cloud' && rainProp === 'light-rain') {
    return nightSnowEight
  }
}
