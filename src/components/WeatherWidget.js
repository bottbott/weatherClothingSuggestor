import {
    Box,
    Flex,
    Spacer,
    Text,
  } from '@chakra-ui/react'
  import { HourLine } from './HourLine'

export const WeatherWidget = ({weather}) => {

    let today_temp = weather.hourly.temperature_2m.slice(0,24)
    let [today_min, today_max] = [Math.min(...today_temp), Math.max(...today_temp)]

    let current_time = new Date()
    current_time.setMinutes(0)
    
    let date_string = `${current_time.getFullYear()}-${('0' + (current_time.getMonth() + 1)).slice(-2)}-${('0' + current_time.getDate()).slice(-2)}T${('0' + current_time.getHours()).slice(-2)}:00`


    let current_time_index = weather.hourly.time.findIndex((element) => element == date_string) + 1
    let hourly_info = []
    for (let i = 0; i < 8; i++) {
        hourly_info.push({ 
            datetime: weather.hourly.time[current_time_index+i],
            temp: weather.hourly.temperature_2m[current_time_index+i],
            rain: weather.hourly.rain[current_time_index+i],
            snowfall: weather.hourly.snowfall[current_time_index+i],
            weathercode: weather.hourly.weathercode[current_time_index+i]
            })
    }

    return (
        <Box id="weatherWidget" minWidth='max-content' padding='3' borderWidth='1px' borderRadius='lg'>
              <Flex>
                <Box paddingRight='10'><Text fontSize='2xl'>City, Region</Text></Box>
                <Spacer />
                <Box><Text fontSize='2xl'>{weather.current_weather.temperature} & {today_max}/{today_min}</Text></Box>
              </Flex>
              <Flex>
                <Box>{weather.current_weather.weathercode}</Box>
                <Spacer />
                <Box>WMO Symbol</Box>
              </Flex>
              {hourly_info.map((hourInfo) => <HourLine hourInfo={hourInfo}/>)}
            </Box>
    )
}