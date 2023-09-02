const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');


const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const contactUsRoutes = require('./routes/contactus');
const successRoutes = require('./routes/success')
const pageNotFoundController = require('./controllers/pageNotFound');


app.set('view engine','ejs');
app.set('views','views');

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')))
app.use('/admin',adminRoutes);
app.use(shopRoutes);
app.use(contactUsRoutes);
app.use(successRoutes)
app.use(pageNotFoundController.pageNotFound)    







app.listen(3000);