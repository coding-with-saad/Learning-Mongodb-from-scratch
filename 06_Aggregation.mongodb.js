use("Ecommerce");

// db.sales.insertMany([
//     { _id: 1, item: "Apple", price: 10, quantity: 5, category: "Fruit" },
//     { _id: 2, item: "Banana", price: 5, quantity: 10, category: "Fruit" },
//     { _id: 3, item: "Carrot", price: 8, quantity: 6, category: "Vegetable" },
//     { _id: 4, item: "Tomato", price: 6, quantity: 8, category: "Vegetable" },
//     { _id: 5, item: "Mango", price: 15, quantity: 3, category: "Fruit" }
// ]);


// what is aggregation pipeline in MongoDB?

// Aggregation pipeline in MongoDB is a powerful framework for data aggregation and transformation. It allows you to process and analyze data in a collection by applying a series of stages, each performing a specific operation on the data. The stages are executed in sequence, and the output of one stage serves as the input for the next stage.



// db.sales.aggregate([
//     { $match: { category: "Fruit" } },
//     { $project: { _id: 0, item: 1, price: 1 } }
// ]);
// In this example, the $match stage filters the documents to include only those where the category is "Fruit". The $project stage then reshapes the output to include only the item and price fields, while excluding the _id field.

// db.sales.aggregate([
//     { $project: { _id: 0, item: 1, total: { $multiply: ["$price", "$quantity"] } } }
// ]);
// In this example, the $project stage creates a new field called total, which is calculated by multiplying the price and quantity fields for each document. The output will include the item and the calculated total for each sale, while excluding the _id field.


// db.sales.aggregate([
//     { $group: {_id: "$category",
//             totalSales: { $sum: { $multiply: ["$price", "$quantity"] } }
//         }
//     }   
// ]);
// In this example, the $group stage groups the documents by the category field. For each group, it calculates the total sales by summing the product of price and quantity for all documents in that group. The output will include the category and the total sales for each category.    


// db.sales.aggregate([
//     {
//         $group: {
//             _id: "$category",
//             totalSales: { $sum: { $multiply: ["$price", "$quantity"] } }
//         }
//     },
//     { $sort: { totalSales: -1 } }
// ]);
// In this example, the $group stage groups the documents by the category field and calculates the total sales for each category as before. The $sort stage then sorts the output in descending order based on the totalSales field, allowing you to see which category has the highest total sales at the top of the results.



//in mongodb aggregation pipeline is a powerful framework for data aggregation and transformation. It allows you to process and analyze data in a collection by applying a series of stages, each performing a specific operation on the data. The stages are executed in sequence, and the output of one stage serves as the input for the next stage.

// in mongodb the query execution is fast as compare to when we write a simple javascript and python code so that people uses this



// db.sales.aggregate([
//     {$group: {_id: "$category"}
//       }
// ])
//shows all category in sales collection without duplicates because of group stage and _id is used to group the documents by the category field. The output will include the unique categories present in the sales collection.

