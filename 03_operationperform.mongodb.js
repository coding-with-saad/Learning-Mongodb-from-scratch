// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use("Ecommerce");

db.products.find({name: "Wireless Mouse"});          
// find the product with the name "Wireless Mouse"


db.products.find().pretty();
//pretty() method formats the output in a more readable way



db.products.find({ price: { $gt: 20000 } });          
// price greater than 20000



db.products.find({price: {$gt:2000, $lt:5000}});          
// price greater than 2000 and less than 5000


db.products.find({price: {in: [1000, 2000, 3000]}});          
// price is either 1000, 2000, or 3000


db.products.find({$and:[{category: "Electronics"},{stock: {$lt: 50}}]});        
// category is "Electronic" and stock is less than 50


db.products.find({$or: [{ category: "Electronics" },{stock: { $lt: 50 }}]});    
// category is "Electronic" or stock is less than 50

db.products.find({ category: "Electronics" })          
// find all products in the "Electronics" category 


db.products.find({}, { name: 1, price: 1, _id: 0 })          
// find all products but only return the name and price fields, excluding the _id field 


db.products.find().sort({ price: -1 }).limit(2)          
//find all products, sort them by price in descending order, and return only the top 2 most expensive products
