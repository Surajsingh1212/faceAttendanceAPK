import React, { useState } from 'react';
import { View, Text, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import backgroundImg from '../../assets/img/background/face-backgrounds2.png' ;
import styles from '../../assets/css/custom';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons' ;
import {useNavigation} from '@react-navigation/native';

const Login = ({ handleLogin }) => {
    const navigation = useNavigation() ; 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
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

