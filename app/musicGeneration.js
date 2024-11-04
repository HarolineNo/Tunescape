import axios from 'axios';


const url = 'https://api.aimlapi.com/generate';
const headers = {
  'Authorization': 'Bearer',
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
