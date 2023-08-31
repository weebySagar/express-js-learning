const express = require('express');
const app = express();
const bodyParser = require('body-parser');



app.use(bodyParser.urlencoded({extended:false}));


app.use('/add-product',(req,res,next)=>{
    res.send('<form action="/product" method="POST"><input name="title" type="text"><input name="size" type="number"><button type="submit">submit</button></form>')
});

app.post('/product',(req,res)=>{
    console.log(req.body);
    res.redirect('/')
})

app.use('/',(req,res)=>{
    res.send('<h1>hello from node js</h1>')
})







app.listen(3000);