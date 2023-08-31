const express = require('express');
const app = express();
const bodyParser = require('body-parser');


const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop')


app.use(bodyParser.urlencoded({extended:false}));

app.use('/admin',adminRoutes);
app.use('/shop',shopRoutes);

app.get('/',(req,res)=>{
    res.send('<h1>welcome to node js</h1>')
})

app.use((req,res)=>{
    res.status(404).send('<h1>page not found</h1>')
})







app.listen(3000);