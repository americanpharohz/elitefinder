const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const contactRoute = require('./api/contact');

const app = express();
app.use(cors()); // Allow requests from frontend
app.use(bodyParser.json());

app.use('/api/contact', contactRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
