var express = require("express")
var logger = require("morgan")
var bodyParser = require("body-parser")

//Create a new instance of an express app
var app = express()

//set up ejs
app.set('view engine', 'ejs') // behind the scenes, requires ejs
//allows us to put css and images and stuff inside the views folder
app.use(express.statoc('views'))
//tell app where to find the views folder
app.set('views',__dirname + '/views' )
app.get('/', function(request, response){
    response.render('home.ejs')
})
var port = process.env.PORT


app.listen(port, function(){
    console.log(`App running on ${port} GLADOS.exe`)
})