const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');


const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const contactUsRoutes = require('./routes/contactus');
const successRoutes = require('./routes/success')
const { log } = require('console');


app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')))
app.use('/admin',adminRoutes);
app.use(shopRoutes);
app.use(contactUsRoutes);
app.use(successRoutes)


// app.get('/',(req,res)=>{
    
//     fs.readFile('message.txt',(err,data)=>{
//         res.send(`${data}\n<form method="POST" onSubmit="document.getElementById('username').value=localStorage.getItem('username')" action="/"><input id="username" type="hidden" name="username" value=''><input type="text" name="message"><button type="submit">Send</button></form>`)


//     })

// })

// app.post('/',(req,res)=>{
//     const {username,message}= req.body;
//     const data = username + " : " + message + "\n";
//     fs.open('message.txt','a',(err,fd)=>{
//         if(err){
//             console.log(err);
//             return
//         }
//         fs.appendFile(fd,data,(err)=>console.log(err));
//         fs.close(fd,()=>{
//             res.redirect('/')
//         });
//     });
    
// })

// app.get('/login',(req,res)=>{
//     res.send('<form method="POST" onSubmit="localStorage.setItem(`username`,document.getElementById(`username`).value)" action="/login"><input id="username" type="text" placeholder="enter username" name="username"><button type="submit">Log In</button></form>')
// })

// app.post('/login',(req,res)=>{
//     const {username}= req.body;
    
    
//     res.redirect('/')
   
    
 
// })

app.use((req,res)=>{
    res.status(404).send('<h1>page not found</h1>')
})







app.listen(3000);