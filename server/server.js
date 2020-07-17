const express = require('express');
const app = express();

const PORT = 5555;
app.listen(PORT, () => {console.log(`Listening to PORT: ${PORT}`)})

app.use(express.static('public'))