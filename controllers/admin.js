const { where } = require('sequelize');
const Product = require('../models/product');


exports.getAddProduct = (req, res, next) => {
  res.render('admin/add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
    editing:false 
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  Product.create({title,price,description,imageUrl}).then(()=>res.redirect('/admin/products')).catch(err=>console.log(err))
};


exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;
  if(!editMode){
    return res.redirect('/')
  }
  const {productId }= req.params;
  Product.findByPk(productId).then((product)=>{
    if(!product) return res.redirect('/');
    res.render('admin/add-product', {
      pageTitle: 'Edit Product',
      path: '/admin/edit-product',
      editing :editMode,
      product:product
    });
  }).catch(err=>console.log(err))
};

exports.postEditProduct =(req,res)=>{
const {title,productId, imageUrl, price,description} = req.body;


Product.update({title,productId, imageUrl, price,description},{where:{id:productId}}).then(()=>res.redirect('/admin/products')).catch(err=>console.log(err))
}

exports.getProducts = (req, res, next) => {
  
  Product.findAll().then(products=>{
    res.render('admin/products', {
      prods: products,
      pageTitle: 'Admin Products',
      path: '/admin/products'
    });
  }).catch(err=>console.log(err));
};

exports.deleteProduct=(req,res)=>{
const {productId} = req.params;
Product.destroy({where:{id:productId}}).then(()=>
res.redirect('/admin/products')
).catch(err=>console.log(err))
}
