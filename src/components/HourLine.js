import {
    Box,
    Flex,
    Spacer,
  } from '@chakra-ui/react'

export const HourLine = ({hourInfo}) => {
    console.log(hourInfo)
    return (
        <Flex>
            <Box>{hourInfo.datetime.split("T")[1]}</Box>
            <Spacer />
            <Box>{hourInfo.rain}/{hourInfo.snowfall}</Box>
            <Spacer />
            <Box>{hourInfo.temp}</Box>
        </Flex>
    )
}