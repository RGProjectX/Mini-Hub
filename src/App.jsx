
import './App.css'
import SignUp from './components/signUp/SignUp'
import SignIn from './components/signIn/SignIn'
import {Routes,Route} from 'react-router-dom'
import Home from './components/home/Home'
import Nav from './components/navbar/Navbar'
function App() {
  
  return (
    <>
    <Nav/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/signin' element={<SignIn/>}/>
      <Route path='/signup' element={<SignUp/>}/>
    </Routes>
    </>
  )
}

export default App
