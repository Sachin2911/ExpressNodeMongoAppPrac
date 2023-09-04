const express = require("express")
const mongoose = require("mongoose")
const Track = require("./models/track")
// Creating an app instance
const app = express();

// Connecting to the MongoDB
const dbURI = 'mongodb+srv://fintrack1:Sachin2911@cluster0.pq47buw.mongodb.net/tracks?retryWrites=true&w=majority'
mongoose.connect(dbURI).then((result)=>{
    console.log("connected to db")
    // Start the app after connecting to the DB
    app.listen(3000)
}).catch((err)=>console.log(err))

app.use(express.urlencoded({extended:true}))
// Using ejs for dynamic templating
app.set('view engine', 'ejs')
app.use(express.static('public'))

// All the page routes
app.get('/',(req, res)=>{
    Track.find().sort({createdAt:-1}).then((results)=>{
        res.render('index', {entries:results})
    })
    
})
app.get('/about',(req, res)=>{
    res.render('about')
})
app.get('/create',(req, res)=>{
    res.render('create')
})

app.use((req, res)=>{
    res.render('404')
})