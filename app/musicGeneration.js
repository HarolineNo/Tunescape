import axios from 'axios';
import Constants from 'expo-constants';

const API_KEY = 'd4bef36ff24d4f30a013a82d67ff97cd';

const url = 'https://api.aimlapi.com/generate';
const headers = {
<<<<<<< HEAD
  'Authorization': `Bearer ${API_KEY}`,
=======
  'Authorization': 'Bearer',
>>>>>>> ec71e17496948f28b9a8f3bcf28795288089aee6
  'Content-Type': 'application/json'
};
const payload = {
  'prompt': `Create a cinematic violin music track`,
  'make_instrumental': true,
  'wait_audio': true
};

axios.post(url, payload, { headers: headers, responseType: 'arraybuffer' })
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });
