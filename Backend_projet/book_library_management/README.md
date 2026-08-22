### **Book Library Management System**

Create a RESTful API for managing books in a library system using **Express**, **MongoDB**, and **Mongoose**.

---

### **Book Schema**

Create a **Book** model with the following fields:

* **bookId** (String, required, unique): A unique identifier for each book, typically used to track the book in the library.
* **title** (String, required): The title of the book (e.g., "The Great Gatsby").
* **author** (String, required): The author of the book (e.g., "F. Scott Fitzgerald").
* **isbn** (String, required, unique): The ISBN (International Standard Book Number) of the book, which uniquely identifies the book worldwide.
* **price** (Number, required): The price of the book in the library's currency (e.g., 12.99).
* **stock** (Number, required): The number of copies of the book currently available in the library (e.g., 15).
* **createdAt** (Date, default: Date.now): The date when the book entry was created in the system, automatically set to the current date when the book is added.

---

### Database Configuration
**Database Name**: `library_management_db`  

```
MONGODB_URL=mongodb+srv://username:password@cluster.mongodb.net/library_management_db
```


---

### **API Endpoints**

#### **1. POST /books** - Create a New Book

* **Description**: Adds a new book to the library.
* **Request Body**:

  ```json
  {
    "bookId": "BOOK-123456",
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "isbn": "978-0-7432-7356-5",
    "price": 12.99,
    "stock": 15
  }
  ```
* **Response (Success)**:

  ```json
  {
    "_id": "507f1f77bcf86cd799439011",
    "bookId": "BOOK-123456",
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "isbn": "978-0-7432-7356-5",
    "price": 12.99,
    "stock": 15,
    "createdAt": "2024-01-15T10:30:00.000Z"
  }
  ```
* **Response (Error)**:

  ```json
  {
    "message": "Error message here"
  }
  ```

#### **2. GET /books** - Get All Books

* **Description**: Retrieves all books in the library.
* **Response (Success)**:

  ```json
  {
    "count": 2,
    "books": [
      {
        "_id": "507f1f77bcf86cd799439011",
        "bookId": "BOOK-123456",
        "title": "The Great Gatsby",
        "author": "F. Scott Fitzgerald",
        "isbn": "978-0-7432-7356-5",
        "price": 12.99,
        "stock": 15,
        "createdAt": "2024-01-15T10:30:00.000Z"
      },
      {
        "_id": "507f1f77bcf86cd799439012",
        "bookId": "BOOK-654321",
        "title": "1984",
        "author": "George Orwell",
        "isbn": "978-0-452-28423-4",
        "price": 15.99,
        "stock": 20,
        "createdAt": "2024-01-16T10:30:00.000Z"
      }
    ]
  }
  ```

#### **3. GET /books/\:id** - Get a Single Book by ID

* **Description**: Retrieves a book by its bookId
* **Request**:

  ```
  GET /books/BOOK-123456
  ```
* **Response (Success)**:

  ```json
  {
    "_id": "507f1f77bcf86cd799439011",
    "bookId": "BOOK-123456",
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "isbn": "978-0-7432-7356-5",
    "price": 12.99,
    "stock": 15,
    "createdAt": "2024-01-15T10:30:00.000Z"
  }
  ```
* **Response (Error)**:

  ```json
  {
    "message": "Book not found"
  }
  ```

#### **4. PUT /books/\:id** - Update Book Details

* **Description**: Updates an existing book's details.
* **Request**:

  ```json
  {
    "title": "The Great Gatsby (Updated)",
    "price": 14.99,
    "stock": 12
  }
  ```
* **Response (Success)**:

  ```json
  {
    "_id": "507f1f77bcf86cd799439011",
    "bookId": "BOOK-123456",
    "title": "The Great Gatsby (Updated)",
    "author": "F. Scott Fitzgerald",
    "isbn": "978-0-7432-7356-5",
    "price": 14.99,
    "stock": 12,
    "createdAt": "2024-01-15T10:30:00.000Z"
  }
  ```
* **Response (Error)**:

  ```json
  {
    "message": "Book not found"
  }
  ```

#### **5. DELETE /books/\:id** - Delete a Book

* **Description**: Deletes a book by its MongoDB ID.
* **Request**:

  ```
  DELETE /books/507f1f77bcf86cd799439011
  ```
* **Response (Success)**:

  ```json
  {
    "message": "Book deleted successfully"
  }
  ```
* **Response (Error)**:

  ```json
  {
    "message": "Book not found"
  }
  ```

---

### **Folder Structure**

```
app/
├── server.js              
├── .env                   
├── models/
│   └── Book.js            
├── controllers/
│   └── bookController.js  
└── routes/
    └── bookRoutes.js      
```

<MultiLineNote>

- Export the express instance using the default export syntax.

- Follow the exact folder structure and file names as specified to ensure consistency.

- Implement the exact API endpoints mentioned in the description.

- The server must run on port 3000 as specified.

- Use the exact database name provided in the requirements (e.g., authentication_system_db).

Any deviation from the specified paths, endpoints, port, or database name will lead to test case failures.
</MultiLineNote>



---
 
**Project done by Divyanshu Singh**
 
