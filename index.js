const express = require('express');
const articles = require('./scrape');
const app = express();

app.get('/', (req, res) => {
    const data = articles;
    console.log(data);
    res.status(200).json(data);
});


const port = process.env.PORT || 3000;
app.listen( port, () => {
    console.log(`Listening on ${port}`);
});
