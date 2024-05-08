import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { RNCamera } from 'react-native-camera';
import Svg, { Rect } from 'react-native-svg';
import { detectFaces } from 'face-api.js'; 

const FaceDetection = () => {
  const cameraRef = useRef(null);
  const [faces, setFaces] = useState([]);

  const handleCameraStream = async () => {
    if (cameraRef.current) {
      const options = { quality: 0.5, base64: true };
      const data = await cameraRef.current.takePictureAsync(options);

      // Perform face detection on the captured image
      const detectedFaces = await detectFaces(data.base64);
      setFaces(detectedFaces);
    }
  };

  return (
    <View style={styles.container}>
      <RNCamera
        ref={cameraRef}
        style={styles.camera}
        type={RNCamera.Constants.Type.front}
        captureAudio={false}
      />

      <Svg style={StyleSheet.absoluteFill}>
        {faces.map((face, index) => (
          <Rect
            key={index}
            x={face.x}
            y={face.y}
            width={face.width}
            height={face.height}
            stroke="green"
            strokeWidth={2}
            fill="transparent"
          />
        ))}
      </Svg>

      <Button title="Detect Faces" onPress={handleCameraStream} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  camera: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});

export default FaceDetection;
