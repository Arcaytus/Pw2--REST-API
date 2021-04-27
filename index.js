const express = require('express');
const request = require('request');

const app = express();

app.get('/api/countries', (req,res) => {
    res.json([
        { country: 'Argentina', id: 'AR', language: 'Spanish' },
        { country: 'Brazil', id: 'BR', language: 'Portuguese' },
        { country: 'Italy', id: 'IT', language: 'Italian' }]);
});

request("http://localhost:3000/api/countries", (error, response, body) => {
    if(error){
        console.log('There was an error');   
    }
    else{
        console.log(body);
    }
})

app.listen(3000, () => {
    console.info('Loading information on port 3000')
});