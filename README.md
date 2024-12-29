# Ecommerce website

Fitness Fabrics is an eCommerce website built with the MERN stack (MongoDB, Express JS, React JS, Node JS). This project allows users to explore and purchase fitness products, with functionalities such as product filtering, adding products to the cart, and online ordering. It also includes an admin dashboard for managing products and orders.

## Features

- **User Features:**
  - Browse and explore various fitness products.
  - Filter and sort products based on different criteria.
  - Add products to the cart, including selecting product variants like size.
  - Place orders by providing a delivery address and choosing a payment method (Cash on Delivery or Online Payment).

- **Admin Features:**
  - Upload and delete products.
  - View and manage all orders.
  - Access and manage products stored in MongoDB.
 
## Design

### Mobile Design
![Mobile Design](https://github.com/user-attachments/assets/64572805-f61c-4325-848b-5a22080ca7c4)

## Tech Stack

- **Frontend:**
  - React JS
  - Vite
- **Backend:**
  - Express JS
  - Node JS
- **Database:**
  - MongoDB
- **Deployment:**
  - Vercel

## Deployment

- [User Website](https://fitness-fabrics.vercel.app/)
- [Admin Dashboard](https://fitness-fabrics-admin.vercel.app/)

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Environment Variables

Create the following `.env` files in their respective directories:

#### Backend `.env`

```
MONGODB_URI="..."
CLOUDINARY_API="..."
CLOUDINARY_SECRET_KEY="..."
CLOUDINARY_NAME="..."
JWT_SECRET="..."
ADMIN_EMAIL="..."
ADMIN_PASSWORD="..."
```

#### Frontend `.env` / Admin `.env`

```
VITE_BACKEND_URL="http://localhost:4000"
```

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/TudorGR/fitness-fabrics.git
   ```
2. Navigate to the project directory:
   ```
   cd fitness-fabrics
   ```
3. Install dependencies for both frontend and backend:
   ```
   npm install
   ```
### Running the Application

1. Start the backend server:
   ```
   cd backend
   npm start
   ```
2. Start the frontend server:
   ```
   cd frontend
   npm run dev
   ```
3. Open your browser and go to `http://localhost:5173/` to view the application.
