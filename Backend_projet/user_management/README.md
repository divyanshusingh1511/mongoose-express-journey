### **User Management System with Mongoose**

Create a **Node.js application** that implements a **user management system** using **MongoDB** and **Mongoose**.

---

### Database Configuration
**Database Name**: `user_management_db`  

```
MONGODB_URL=mongodb+srv://username:password@cluster.mongodb.net/user_management_db
```

---

### **User Schema**

Define a **User** schema with the following fields:

* **name** (String, required) – The name of the user.
* **email** (String, required, unique) – The user's email address.
* **password** (String, required) – The user's password.
* **role** (String, default: 'user') – The user's role (either "user", "admin", or "moderator").
* **isActive** (Boolean, default: true) – Whether the user is active or not.
* **createdAt** (Date, default: Date.now) – The timestamp when the user is created.

---

### **Controller and Endpoint**

1. **POST /users/add-user** – Create a new user

   * **Functionality**:

     * Accepts the user's details in the request body.
     * Validates input and creates a new user in the database.
     * Returns the created user on success with status 201.
     * Returns an error message with status 400 on validation failure.

   * **Request Body Example**:

     ```json
     {
       "name": "John Doe",
       "email": "john.doe@example.com",
       "password": "SecurePass123",
       "role": "admin",
       "isActive": true
     }
     ```

   * **Response (Success)**:

     ```json
     {
       "_id": "507f1f77bcf86cd799439011",
       "name": "John Doe",
       "email": "john.doe@example.com",
       "password": "SecurePass123",
       "role": "admin",
       "isActive": true,
       "createdAt": "2024-01-15T10:30:00.000Z"
     }
     ```

   * **Response (Error - Missing Required Fields)**:

     ```json
     {
       "message": "All required fields must be filled"
     }
     ```

   * **Response (Error - Invalid Email or Password)**:

     ```json
     {
       "message": "Email must be unique and valid. Password must meet the criteria."
     }
     ```

---

### **Folder Structure**

```
app/
├── server.js               
├── .env                    
├── models/
│   └── User.js            
├── controllers/
│   └── userController.js   
└── routes/
    └── userRoutes.js       
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
 
