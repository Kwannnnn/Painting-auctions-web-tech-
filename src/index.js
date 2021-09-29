const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const port = 3000;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/paintings', require('./routes/paintings'));
app.use('/users', require('./routes/users'));
app.use('/bids', require('./routes/bids'));

app.listen(port, () => {
    console.log(`API is running on port ${port}!`);
});