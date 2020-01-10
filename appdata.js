var express = require('express');
const app = express();
var router = express.Router()
var path = require('path')
var mysql = require('mysql')

var connection = mysql.createConnection({
    host     : '35.189.176.97',
    port     : 3306,
    user     : 'root',
    password : 'root',
    database : 'jsman'
}); //잘모르겠다

connection.connect();

router.get('/' , function(req,res){
    console.log('get join url')
    res.sendFile(path.join(__dirname, '/index.html'))
})

module.exports = router;

app.get('//users_data', (req,res) => {
    return res.json(users);
})