import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { RNCamera } from 'react-native-camera';

const FaceRegistration = () => {
  const [faceRegistered, setFaceRegistered] = useState(false);
  const handleCaptureFace = async (camera) => {
    const options = { quality: 0.5, base64: true }
    try {
      const data = await camera.takePictureAsync(options);
      const faceData = { base64Image: data.base64 }

      setFaceRegistered(true);
      console.log('face registred successfully')
      console.log(faceData)
    }
    catch (error) {
      console.log("face registration error", error)
    }
  }
  return (
    <View className="bg-red-500 h-screen flex-1 justify-center items-center">
      <Text className="text-white font-bold text-xl">
        Face Registration Screen
      </Text>
      <RNCamera
        style={{ width: 300, height: 300 }}
        type={RNCamera.Constants.Type.front}
      >
        {({ camera, status }) => (
          <View>
            {!faceRegistered ? (
              <Button title="Capture Face" onPress={() => handleCaptureFace(camera)} />
            ) : (
              <Text>Face Registered!</Text>
            )}
          </View>
        )}
     </RNCamera>
    </View>
  )
}

export default FaceRegistration