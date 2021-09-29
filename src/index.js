const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const port = 3000;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/paintings', require('./routes/paintings'));
app.use('/credentials', require('./routes/credentials'));
app.use('/bids', require('./routes/bids'));

app.listen(port, () => {
    console.log(`API is running on port ${port}!`);
});