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
import axios from 'react' ;
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
  
  export default function SignUp() {
    //new 1
    const[user, setuser] = useState({
      firstname: "",
      lastname:"",
      email:"",
      collegename:"",
      password:""
      
    })

    const handlechange = e => {
      const {name,value} = e.target
      setuser({
        ...user,
        [name]:value
      })
    }

    const [showPassword, setShowPassword] = useState(false);
// NEw setup 2
    const Signup = () => {
      const { firstname,lastname,email,collegename,password} = user
      if(firstname && lastname && email && collegename && password) {
        alert("posted")
        axios.post("http://localhost:9000/Signup", user)

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
                    <Input type="text"  name="firstName" value={user.firstName} onChange={handleChange} />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName" isRequired>
                    <FormLabel>Last Name</FormLabel>
                    <Input type="text" name="lastName" value={user.lastName} onChange={handleChange} />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="email" isRequired>
                <FormLabel>Email Address</FormLabel>
                <Input type="email" name="email" value={user.email} onChange={handleChange} />
                <FormHelperText>We'll never share your email.</FormHelperText>
              </FormControl>
              <FormControl id="college" isRequired>
                <FormLabel>College Name</FormLabel>
                <Input type="text" name="college" value={user.college} onChange={handleChange} />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input type={showPassword ? 'text' : 'password'} />
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

