import { Text, HStack, Heading, Box, Flex,Image, useColorModeValue, Stack, Button, ButtonGroup } from '@chakra-ui/react';
import React from 'react'
import TypeAnimation from 'react-type-animation';
import MiniIcon from '../icon/MiniIcon';
import InfoCard from './InfoCard';
const Hero = () => {
  return (
    <>
    <Flex height='100vh' direction='column' alignItems='center' justifyContent='center'>
    <Stack direction={['column','column','row','row']}>
    <Stack align='center' >
    <MiniIcon/>  
    <Heading bgGradient='linear(to-l, #7928CA, #FF0080)' bgClip="text">MiniHub</Heading>
    <HStack>
        <Text color={useColorModeValue('gray.600','gray.400')}>A place developed to</Text>
        <TypeAnimation
        cursor={true}
        sequence={['explore.', 2000, 'discover.', 2000,'contribute.', 2000]}
        wrapper="h2"
        repeat={Infinity}
        />
    </HStack>
    
    <Flex mt='5' w={'300px'} justifyContent='space-around'>
        <InfoCard number='83' name='Projects'/>
        <InfoCard number='20' name='Contributers'/>
        <InfoCard number='10' name='Colleges'/>
    </Flex>
    </Stack>
    <Image m={['2','2','6','6']} width='300px' height='200px' src={'https://raw.githubusercontent.com/RGProjectX/MiniHub/master/src/assets/share.svg'}></Image>
    </Stack>
    <Box mt='5' align='center'>
    <Text align='center'>Start sharing your knowledge with the world now. </Text>
    <ButtonGroup mt='5' variant='outline' spacing='10'>
    <Button>Sign In</Button>
    <Button>Sign Up</Button>
    </ButtonGroup>
    </Box>
    </Flex>
    
    </>
  )
}

export default Hero