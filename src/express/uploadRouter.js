const express = require('express')
const router = express.Router()

/* File upload */
const path = require('path')
const multer = require('multer')
const fs = require('fs')

const options = {
    dest : path.resolve(__dirname,'..','..','uploads')
}

const uploader = multer(options)
const photoMiddleware = uploader.single('xxx')  //name on React (HTML)

router.post('/',photoMiddleware,(req,res) => {
    const { filename, originalname, destination } = req.file

    const oldpath = path.resolve(destination,filename)    
    const ext = (path.extname(originalname))
    let newpath = path.resolve(destination,originalname)

    if(ext == '.pdf'){
        console.log('OK')
        newpath = path.resolve(destination,'pdf',originalname)        
    }

    //const newpath = path.resolve(destination,originalname)
    
    fs.renameSync(oldpath,newpath)

    res.json({status : 'success'})
})

module.exports = router