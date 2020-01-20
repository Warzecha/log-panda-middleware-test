const axios = require('axios');
require('dotenv').config();

const logPanda = (req, res, next) => {

    const startTime = Date.now();
    const path = req.path;

    res.on('end', function() {
        console.log('end')
    });

    res.on('close', () => {

        const elapsedTime = Date.now() - startTime;

        const requestBody = {
            appName: process.env.PANDA_APP_NAME,
            timestamp: startTime,
            method: req.method,
            elapsedTime: elapsedTime,
            path: path,
            requestBody: req.body,
            statusCode: res.statusCode,
            statusMessage: res.statusMessage,
            maxRpm: process.env.PANDA_MAX_RPM,
        };

        axios.post(process.env.PANDA_LOGS_URL, requestBody)
            .catch(err => {
                console.log("Log Panda request error: ", err)
            })
    });

    next()
};

module.exports = logPanda;