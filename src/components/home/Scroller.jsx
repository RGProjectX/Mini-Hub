import React from 'react'
import {Link} from 'react-scroll'
import { Center,Circle,Box,VStack,Text,Icon,keyframes } from '@chakra-ui/react'
import {CgPushDown} from 'react-icons/cg'
import { motion } from 'framer-motion';

const animationKeyframes = keyframes`
 0% {
    transform: scale(1);
    opacity: 0;}
  50%{
    opacity: 1;}
  100%{
    transform: scale(1.5);
    opacity: 0;}
`;

const animation = `${animationKeyframes} 2s ease-in-out infinite`;
const Scroller = () => {
  return (
    <Link to='profile' smooth="true" duration={500}>
    <Center>
    <Circle size="65px" border='1px'  as={motion.div}
        animation={animation}></Circle>
    <Box display="flex" alignSelf="center" pos="fixed">
      <VStack>
      <Text>Scroll</Text>
      <Icon as={CgPushDown} />
      </VStack>
    </Box>
    </Center>
    </Link>
  )
}

export default Scroller