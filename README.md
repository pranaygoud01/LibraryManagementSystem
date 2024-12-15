# Library Management System

## Description

The **Library Management System** is a backend API built using **Node.js** and **Express.js**. It manages user accounts (Readers and Authors), books in the library, and supports operations such as borrowing and returning books. This system is designed to showcase efficient user authentication using JWT tokens and CRUD operations for books and users.

---

## Features

### User Management
- **Readers and Authors** can create accounts.
- Supports login functionality with JWT token generation (valid for 15 days).

### Book Management
- Authors can add books.
- Readers can borrow books.

---

## Installation and Setup

### Prerequisites
- Node.js (v14+)
- MongoDB

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/library-management-system.git
   cd library-management-system
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory and add the following:
   ```env
   PORT=5000
   MONGO_URI=your_mongo_connection_string
   JWT_SECRET=your_secret_key
   ```
4. Start the server:
   ```bash
   npm start
   ```
5. Use Postman or another API client to test the endpoints.

---

## Endpoints

### User Management

| Endpoint                | Method | Description                                   |
|-------------------------|--------|-----------------------------------------------|
| `/users/register`       | POST   | Register a new user account (Reader/Author). |
| `/users/login`          | POST   | Authenticate user and return a session token.|

### Book Management

| Endpoint                | Method | Description                                   |
|-------------------------|--------|-----------------------------------------------|
| `/books/add`            | POST   | Add a new book (Authors only).               |
| `/books/borrow/:id`     | POST   | Borrow a book (Readers only).                |

---

## Testing

### Postman Collection
You can import the provided Postman collection `LibraryManagement.postman_collection.json` to test all the endpoints.

### Manual Testing
- **Screenshots** of API requests and responses are included in the `screenshots/` folder.
- Ensure the server is running before testing.

---

---

## Screenshots
- Example test cases for each endpoint are included in the `screenshots/` directory.

---

## Contributing
Feel free to fork the repository and submit pull requests for improvements.

---

## License
This project is licensed under the MIT License.
