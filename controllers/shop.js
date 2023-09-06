const Product = require('../models/product');
const Cart = require('../models/cart');


exports.getProducts = (req, res, next) => {
  Product.fetchAll().then(([products,fieldData])=>{
    res.render('shop/product-list', {
      prods: products,
      pageTitle: 'All Products',
      path: '/products'
    });
  }).catch(err=>console.log(err));
 
};

exports.getProduct = (req,res)=>{
const {productId} = req.params;
Product.findById(productId).then(([product,fieldData])=>{
  res.render('shop/product-detail',{
    product:product[0],
    pageTitle:product.title,
    path:'/products'
  })
}).catch(err=>console.log(err))

}

exports.getIndex = (req, res, next) => {
  Product.fetchAll().then(([products,fieldData])=>{
    res.render('shop/index', {
      prods: products,
      pageTitle: 'Shop',
      path: '/'
    });
  }).catch(err=>console.log(err));
  
};

exports.getCart = (req, res, next) => {
  res.render('shop/cart', {
    path: '/cart',
    pageTitle: 'Your Cart'
  });
};

exports.postCart=(req,res)=>{
const {productId} = req.body;
Product.findById(productId, (product)=>{
  Cart.addProduct(productId,product.price)
})
}

exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
    path: '/orders',
    pageTitle: 'Your Orders'
  });
};

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout'
  });
};
