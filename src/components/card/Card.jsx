import {
    Heading,
    Avatar,
    Box,
    Center,
    Text,
    Stack,
    Button,
    Link,
    Badge,
    useColorModeValue,
    Wrap,
    Flex,
  } from '@chakra-ui/react';
  
  export default function Card(props) {

    return (
        
      <Center py={6}>
        <Flex
        flexDirection='column'
        justifyContent='space-around'
          maxW={'320px'}
          w={'full'}
          h='100%'
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'2xl'}
          rounded={'lg'}
          p={6}
          textAlign={'center'}>
          <Heading color='green.500' fontSize={'2xl'} fontFamily={'body'}>
            {props.name}
          </Heading>
          <Text fontWeight={600} color={'gray.500'} mb={4}>
           {props.author}
          </Text>
          <Text noOfLines={2}
            textAlign={'center'}
            color={useColorModeValue('gray.700', 'gray.400')}
            px={3}>
            {props.description}
          </Text>
  
          <Wrap align={'center'} justify={'center'} mt={6}>
            {(props.language).map(function(lang) {
                return <Badge
                px={2}
                py={1}
                variant='outline' colorScheme='green'
                bg={useColorModeValue('gray.50', 'gray.800')}
                fontWeight={'400'}>
                {lang}
              </Badge>
              }
            )}
          </Wrap>
  
          <Stack mt={8} align='' direction={'row'} spacing={4}>
            <Button 
              flex={1}
              fontSize={'lg'}
              rounded={'full'}
              bg={'green.400'}
              color={'white'}
            //   boxShadow={
            //     '0px 1px 20px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
            //   }
              _hover={{
                bg: 'green.500',
              }}
              _focus={{
                bg: 'green.500',
              }}>
              Check Out
            </Button>
          </Stack>
        </Flex>
      </Center>
    );
  }