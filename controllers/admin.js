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
  const product = new Product(null,title, imageUrl, description, price);
  product.save();
  res.redirect('/');
};


exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;
  if(!editMode){
    return res.redirect('/')
  }
  const {productId }= req.params;
  Product.findById(productId,product=>{
    if(!product) return res.redirect('/');
    res.render('admin/add-product', {
      pageTitle: 'Edit Product',
      path: '/admin/edit-product',
      editing :editMode,
      product:product
    });
  })
};

exports.postEditProduct =(req,res)=>{
const {title,productId, imageUrl, price,description} = req.body;
const updatedProduct = new Product(productId,title,imageUrl,description,price);
updatedProduct.save();
res.redirect('/admin/products')
}

exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('admin/products', {
      prods: products,
      pageTitle: 'Admin Products',
      path: '/admin/products'
    });
  });
};

exports.deleteProduct=(req,res)=>{
const {productId} = req.params;
const deleteProduct = Product.delete(productId);
if(!deleteProduct) console.log('something went wrong');;
res.redirect('/admin/products')
}
