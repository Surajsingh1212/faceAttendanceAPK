import React from 'react'
import { Text, View, ImageBackground, Image, TouchableOpacity ,TextInput} from 'react-native'
import backgroundImg from '../../assets/img/background/profile-background.png';
import profile from '../../assets/img/profile/profile.png';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons' ;

const UpdateProfile = () => {

    return (
        <ImageBackground source={backgroundImg} resizeMode="cover" className="flex-1 items-center justify-center">
            <View className="flex justify-center items-center h-[80%] w-[80%]">
                <View className="absolute top-0 border-2 border-white h-38 w-38 rounded-full items-center text-center ">
                    <Image source={profile} className="rounded-full h-36 w-36 " />
                </View>
                <View className="h-[50%] w-[100%] text-center ">
                        <View className="flex flex-row items-center mt-16 border border-rose-900 rounded-md shadow-md py-1 px-2">
                            <Icon name="account-tie" size={30} color="#ef4444" />
                            <TextInput className="text-xl w-[90%]" placeholder='Enter Password' secureTextEntry={true} />
                        </View>
                        <View className="flex flex-row items-center mt-5  border border-rose-900 rounded-md shadow-md py-1 px-2">
                            <Icon name="email" size={30} color="#ef4444" />
                            <TextInput className="text-xl w-[90%]" placeholder='Enter Password' secureTextEntry={true} />
                        </View>
                        <View className="flex flex-row items-center mt-5 border border-rose-900 rounded-md shadow-md py-1 px-2">
                            <Icon name="lock" size={30} color="#ef4444" />
                            <TextInput className="text-xl w-[90%]" placeholder='Enter Password' secureTextEntry={true} />
                        </View>
                    </View>
                <TouchableOpacity className="bg-red-500 rounded-md items-center w-[100%] py-4 px-10 absolute bottom-20">
                    <Text className="font-bold text-2xl text-white">Update Now</Text>
                </TouchableOpacity>

            </View>
        </ImageBackground>
    )
}

export default UpdateProfile