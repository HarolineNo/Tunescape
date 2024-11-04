import axios from 'axios';


const url = 'https://api.aimlapi.com/generate';
const headers = {
  'Authorization': 'Bearer dba239ae3daf426683dc5abafc8b3faa',
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
