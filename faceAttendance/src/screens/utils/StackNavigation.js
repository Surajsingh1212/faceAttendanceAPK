import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack' ;
import Login from '../auth/Login';
import ForgotPassword from '../auth/ForgotPassword';
 
const Stack = createNativeStackNavigator();

const StackNavigation = ({ handleLogin }) => {
  return (
   <Stack.Navigator>
    <Stack.Screen name="Login"  options={{ headerShown: false }}>
        {(props)=><Login {...props} handleLogin={handleLogin}/>}
    </Stack.Screen>
    <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{ headerShown: false }}/>
   </Stack.Navigator>
  )
}

export default StackNavigation