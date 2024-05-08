import React, { useState,useEffect } from 'react';
import { View, Text, ImageBackground, TextInput, TouchableOpacity ,PermissionsAndroid} from 'react-native';
import backgroundImg from '../../assets/img/background/face-backgrounds2.png' ;
import styles from '../../assets/css/custom' ;
import Icon from 'react-native-vector-icons/MaterialCommunityIcons' ;
import {useNavigation} from '@react-navigation/native' ;
import Geolocation from 'react-native-geolocation-service' ;
import geolib from 'geolib' ;
// import getDistance from 'geolib/es/getDistance';
import { getDistance } from 'geolib';

const storedLocation = {
    latitude :32.45543,
    longitude:-122.5434
}

const Login = ({ handleLogin }) => {
    
    const navigation = useNavigation() ; 
    //gatting user location 
    const [location ,setLocation] = useState(null)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

      //gatting user location when user login 
      useEffect(() => {
        const requestLocationPermission = async () => {
            try {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                    {
                        title: 'Geolocation Permission',
                        message: 'Can we access your location?',
                        buttonNeutral: 'Ask Me Later',
                        buttonNegative: 'Cancel',
                        buttonPositive: 'OK',
                    },
                );
                if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                    console.log('Location permission granted');
                    return true;
                } else {
                    console.log('Location permission denied');
                    return false;
                }
            } catch (err) {
                console.warn(err);
                return false;
            }
        };

        const fetchLocation = async () => {
            const permissionGranted = await requestLocationPermission();
            if (permissionGranted) {
                Geolocation.getCurrentPosition(
                    position => {
                        console.log(`Current Location: Latitude-${position.coords.latitude }, Longitude-${position.coords.longitude}`);
                        setLocation(position);

                        //calculate distance between current location or stored location .
                        const distance = getDistance(
                            {latitude:position.coords.latitude , longitude: position.coords.longitude},
                            storedLocation
                        )

                        // max distance 
                        const maxDistance = 20;

                        // Check if distance is within the specified range
                        if(distance <= maxDistance){
                            handleLogin();
                        }
                        else{
                            console.log('Location Mismatch', 'You are not at the right location to login.');
                        }
                    },
                    error => {
                        console.warn(`Error getting location: ${error.code}, ${error.message}`);
                        setLocation(null);
                    },
                    { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
                );
            }
        };

        fetchLocation();
    }, []); // Empty dependency array means this effect runs once when component mounts

    const onPressLogin = () => {
        console.log("Email : ", email)
        console.log("Password : ", password)
        if(email.trim() !== '' && typeof password === 'string' && password.trim() !== ''){
            handleLogin();
        }
    }     
    const handleForgotNavigation =()=>{
        navigation.navigate('ForgotPassword')
    }
   
    return (
        <ImageBackground source={backgroundImg} resizeMode="cover" className="flex-1 items-center justify-center">
            <View className="flex-1 justify-center items-center w-100 rounded-xl absolute bottom-20 h-3/5 right-6 left-6 bg-white p-5" style={styles.boxShadow}>
                <View className="w-[100%] h-[80%] ">
                    <Text className="text-3xl font-extrabold text-center text-red-500 font-serif mb-16">Login Here</Text>
                    <View className="flex flex-row items-center border border-rose-900 rounded-md shadow-xl mb-6 py-1 px-2">
                        <Icon name="email" size={30} color="#ef4444"/>
                        <TextInput className="text-xl w-[90%]" placeholder='Enter Email' value={email} onChangeText={(text) => setEmail(text)} />
                    </View>
                    <View className="flex flex-row items-center mb-15 border border-rose-900 rounded-md shadow-md py-1 px-2">
                        <Icon name="lock" size={30} color="#ef4444" />
                        <TextInput className="text-xl w-[90%]" placeholder='Enter Password' value={password}  secureTextEntry={true} onChangeText={(text) => setPassword(text)} />
                    </View>
                    <View className="mb-10 mt-3">
                        <Text className="text-right text-red-500 text-xl"onPress={handleForgotNavigation} > 
                            ForgotPassword?
                        </Text>
                    </View>
                    <TouchableOpacity onPress={onPressLogin} className="bg-red-500 rounded-md  items-center w-100 py-4 px-10">
                        <Text className="font-bold text-2xl text-white">Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    )
}

export default Login;

