const express = require('express');
const fs = require('fs');

const api = express();



api.get('/', (request, response) => {
    fs.readFile(__dirname + './index.html', 
    (err, data) => {
        if (err) {
            return response.status(500).json({Message: "Error to load the file"})
        }

       response.status(200).json(data);
    })

})

api.listen(3333, () => console.log('Server is Running'));