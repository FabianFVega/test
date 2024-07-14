const axios = require('axios');
const apiKey = '03bdf366a0f11e072c175db4e11476ad56b1fb94';
const baseUrl = 'https://comicvine.gamespot.com/api';

async function getIssues(){
    try {
        const response = await axios.get(`${baseUrl}/issues/`, {
          params: {
            api_key: apiKey,
            format: 'json'
          }
        });
        return response.data;
      } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
      }
}


module.exports = {getIssues}