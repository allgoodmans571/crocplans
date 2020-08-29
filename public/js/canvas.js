const express = require("express")
const app = express()
var { wishlist } = require("./vue")
const fs = require('fs')

const { createCanvas, loadImage, Image } = require('canvas')
const { static } = require("express")


// Write "Awesome!"
app.use(static("public"))


app.get('/', (req, res) => {
    fs.readFile(__dirname + '/template.png', function (err, squid) {
        image = new Image
        image.src = squid


        const canvas = createCanvas(image.width, image.height)
        const ctx = canvas.getContext('2d')
    
        ctx.font = '28px Impact'
        ctx.drawImage(image, 0, 0, image.width, image.height)
    // Draw line under text
       
    
        ctx.fillText(wishlist, 120, 430 + 40 * i)
        fs.writeFileSync('public/test2.png', canvas.toBuffer())
        res.send('<img src="' + canvas.toDataURL() + '" />')
        })
    })

app.listen(3000, () => console.log("hello world"))