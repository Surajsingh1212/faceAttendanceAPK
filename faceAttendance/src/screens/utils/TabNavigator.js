import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';
import screens from './TabContent'


const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
      <Tab.Navigator 
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        headerShown: false,
        tabBarStyle:styles.tabBar
      }}
      >
        {screens.map((screen) => (
        <Tab.Screen
          key={screen.name}
          name={screen.name}
          component={screen.component}
          options={{
            tabBarLabel: screen.label,
            tabBarIcon: ({ color, size }) => screen.icon({ color, size }),
          }}
        />
      ))}
      </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  tabBar:{
    height:80,
    position:'absolute',
    bottom:25,
    marginHorizontal:20,
    borderRadius:20,
    justifyContent:'center',
    alignItems:'center',
    borderWidth:0.5,
    borderColor:'#dadada',
    elevation:.5
  }
})
export default TabNavigator ;