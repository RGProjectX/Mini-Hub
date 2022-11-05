import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Tooltip
} from '@chakra-ui/react';
import { MoonIcon, SunIcon,AddIcon } from '@chakra-ui/icons';
import { NavLink } from 'react-router-dom'
import MiniIcon from '../icon/MiniIcon';


export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
      <Box position="fixed"
      zIndex="dropdown" width='100%' top='0' bg={useColorModeValue('gray.200', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box><NavLink to='/'><MiniIcon/></NavLink></Box>
          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
            <Tooltip hasArrow placement='bottom' label='Upload Project'> 
            <Button
              variant={'solid'}
              size={'sm'} colorScheme={useColorModeValue('green','teal')}><AddIcon/></Button>
              </Tooltip> 
              <Button onClick={toggleColorMode} variant={'solid'}
              size={'sm'} colorScheme={useColorModeValue('green','teal')}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
              
              <Menu >
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    size='sm'
                    src={'https://avatars.dicebear.com/api/adventurer/oh.svg'}
                  />
                </MenuButton>
                <MenuList alignItems={'center'} >
                  <br />
                  <Center>
                    <Avatar
                      size={'2xl'}
                      src={'https://avatars.dicebear.com/api/adventurer/oh.svg'}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Rohit Ghorui</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem><Link href='/signin'>Sign In</Link></MenuItem>
                  <MenuItem><Link href='/signup'>Sign Up</Link></MenuItem>
                  <MenuItem><Link href='/view'>View All</Link></MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
  );
}