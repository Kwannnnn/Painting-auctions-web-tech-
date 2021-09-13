const express = require('express');
const app = express();

const port = 3000;

app.use(express.json());

app.use('/paintings', require('./routes/paintings'));

app.listen(port, () => {
    console.log(`API is running on port ${port}!`);
})

