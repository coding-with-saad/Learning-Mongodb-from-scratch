// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use ("Ecommerce");
// db.products.updateOne(
//     { name: "Wireless Mouse" },
//     { $set: { price: 899 } }
// )


// In MongoDB, the $ symbol is used as a prefix for operators(like $set, $inc, or $push).It tells the database exactly how you want to modify your data.


// db.products.updateMany(
//     { category: "Electronics" },
//     { $inc: { stock: 10 } }
// )
// $inc operator is used to increment the value of a field by a specified amount. In this case, it increases the stock of all products in the "Electronics" category by 10.


// db.products.updateOne(
//     { name: "Wireless Mouse" },
//     { $push: { tags: "new" } }
// )
// $push operator is used to add a value to an array field. In this case, it adds the tag "new" to the tags array of the product with the name "Wireless Mouse".


// db.products.updateOne(
//     { name: "Wireless Mouse", tags: "new" },
//     { $set: { "tags.$": "bluetooth" } }
// );
// In this example, the query part { name: "Wireless Mouse", tags: "new" } finds the document where the name is "Wireless Mouse" and the tags array contains the value "new". The update part { $set: { "tags.$": "bluetooth" } } uses the $set operator to update the first occurrence of "new" in the tags array to "bluetooth".


