'use strict';

const express = require('express');
const app = express();

// Exercise 1: Splendid Circles
app.get('/math/circle/:r', (req, res) => {
    const radius = parseFloat(req.params.r);
    if (isNaN(radius) || radius <= 0) {
        return res.status(400).json({ error: "Invalid radius provided" });
    }
    const area = Math.PI * radius * radius;
    const circumference = Math.PI * 2 * radius;
    res.json({ area, circumference });
});

// Exercise 2: Hello, you!
app.get('/hello/name', (req, res) => {
    const { first, last } = req.query;
    const missingParams = [];
    if (!first) missingParams.push('first');
    if (!last) missingParams.push('last');

    if (missingParams.length > 0) {
        return res
            .status(400)
            .send(`Missing Required GET parameters: ${missingParams.join(', ')}`);
    }

    res.send(`Hello ${first} ${last}`);
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
