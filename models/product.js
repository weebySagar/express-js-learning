const path = require('path');
const db = require('../util/database');

const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'products.json'
);



module.exports = class Product {
  constructor(id,title, imageUrl, description, price) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    if(!this.id){
      return db.execute('INSERT INTO products (title,price,description, imageUrl) VALUES (?, ? ,? ,?)',
      [this.title,this.price,this.description,this.imageUrl]);
    }
    else{
      return db.execute('UPDATE products SET title=?,price=?,description=?,imageUrl=?  WHERE products.id = ?',
      [this.title,this.price,this.description,this.imageUrl,this.id])
    }
  }



  static delete(id){
    return db.execute('DELETE FROM products WHERE products.id = ?',[id])
  }

  static fetchAll() {
    return db.execute('SELECT * FROM products')
}

  static findById(id){
    return db.execute('SELECT * FROM products WHERE products.id = ?',[id]);
  }
};
