const express = require('express');
const path = require('path')
const app = express();

app.use('/', express.static(path.join(__dirname, './')))

const PORT = process.env.PORT || 3000;

app.get('/', (req, res)=>{
    res.set('Content-Type', 'text/html');
    res.status(200).redirect("https://twitch.tv/fauxres");
});


app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is listening on http://localhost:"+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);
