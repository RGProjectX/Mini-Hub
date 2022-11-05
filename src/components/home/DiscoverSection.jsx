import React from 'react'
import { Box, Heading, useColorModeValue, SimpleGrid, Stack, Text, Button, Center } from '@chakra-ui/react'
import Card from '../projectCard/Card'
import { NavLink } from 'react-router-dom'

const DiscoverSection = () => {
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
    <>
    <Box align='center' justify='center'>
      <Heading color={useColorModeValue('green.500','teal.200')}>Discover projects</Heading>
      <Text color={useColorModeValue('gray.600','gray.400')}>developed by students of various universities.</Text>
      </Box>
    <SimpleGrid columns={[1,2,2,4]} spacingX='10' >
      {
        projectArr.map((items)=>
          <Card name={items.name} author={items.author} description={items.description} language={items.language}/>
        )
      }
    </SimpleGrid>
    <Center>
    <NavLink to='/viewall'>
        <Button colorScheme={useColorModeValue('green','teal')}>
          View All
        </Button>
    </NavLink>
    </Center>
 </>
  )
}

export default DiscoverSection