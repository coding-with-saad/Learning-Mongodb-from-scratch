use("Ecommerce");

//indexes in mongodb are data structures that improve the speed of data retrieval operations on a collection. They work by creating a sorted representation of the data based on the indexed fields, allowing MongoDB to quickly locate and access the relevant documents without having to scan the entire collection. Indexes can be created on one or more fields, and they can significantly enhance query performance, especially for large datasets. However, it's important to use indexes judiciously, as they can consume additional storage space and may impact write performance due to the need to update the index whenever documents are inserted, updated, or deleted.

db.sales.find();
//shows all the documents in the sales collection


db.sales.getIndexes();
//shows all the indexes in the sales collection


db.sales.createIndex({ quantity: 1 });
//creates an index on the quantity field in ascending order. This index will allow MongoDB to quickly locate documents based on the quantity field, improving the performance of queries that filter or sort by this field.


// Question no 1: Why did we create an index over quantity?
// because we want to improve the performance of queries that filter or sort by the quantity field. By creating an index on the quantity field, MongoDB can quickly locate and access the relevant documents without having to scan the entire collection, which can significantly enhance query performance, especially for large datasets.


// Question no 2: In start We should always create indexes so that we can retrieve data quickly?
// Not necessarily. While indexes can significantly improve query performance, they also come with trade-offs. Indexes consume additional storage space and can impact write performance because MongoDB needs to update the index whenever documents are inserted, updated, or deleted. Therefore, it's important to create indexes judiciously based on the specific query patterns and access patterns of your application. It's a good practice to analyze your queries and identify which fields are frequently used for filtering or sorting before deciding which indexes to create.

// Read opereation are fast but write operation are slow because of indexes because whenever we insert, update, or delete a document, MongoDB needs to update the corresponding indexes to reflect the changes. This additional overhead can lead to slower write performance, especially if there are multiple indexes on the collection. Therefore, while indexes can improve read performance, they can also slow down write operations, and it's important to strike a balance based on the specific needs of your application.



// Question no 3: What is the difference between single field index and compound index in mongodb?

// A single field index in MongoDB is an index that is created on a single field of a collection. It allows for efficient querying and sorting based on that specific field. For example, if you create an index on the "quantity" field, MongoDB can quickly locate documents based on the values in that field.
// A compound index in MongoDB is an index that is created on multiple fields of a collection. It allows for efficient querying and sorting based on the combination of those fields. For example, if you create a compound index on the "category" and "quantity" fields, MongoDB can quickly locate documents based on the values in both fields.

