import React from 'react'
import {Box,Input,InputGroup,InputRightElement,Stack} from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import ViewCard from './VIewCard'
const ViewAll = () => {
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
    <Stack m='4'>
    <Box mt='20' mb='4'>
      <InputGroup>
      <Input placeholder='Enter project name' />
      <InputRightElement children={<SearchIcon color='green.500' />} />
      </InputGroup>
    </Box>
    {projectArr.map((items)=>
      <ViewCard namexauthor={items.author} description={items.description} language={items.language}/>
    )}
    </Stack>
  )
}

export default ViewAll