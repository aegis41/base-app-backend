const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./db');
const apiRoutes = require('./api');

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());        //for parsing JSON request bodies
app.use('/api', apiRoutes);    //routes under the /api path

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Servver running on port ${PORT}`);
});