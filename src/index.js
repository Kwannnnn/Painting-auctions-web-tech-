const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');

const port = 3000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/paintings', require('./routes/paintings'));
app.use('/credentials', require('./routes/credentials'));
app.use('/bids', require('./routes/bids'));
app.use('/users', require('./routes/users'));

app.listen(port, () => {
    console.log(`API is running on port ${port}!`);
});