import { Box, useColorModeValue } from '@chakra-ui/react'
import { motion } from 'framer-motion'
// import './icon.css'

const MiniIcon = () => {
    const icon = {
        hidden: {
          pathLength: 0,
          fill: "rgba(255, 255, 255, 0)"
        },
        visible: {
          pathLength: 1,
          fill: "rgba(255, 255, 255, 1)"
        }
      }
    
  return (
    <Box className='container' p='1.5' w='40px' h='40px' 
     bgColor={useColorModeValue('green.400','teal.200')} borderRadius='md'>
    <motion.svg 
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className="item"
      overflow='visible'
      strokeWidth='2'
      stroke='#fff'
      strokeLinejoin='round'
      strokeLinecap='round'
    >
      <motion.path
        d="M0 100V0l50 50 50-50v100L75 75l-25 25-25-25z"
        variants={icon}
        initial="hidden"
        animate="visible"
        transition={{
          default: { duration: 3, ease: "easeInOut" },
          fill: { duration: 3, ease: [1, 0, 0.8, 1] }
        }}
      />
    </motion.svg>
    </Box>
  )
}

export default MiniIcon