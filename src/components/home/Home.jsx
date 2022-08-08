import { Box, Flex, Heading, useColorModeValue, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import Card from '../card/Card'
import DiscoverSection from './DiscoverSection'
import Hero from './Hero'

const Home = () => {
  
  return (
    <Flex align='center' justify='center' margin='2.5'>
      <Stack>
        <Hero/>
        <DiscoverSection/>
      </Stack>
    </Flex>
  )
}

export default Home