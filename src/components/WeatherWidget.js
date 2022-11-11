import {
    Box,
    Flex,
    Spacer,
    Text,
  } from '@chakra-ui/react'

export const WeatherWidget = () => {
    return (
        <Box id="weatherWidget" minWidth='max-content' padding='3' borderWidth='1px' borderRadius='lg'>
              <Flex>
                <Box paddingRight='10'><Text fontSize='2xl'>City, Region</Text></Box>
                <Spacer />
                <Box><Text fontSize='2xl'>Temperature & High/Low</Text></Box>
              </Flex>
              <Flex>
                <Box>WMO Text</Box>
                <Spacer />
                <Box>WMO Symbol</Box>
              </Flex>
              <Flex>
                <Box>Next hour weather</Box>
                <Spacer />
                <Box>rain/snow</Box>
                <Spacer />
                <Box>Temperature</Box>
              </Flex>
            </Box>
    )
}