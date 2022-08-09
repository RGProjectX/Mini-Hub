import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    ModalCloseButton,
    Button,
    Flex,
    Box,
    FormControl,
    FormLabel,
    FormHelperText,
    Input,
    InputRightElement,
    InputGroup,
    Stack,
    HStack,
    Link,
    Heading,
    Text,
    useDisclosure,
    useColorModeValue
  } from '@chakra-ui/react'

import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  return  <Flex
  align={'center'}
  justify={'center'}>
  <Stack spacing={8} mx={'auto'} maxW={'lg'} py={4} px={4}>
    <Stack align={'center'}>
      <Heading fontSize={'4xl'} textAlign={'center'} color={useColorModeValue('green.500','teal.200')}>
        Sign up
      </Heading>
      <Text fontSize={'lg'} color={'gray.500'} textAlign='center'>
        to access upto 600+ projects
      </Text>
    </Stack>
    <Box
      >
      <Stack spacing={4}>
        <HStack>
          <Box>
            <FormControl id="firstName" isRequired>
              <FormLabel>First Name</FormLabel>
              <Input type="text" />
            </FormControl>
          </Box>
          <Box>
            <FormControl id="lastName" isRequired>
              <FormLabel>Last Name</FormLabel>
              <Input type="text" />
            </FormControl>
          </Box>
        </HStack>
        <FormControl id="email" isRequired>
          <FormLabel>Email Address</FormLabel>
          <Input type="email"  />
          <FormHelperText>We'll never share your email.</FormHelperText>
        </FormControl>
        <FormControl id="college" isRequired>
          <FormLabel>College Name</FormLabel>
          <Input type="text" />
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
            >
            Sign up
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
}


export default function SignUpModal() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        <Link onClick={onOpen}>Sign Up</Link>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay bg='blackAlpha.300'
      backdropFilter='blur(10px)'/>
          <ModalContent >
            <ModalCloseButton />
            <ModalBody >
              <SignUp/>
            </ModalBody>
  
          </ModalContent>
        </Modal>
      </>
    )
  }