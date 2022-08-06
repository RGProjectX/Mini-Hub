import { extendTheme } from "@chakra-ui/react"

const customTheme = extendTheme({
  fonts: {
    body: `"Poppins", sans-serif`,
    heading: `"Poppins", sans-serif`
  },
  colors : {
    primary: "#75FFCC",
    secondary: "#44D9C5",
    tertiary: "#26B3B6",
    background: "#2F4858"
  },
  breakpoints: {
    sm: '40em',
    md: '52em',
    lg: '64em',
    xl: '80em',
  }
});
const theme = extendTheme({customTheme});
export default customTheme;