import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  Heading,
  HStack,
  IconButton,
  Spacer,
  Text,
} from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import { FiMenu } from 'react-icons/fi'
import { Logo } from './components/Logo'
import { Nav } from './components/Nav'
import { WeatherWidget } from './components/WeatherWidget'
import axios from 'axios'

function getWeather(coords) {
  let [lat, long] = coords
  if (typeof(coords) === 'object') {
      return axios
          .get(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=temperature_2m&current_weather=true`)
  }
}

const locationPromise = new Promise((resolve, reject) => {
  console.log('inside the location promise');
  return navigator.geolocation.getCurrentPosition(resolve, reject)
}, () => {
  console.warn('Location request was rejected.');
})

const App = () => {
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [items, setItems] = useState([])
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    locationPromise
      .then((response) => {
          console.log('1st in promise chain: ', response)
          let coords = [response.coords.latitude, response.coords.longitude, new Date()]
          localStorage.setItem('coords', coords)
          return getWeather(coords)
      })
      .then((response) => {
          console.log('2nd in promise chain: ', response)
          console.log(response.data.current_weather.temperature);
          return response.data.current_weather.temperature
      })
      .then((response) => {
          console.log('3rd in promise chain:', response);
          setIsLoaded(true)
          setItems(response)
          setWeather(response)
          console.log('the response:', response);
      }, (err) => {
        setIsLoaded(true)
        setError(err)
        console.warn(`in the warning of the location promise chain: ${err}`);
      })
  })

  if (error) {
    return <div>Error: {error.message}</div>
  } else if (!isLoaded) {
    return <div>Loading...!</div>
  } else {
    return (
      <Box>
        <Nav />
        <Container maxWidth='container.lg'>
          <Flex>
            <WeatherWidget weather={weather}/>
            <Spacer />
            <Box minWidth='max-content'>
              Avatar Drawing
            </Box>
          </Flex>
        </Container>
      </Box>
    )
  }
}

export default App;