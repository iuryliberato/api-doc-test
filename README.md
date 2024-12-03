# **API Test for Creating Documentation**

This project demonstrates how to build automated API documentation using Swagger and integrate it with endpoints for creating and managing resources.

---

## **How to Run the API**

Follow these steps to set up and run the API locally:

### **1. Clone the Repository**
Clone the repository to your local machine:

```bash
git clone <repository-url>
cd <repository-directory>
```
### **2. Open Project**
```bash
code .
```
### **3. Install Dependencies**
```bash
npm install
npm install zod@~3.5.1
npm install ts-node --save-dev
npm install typescript --save-dev
```
### **4. Start Server**
```bash
npm run dev
```
### **4. Access The Documentation**
```bash
http://localhost:3000/api-docs
)
```

## **Available Endpoints**

### **1. Users Endpoint**
- **Path**: `/users`
- **Method**: `POST`
- **Description**: Create a new user with the following fields:
  - `username` (string) – **Optional**
  - `email` (string) – **Required**
  - `password` (string) – *Optional*

---

### **2. Books Endpoint**
- **Path**: `/books`
- **Method**: `POST`
- **Description**: Add a new book entry with the following fields:
  - `book` (string) – **Required**
  - `writer` (string) – **Required**
  - `year` (number) – *Optional*
