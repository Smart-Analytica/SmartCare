// src/aws-config.js
import AWS from 'aws-sdk';

AWS.config.update({
  region: 'us-west-2', // Replace with your region
  credentials:{
    accessKeyId: 'xx', // From .env
    secretAccessKey: 'xx', // From .env
  },  
});

export const lexRuntime = new AWS.LexRuntimeV2();