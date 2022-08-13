const express = require('express');
const task = require('../starter/Routes/task');
const errorHandlerMiddleware = require('../starter/Middleware/errorHandler');
require('dotenv').config();
const connectDB = require('./db/connect');
const notfound = require ('../starter/Middleware/not-found');

const app = express();

//middleware
app.use(express.static('./public'));
app.use(express.json());
app.use('/api/v1/tasks',task)
app.use(notfound);
app.use(errorHandlerMiddleware);

const port = 3000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port,()=> {
            console.log('server is listening to port ' + port +'...');
    })
    }
    catch(error) {
        console.log(error);
    }
}

start();

