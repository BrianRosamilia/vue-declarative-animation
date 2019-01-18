//Test Server included for hot reloading
const express = require('express');
const app = express();

app.use(express.static('public'));

module.exports = app.listen(3000, function(e){
    if(e !== undefined){
        console.error(e);
    }
    console.log('App listening on port 3000!');
});