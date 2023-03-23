import React from 'react'
import { Box, Heading, useColorModeValue, SimpleGrid, Stack, Text, Button, Center } from '@chakra-ui/react'
import Card from '../projectCard/Card'
import { NavLink } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';

const DiscoverSection = () => {
 
    const [projects, setProjects] = React.useState([])

    // update projects from backend
    React.useEffect(() => {
      fetch('http://localhost:8000/projects')
        .then(response => response.json())
        .then(data => {
          // Add a unique id to each project
          const projectsWithId = data.map(project => ({ ...project, id: uuidv4() }));
          setProjects(projectsWithId);
        })
        .catch(error => {
          console.error('Error fetching projects:', error);
        });
    }, []);

                
  return (
    <>
    <Box align='center' justify='center'>
      <Heading color={useColorModeValue('green.500','teal.200')}>Discover projects</Heading>
      <Text color={useColorModeValue('gray.600','gray.400')}>developed by students of various universities.</Text>
      </Box>
    <SimpleGrid columns={[1,2,2,4]} spacingX='10' >
      {
        projects.slice(-4).map((items)=>
          <Card key={items.id} name={items.name} author={items.author} description={items.description} language={items.languages}/>
        )
      }
    </SimpleGrid>
    <Center>
    <NavLink to='/explore'>
        <Button colorScheme={useColorModeValue('green','teal')}>
          View All
        </Button>
    </NavLink>
    </Center>
 </>
  )
}

export default DiscoverSection