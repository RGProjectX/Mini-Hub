import React, { useState, useEffect } from 'react';
import { Box, Input, Stack } from '@chakra-ui/react';
import ViewCard from './ViewCard';
import { v4 as uuidv4 } from 'uuid';

function ProjectList() {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('https://minihub-py.herokuapp.com/projects')
      .then(response => response.json())
      .then(data => {
        // Add a unique id to each project
        const projectsWithId = data.map(project => ({ ...project, id: uuidv4() }));
        setProjects(projectsWithId);
        setFilteredProjects(projectsWithId);
      })
      .catch(error => {
        console.error('Error fetching projects:', error);
      });
  }, []);

  const handleSearchTermChange = event => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);

    const filtered = projects.filter(project =>
      project.name.toLowerCase().includes(newSearchTerm.toLowerCase())
    );
    setFilteredProjects(filtered);
  };

  return (
    <Stack spacing={4} mt='20' p='2.5'>
      <Input type="text" value={searchTerm} onChange={handleSearchTermChange} placeholder="Search projects" />
      <Box>
        {filteredProjects.map(project => (
          <ViewCard key={project.id} name={project.name} author={project.email} description={project.description} language={project.languages}/>
        ))}
      </Box>
    </Stack>
  );
}

export default ProjectList;
