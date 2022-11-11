import {
    Box,
    Button,
    ButtonGroup,
    Flex,
    Heading,
    Spacer,
  } from '@chakra-ui/react'

export const Nav = () => {
    return (
        <Box p={5} marginBottom={5} boxShadow='base' bg='white'>
            <Flex minWidth='max-content' alignItems='center' gap='2'>
            <Box p='2'>
                <Heading size='md'>Worn Weather App</Heading>
            </Box>
            <Spacer />
            <ButtonGroup gap='2'>
                <Button colorScheme='teal'>Sign Up</Button>
                <Button colorScheme='teal'>Log in</Button>
            </ButtonGroup>
            </Flex>
        </Box>
    )
}
