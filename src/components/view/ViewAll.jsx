// import React from 'react'
// import {useToast,Box,Input,InputGroup,InputRightElement,Stack,useColorModeValue} from '@chakra-ui/react'
// import { SearchIcon } from '@chakra-ui/icons'
// import ViewCard from './VIewCard'
// import axios from 'axios'
// const ViewAll = () => {
// //   const projectArr = [{
// //     projectID:1,
// //     name: 'MiniHub',
// //     author: 'Rohit',
// //     description: 'A project sharing website.',
// //     language:[
// //       'Python',
// //       'React',
// //       'MongoDB'
// //     ]
// // },
// // {
// //     projectID:2,
// //     name: 'URL Shortener',
// //     author: 'Ankit',
// //     description: 'A project developed for URL shortening.',
// //     language:[
// //       'Python',
// //       'React',
// //       'NodeJS',
// //       'MongoDB',
// //       'FastAPI'

// //     ]
// // },
// // {
// //   projectID:3,
// //   name: 'Password Generator',
// //   author: 'Sumit',
// //   description: 'A project developed for generating password randomly.',
// //   language:[
// //     'Python',
// //     'React',
// //     'MongoDB',
// //     'FastAPI'

// //   ]
// // },
// // {
// //   projectID:4,
// //   name: 'BMI Calculator',
// //   author: 'Raj',
// //   description: 'A calculator that helps you calculate your BMI.',
// //   language:[
// //     'Python',
// //     'React',
// //     'MongoDB',
// //     'FastAPI',
// //     'Python',
// //     'React',
// //     'MongoDB',
// //     'FastAPI',

// //   ]
// // }]

//   const [projectArr,setProjectArr] = React.useState([])
//   const [filter,setFilter] = React.useState([]) 
//   const [search,setSearch] = React.useState('')
//   const toast = useToast();

//   React.useEffect(()=>{
//     console.log("Use Effect")
//     axios.get('http://localhost:8000/projects')
//     .then(response => {
//       setProjectArr(response.data)
//       console.log("Project Arr",projectArr);
//     }
//     ).catch(error => {
//       console.log(error);
//       toast({
//         title: "Error",
//         description: error.message,
//         status: "error",
//         duration: 9000,
//         isClosable: true,
//       });
//     });
//     },[])
  
//   console.log(projectArr);

//   const filterProject = () => {
//     console.log("Search",search);

//     const filteredProject = projectArr.filter((item)=>item.name.toLowerCase().includes(search.toLowerCase()))
//     console.log("Filtered Project",filteredProject);
//     setProjectArr(filteredProject)

//   }



//   return (
//     <Stack m='4'>
//     <Box mt='20' mb='4'>
//       <InputGroup>
//       <Input placeholder='Enter project name' onChange={(e)=>setSearch(e.target.value)} />
//       <InputRightElement children={<SearchIcon color={useColorModeValue('green.500','teal.200')} onClick={filterProject} />} />
//       </InputGroup>
//     </Box>
//     {projectArr.map((items)=>
//       <ViewCard name={items.name} author={items.email} description={items.description} language={items.languages}/>
//     )}
//     </Stack>
//   )
// }

// export default ViewAll


import React, { useState, useEffect } from 'react';
import { Box, Input, Stack } from '@chakra-ui/react';
import ViewCard from './ViewCard';
import { v4 as uuidv4 } from 'uuid';

function ProjectList() {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('http://localhost:8000/projects')
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
