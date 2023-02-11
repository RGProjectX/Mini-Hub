import { Text, HStack, Heading, Box, Flex,Image, useColorModeValue, Stack, Button, ButtonGroup } from '@chakra-ui/react';
import React from 'react'
import TypeAnimation from 'react-type-animation';
import MiniIcon from '../icon/MiniIcon';
import SignInModal from '../modals/SignInModal';
import SignUpModal from '../modals/SignUpModal';
import InfoCard from './InfoCard';
const Hero = () => {
  return (
    <>
    <Flex height='100vh' direction='column' alignItems='center' justifyContent='center'>
    <Stack direction={['column','column','row','row']}>
    <Stack align='center' >
    <MiniIcon/>  
    <Heading color={useColorModeValue('green.400','teal.200')}>MiniHub</Heading>
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
    <Image m={['2','2','6','6']} width='300px' height='200px' src={'src/assets/share.svg'}></Image>
    </Stack>
    <Box mt='5' align='center'>
    <Text align='center'>Start sharing your knowledge with the world now. </Text>
    <ButtonGroup mt='5' variant='solid' spacing='10' colorScheme={useColorModeValue('green','teal')}>
    <Button><SignInModal/></Button>
    <Button><SignUpModal/></Button>
    </ButtonGroup>
    </Box>
    </Flex>
    
    </>
  )
}

export default Hero