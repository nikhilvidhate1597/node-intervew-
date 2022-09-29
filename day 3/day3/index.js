const express=require('express')
const app=express()

const add= require('./export')
const {name}= require('./export')
//cors - npm i cors
// const cors = require("cors")

// app.use(cors())

app.get('/sum',add)
app.get('/name',name,(req,res)=>{console.log('hi')})

app.get('/',(req,res)=>{
    console.log('hi')
    res.send('hlo')
})


//middleware
const middleware1 = (req,res,next) =>{
    console.log('middleware1')
    next()
}
const middleware2 = (req,res,next) =>{
    console.log('middleware2')
    next()
}

app.use(middleware2)//using middleware2 globally

app.get('/page1',middleware1,function (req,res) {
    console.log('page1 - both middleware 1 and 2 applied')
})//here we will get both middleware 1 and 2

app.get('/page2',function (req,res) {
    console.log('page2-middleware 2 only applied')
})

app.get('/page3',middleware1,function (req,res) {
    console.log('page3 - - both middleware 1 and 2 applied')
})


app.listen(8080,()=>{
    console.log('run...')
})