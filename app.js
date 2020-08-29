const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs')

const { createCanvas, loadImage, Image } = require('canvas')
const { static } = require("express");
const { text } = require('body-parser');

const jsonParser = bodyParser.json()


// Write "Awesome!"
app.use(static("public"))
app.use('/public', express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', function (req, res) {

  res.sendFile(__dirname + '/html/index.html');
});

app.post('/img', jsonParser, (req, res) => {
  console.log(req.body);
  array = req.body


  for (let index = 0; index < array.length; index++) {
    console.log(array[index]);
  }
  
  fs.readFile(__dirname + '/template.png', function (err, squid) {
      image = new Image
      image.src = squid


      const canvas = createCanvas(image.width + 120, image.height + 120)
      const ctx = canvas.getContext('2d')
  
      ctx.font = 'Crock Bold 30px '
      ctx.drawImage(image, 0, 0, image.width + 120, image.height + 120)
      
    for (let index = 0; index < array.length; index++) {
      console.log();
      ctx.fillText(String(index + 1) + ". " + array[index], 120, 490 + (80 * index))
    }
      
    // res.status(200).json({ data: `<img src="${canvas.toDataURL()}" />` });
    res.send({data:canvas.toDataURL()})
      })
})


console.log("Сервер запущен...");
app.listen(8080);
