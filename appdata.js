var express = require('express');

const app = express();

app.get('//users_data', (req,res) => {
    return res.json(users);
})

let users = [
    {
        id: 1,
        birth: "2000.01.23" 
    },
    {
        id: 2,
        birth: "1989.09.12" 
    },
    {
        id: 1,
        birth: "1997.04.15" 
    }
]