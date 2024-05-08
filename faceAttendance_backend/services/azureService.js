const msRest = require("@azure/ms-rest-js");
const Face = require("@azure/cognitiveservices-face");
require('dotenv').config();

const credentials = new msRest.ApiKeyCredentials({ inHeader: { 'Ocp-Apim-Subscription-Key': process.env.VISION_KEY } });
const client = new Face.FaceClient(credentials, process.env.VISION_ENDPOINT);

const detectAndRecognizeFaces=async(imageUrl)=>{
    try {
        // Implement face detection and recognition using Azure Cognitive Services
        const detectedFaces = await client.face.detectWithUrl(imageUrl);
        const faceIds = detectedFaces.map(face => face.faceId);

        // Perform face identification
        const identifiedFaces = await client.face.identify(faceIds, { personGroupId: 'your_person_group_id' });

        return identifiedFaces;
    } catch (error) {
        console.error('Error detecting and recognizing faces:', error);
        throw error; // Handle or propagate the error appropriately
    }
}

module.exports = {
    detectAndRecognizeFaces
};
