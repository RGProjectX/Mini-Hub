import { Box, Flex, Heading, useColorModeValue, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import Card from '../card/Card'
import Hero from './Hero'

const Home = () => {
  const projectArr = [{
    name: 'MiniHub',
    author: 'Rohit',
    description: 'A project sharing website.',
    language:[
      'Python',
      'React',
      'MongoDB'
    ]
},
{
    name: 'URL Shortener',
    author: 'Ankit',
    description: 'A project developed for URL shortening.',
    language:[
      'Python',
      'React',
      'NodeJS',
      'MongoDB',
      'FastAPI'

    ]
},
{
  name: 'Password Generator',
  author: 'Sumit',
  description: 'A project developed for generating password randomly.',
  language:[
    'Python',
    'React',
    'MongoDB',
    'FastAPI'

  ]
},
{
  name: 'BMI Calculator',
  author: 'Raj',
  description: 'A calculator that helps you calculate your BMI.',
  language:[
    'Python',
    'React',
    'MongoDB',
    'FastAPI',
    'Python',
    'React',
    'MongoDB',
    'FastAPI',

  ]
}]
  return (
    <Flex align='center' justify='center' margin='2.5'>
      <Stack>
        <Hero/>

        <Box align='center' justify='center'>
          <Heading>Discover projects</Heading>
          <Text color={useColorModeValue('gray.600','gray.400')}>developed by students of various universities.</Text>
        </Box>
       <SimpleGrid columns={[1,2,2,4]} spacingX='10' >
        {
          projectArr.map((items)=>
            <Card name={items.name} author={items.author} description={items.description} language={items.language}/>
          )
        }
       </SimpleGrid>
      </Stack>
    </Flex>
  )
}

export default Home