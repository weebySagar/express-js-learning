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
  product.save().then(()=>
     res.redirect('/')
    ).catch(err=>console.log(err));
};


exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;
  if(!editMode){
    return res.redirect('/')
  }
  const {productId }= req.params;
  Product.findById(productId).then(([product])=>{
    if(!product) return res.redirect('/');
    res.render('admin/add-product', {
      pageTitle: 'Edit Product',
      path: '/admin/edit-product',
      editing :editMode,
      product:product[0]
    });
  }).catch(err=>console.log(err))
};

exports.postEditProduct =(req,res)=>{
const {title,productId, imageUrl, price,description} = req.body;
const updatedProduct = new Product(productId,title,imageUrl,description,price);
updatedProduct.save().then(()=>

res.redirect('/admin/products')
).catch(err=>console.log(err));
}

exports.getProducts = (req, res, next) => {
  Product.fetchAll().then(([products])=>{
    res.render('admin/products', {
      prods: products,
      pageTitle: 'Admin Products',
      path: '/admin/products'
    });
  }).catch(err=>console.log(err));
};

exports.deleteProduct=(req,res)=>{
const {productId} = req.params;
Product.delete(productId).then(()=>
res.redirect('/admin/products')
).catch(err=>console.log(err))
}
