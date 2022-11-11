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
import * as React from 'react'
import { FiMenu } from 'react-icons/fi'
import { Logo } from './components/Logo'
import { Nav } from './components/Nav'
import { WeatherWidget } from './components/WeatherWidget'

const [error, setError] = React.useState(null)
 
const App = () => {
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

export default App;