import React,{useState} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './src/screens/utils/TabNavigator';
import StackNavigation from './src/screens/utils/StackNavigation';
import UpdateProfile from './src/screens/home/UpdateProfile';


const App = () => {
  const [isLoggedIn,setIsLoggedIn] = useState(false);
  const handleLogin = ()=>{
    setIsLoggedIn(true)
  }
  return (
    <NavigationContainer>
      {/* {isLoggedIn ? (
        <TabNavigator/>
      ):(
        <StackNavigation handleLogin={handleLogin}/>
      )
      } */}
      <UpdateProfile/>
    </NavigationContainer>
   
  )
}
export default App