const express = require('express');
const app = express();

const port = 3000;

app.listen(port, function(){
    console.log(`API is running on port ${port}!`);
})

