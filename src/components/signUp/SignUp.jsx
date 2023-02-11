import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    FormHelperText,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
    
  } from '@chakra-ui/react';
import axios from 'axios' ;
import { useState } from 'react';
import { register } from '../../api';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
  
  export default function SignUp() {
    // const [name, setName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [college, setCollege] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(firstName, lastName, email, college, password);
        try {
          const response = await register(firstName, lastName, email, college, password);
          if (response.status === 200) {
            console.log('Success');
          }
          console.log('Response : ' + response.data);
          // console.log(firstName, lastName, email, college, password);
        } catch (error) {
          console.error(error.response.data);
        }
    };

    const [showPassword, setShowPassword] = useState(false);
// NEw setup 2
    const Signup = () => {
      const { firstname,lastname,email,collegename,password} = user
      if(firstname && lastname && email && collegename && password) {
        alert("posted")
        axios.post("http://localhost:9000/signup", user)

      } else {
        alert("invalid")
      }
      
    }
  
    return (
      <Flex mt='10'
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} textAlign={'center'} color={useColorModeValue('green.500','teal.200')}>
              Sign up
            </Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              and get access to 600+ projects
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <HStack>
                <Box>
                
                  <FormControl id="firstName" isRequired>
                    <FormLabel>First Name</FormLabel>
                    <Input  id="fname"
                    type="text"
                    value={firstName}
                    onChange={(event) => setFirstName(event.target.value)} />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName" isRequired>
                    <FormLabel>Last Name</FormLabel>
                    <Input  id="lname"
                    type="text"
                    value={lastName}
                    onChange={(event) => setLastName(event.target.value)} />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="email" isRequired>
                <FormLabel>Email Address</FormLabel>
                <Input  id="email"
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)} />
                <FormHelperText>We'll never share your email.</FormHelperText>
              </FormControl>
              <FormControl id="college" isRequired>
                <FormLabel>College Name</FormLabel>
                <Input  id="college"
                    type="text"
                    value={college}
                    onChange={(event) => setCollege(event.target.value)} />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input type={showPassword ? 'text' : 'password'}  id="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)} />
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  onClick={handleSubmit}
                  size="lg"
                  colorScheme={useColorModeValue('green','teal')}
                  >Sign up
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={'center'}>
                  Already a user? <Link color={'blue.400'}>Login</Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
    }
 

