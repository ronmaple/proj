const express = require('express');
const app = express();
const path = require('path');
const public = path.join(__dirname, 'public');
const PORT = 3000; // || process.env.PORT;

app.use(express.static(public));

app.get('/', (req, res) => {
    res.sendFile(public, 'index.html');
})
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})

/*
    Notes:
        webcam requires a server => basic express server to serve static file
*/