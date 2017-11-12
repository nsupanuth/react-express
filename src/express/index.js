const express = require('express')
const app = express()
const path = require('path')
const router = express.Router()
const multer = require('multer')

app.use(express.static(path.resolve(__dirname,'..','..','public')))

const items = [
    { id :1,name : 'Item 101'},
    { id :2,name : 'Item 102'},
    { id :3,name : 'Item 103'},
    { id :4,name : 'Item 104'},
    { id :5,name : 'Item 105'}
]


router.get('/api/items',(req,res) => {
    res.json(items)
})


app.use(router)
app.use('/uploads',require('./uploadRouter.js'))


app.listen(8000)