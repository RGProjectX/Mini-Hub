import React from 'react'
import {Box,Input,InputGroup,InputRightElement,Stack,useColorModeValue} from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import ViewCard from './VIewCard'
const ViewAll = () => {
  const projectArr = [{
    projectID:1,
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
    projectID:2,
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
  projectID:3,
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
  projectID:4,
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
    <Stack m='4'>
    <Box mt='20' mb='4'>
      <InputGroup>
      <Input placeholder='Enter project name' />
      <InputRightElement children={<SearchIcon color={useColorModeValue('green.500','teal.200')} />} />
      </InputGroup>
    </Box>
    {projectArr.map((items)=>
      <ViewCard key={items.projectID} id={items.projectID} name={items.name} author={items.author} description={items.description} language={items.language}/>
    )}
    </Stack>
  )
}

export default ViewAll