const User = require('../models/user');
const path = require('path');


exports.getUsers=(req,res)=>{
    res.sendFile(path.join(__dirname,'..','views','user','user.html'))
    // User.findAll().then((users)=>res.json(users)).catch(err=>console.log(err));
}

exports.getAllUsers=(req,res)=>{
    User.findAll().then((user)=>res.json(user)).catch(err=>console.log(err));
}

exports.addUser=(req,res)=>{
    const {name,phoneNo,email}= req.body;
    User.create({name,phoneNo,email}).then(()=>res.redirect('/users')).catch(err=>console.log(err));
}

exports.deleteUser=(req,res)=>{
    const {id}= req.params;
    User.destroy({where:{id}}).then(()=>res.redirect('/users')).catch(err=>console.log(err))
}

