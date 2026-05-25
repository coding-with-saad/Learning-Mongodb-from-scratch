# 🍃 The Ultimate MongoDB Learning Guide

Welcome to the comprehensive guide to MongoDB! This guide is designed for beginners and serves as a practical walkthrough of MongoDB's core features using an **Ecommerce** project as our primary example.

---

## 📌 Table of Contents
1. [Introduction to MongoDB](#1-introduction-to-mongodb)
2. [Inserting Data (Create)](#2-inserting-data-create)
3. [Reading Data (Read)](#3-reading-data-read)
4. [Updating Data (Update)](#4-updating-data-update)
5. [Deleting Data (Delete)](#5-deleting-data-delete)
6. [Aggregation Pipeline (Data Analysis)](#6-aggregation-pipeline-data-analysis)
7. [Indexes (Performance Optimization)](#7-indexes-performance-optimization)

---

## 1. Introduction to MongoDB
MongoDB is a **NoSQL database** that stores data in flexible, JSON-like documents. Unlike traditional SQL databases with fixed tables and rows, MongoDB allows for a more dynamic and scalable data structure.

### Key Concepts:
- **Database**: A container for collections.
- **Collection**: A group of MongoDB documents (similar to a table in SQL).
- **Document**: A record in a collection (similar to a row in SQL).

---

## 2. Inserting Data (Create)
The first step in any database is adding data. In MongoDB, we use `insertOne()` for a single document or `insertMany()` for multiple documents.

### 💻 Code Example: Populating Products and Orders
```javascript
// Select Database
use("Ecommerce");

// Insert Multiple Products
db.products.insertMany([
    {
        name: "Wireless Mouse",
        price: 799,
        category: "Electronics",
        stock: 120,
        ratings: 4.5,
        tags: ["computer", "accessory", "wireless"],
        createdAt: new Date()
    },
    {
        name: "Mechanical Keyboard",
        price: 2499,
        category: "Electronics",
        stock: 80,
        ratings: 4.8,
        tags: ["keyboard", "mechanical"],
        createdAt: new Date()
    },
    {
        name: "Gaming Laptop",
        price: 85999,
        category: "Computers",
        stock: 30,
        ratings: 4.6,
        tags: ["gaming", "laptop"],
        createdAt: new Date()
    }
]);

// Insert Orders
db.orders.insertMany([
    {
        orderId: "ORD001",
        user: "John Doe",
        products: [
            { name: "Wireless Mouse", quantity: 1, price: 799 },
            { name: "Mechanical Keyboard", quantity: 1, price: 2499 }
        ],
        total: 3298,
        status: "Delivered",
        createdAt: new Date()
    }
]);
```

### ❓ Q&A: Inserting Data
**Q: What is the benefit of using `insertMany` over multiple `insertOne` calls?**
**A:** `insertMany` is much more efficient because it sends all the documents to the server in a single request, reducing network overhead.

---

## 3. Reading Data (Read)
Finding your data is essential. MongoDB provides powerful query operators like `$gt` (greater than), `$lt` (less than), and logical operators like `$and` and `$or`.

### 💻 Code Example: Querying the Ecommerce Database
```javascript
use("Ecommerce");

// 1. Find a specific product
db.products.find({ name: "Wireless Mouse" });

// 2. Find products with price greater than 20,000
db.products.find({ price: { $gt: 20000 } });

// 3. Find products in a price range (2000 to 5000)
db.products.find({ price: { $gt: 2000, $lt: 5000 } });

// 4. Logical AND: Electronics category AND low stock
db.products.find({
    $and: [
        { category: "Electronics" },
        { stock: { $lt: 50 } }
    ]
});

// 5. Projection: Return only name and price, exclude _id
db.products.find({}, { name: 1, price: 1, _id: 0 });

// 6. Sorting and Limiting: Top 2 most expensive products
db.products.find().sort({ price: -1 }).limit(2);
```

---

## 4. Updating Data (Update)
Data changes over time. We use operators like `$set` to change values, `$inc` to increment numbers, and `$push` to add items to arrays.

### 💻 Code Example: Modifying Products
```javascript
use("Ecommerce");

// 1. Update a single field ($set)
db.products.updateOne(
    { name: "Wireless Mouse" },
    { $set: { price: 899 } }
);

// 2. Increment a value ($inc)
db.products.updateMany(
    { category: "Electronics" },
    { $inc: { stock: 10 } }
);

// 3. Add to an array ($push)
db.products.updateOne(
    { name: "Wireless Mouse" },
    { $push: { tags: "new" } }
);

// 4. Update a specific element in an array ($)
db.products.updateOne(
    { name: "Wireless Mouse", tags: "new" },
    { $set: { "tags.$": "bluetooth" } }
);
```

### ❓ Q&A: Updating Data
**Q: What does the `$` symbol mean in update operators?**
**A:** The `$` symbol is a prefix for operators. It tells MongoDB that you aren't trying to set a field named "set", but rather you are using the *Set Command* to modify the document's data.

---

## 5. Deleting Data (Delete)
Removing data is straightforward but should be done carefully.

### 💻 Code Example: Cleaning Up
```javascript
use("Ecommerce");

// Delete a single document
db.products.deleteOne({ name: "Mechanical Keyboard" });

// Delete multiple documents based on a condition
db.orders.deleteMany({ status: "Delivered" });
```

---

## 6. Aggregation Pipeline (Data Analysis)
The Aggregation Pipeline is MongoDB's "Superpower." It allows you to process data in stages, like an assembly line.

### 💻 Code Example: Sales Analysis
```javascript
use("Ecommerce");

// Calculate total sales per category
db.sales.aggregate([
    {
        $group: {
            _id: "$category",
            totalSales: { $sum: { $multiply: ["$price", "$quantity"] } }
        }
    },
    { $sort: { totalSales: -1 } }
]);

// Filter for Fruits and only show name and price
db.sales.aggregate([
    { $match: { category: "Fruit" } },
    { $project: { _id: 0, item: 1, price: 1 } }
]);
```

### ❓ Q&A: Aggregation
**Q: Is the aggregation pipeline faster than processing data in JavaScript or Python?**
**A:** Yes! The aggregation pipeline runs directly on the MongoDB server. It takes advantage of server-side optimizations and indexes. Processing data in code requires fetching all the data first, which is slow and memory-intensive for large datasets.

---

## 7. Indexes (Performance Optimization)
Indexes are like the index at the back of a book. They allow MongoDB to find documents without scanning the entire collection.

### 💻 Code Example: Managing Indexes
```javascript
use("Ecommerce");

// 1. View existing indexes
db.sales.getIndexes();

// 2. Create an index on 'quantity' to speed up queries
db.sales.createIndex({ quantity: 1 });
```

### ❓ Q&A: Indexes
**Q: Why don't we create indexes on every single field?**
**A:** Indexes come with a cost. While they make **Read** operations much faster, they make **Write** operations (insert, update, delete) slower because the index must be updated every time the data changes. They also consume extra disk space.

**Q: What is the difference between a Single Field and a Compound Index?**
**A:**
- **Single Field**: Created on one field (e.g., `price`). Good for queries filtering by price.
- **Compound Index**: Created on multiple fields (e.g., `{ category: 1, price: -1 }`). Perfect for queries that filter by category and then sort by price.

---

*Happy Learning! This guide was generated to help developers master MongoDB fundamentals.*
