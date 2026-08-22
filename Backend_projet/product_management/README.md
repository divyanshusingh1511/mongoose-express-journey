### **Product Inventory Management API**

Create a Node.js application for managing a product inventory system using **MongoDB** and **Mongoose**. Implement functionality to **add products** to the inventory with input validation and ensure proper error handling for invalid data.

---

#### Product Schema 

The schema should include the following fields:

- name: A string field that stores the product’s name. This field is required.

- category: A string field that represents the category of the product (e.g., Electronics, Clothing). This field is required.

- price: A number field that represents the price of the product. This field is required.

- description: A string field to provide additional details about the product. This field is optional.

- stock: A number field that represents how many units of the product are available. This field is required.

- createdAt: A date field that stores the timestamp when the product was created. It should default to the current date and time.

---

#### Database Configuration

Database Name: `product_inventory_db`

```
MONGODB_URL=mongodb+srv://username:password@cluster.mongodb.net/product_inventory_db
```

---

### **API Endpoints**

#### **1. POST `/products/add-product`** - Create a New Product

* **Description**: Adds a new product to the inventory with input validation and returns appropriate success or error messages.

* **Validation Logic**:

  * **Required Fields**:

    * **name** (String): Product name must be provided.
    * **category** (String): Product category must be one of the following: `["Electronics", "Books", "Clothing", "Furniture"]`.
    * **price** (Number): Price must be a positive number.
    * **stock** (Number): Stock must be a positive integer.
  * **Response on Missing Fields**:

    * If any required fields (`name`, `category`, `price`, `stock`) are missing, return status 400 with message: `"Missing required fields"`.
  * **Response on Invalid Data**:

    * If `price` is not a number or `stock` is not a positive integer, return status 400 with appropriate error messages.
  * **Successful Product Creation**:

    * On successful product creation, return status 201 with the product details.

* **Request Body**:

  ```json
  {
    "name": "Wireless Mouse",
    "category": "Electronics",
    "price": 29.99,
    "description": "A high-quality wireless mouse",
    "stock": 150
  }
  ```

* **Response (Success)**:

  ```json
  {
    "_id": "60d21b2f5b4c9bca5f7bcf8d",
    "name": "Wireless Mouse",
    "category": "Electronics",
    "price": 29.99,
    "description": "A high-quality wireless mouse",
    "stock": 150,
    "createdAt": "2021-06-30T14:59:15.000Z",
    "__v": 0
  }
  ```

* **Response (Error - Missing Fields)**:

  ```json
  {
    "message": "Missing required fields"
  }
  ```

* **Response (Error - Invalid Price)**:

  ```json
  {
    "message": "Price must be a valid number"
  }
  ```

* **Response (Error - Invalid Stock)**:

  ```json
  {
    "message": "Stock must be a positive integer"
  }
  ```

---

### **Folder Structure**

```
app/
├── server.js                
├── .env                     
├── models/
│   └── Product.js           
├── controllers/
│   └── productController.js 
└── routes/
    └── productRoutes.js     
```

<MultiLineNote>

- Export the express instance using the default export syntax.

- Follow the exact folder structure and file names as specified to ensure consistency.

- Implement the exact API endpoints mentioned in the description.

- The server must run on port 3000 as specified.

- Use the exact database name provided in the requirements (e.g., authentication_system_db).

Any deviation from the specified paths, endpoints, port, or database name will lead to test case failures.
</MultiLineNote>
