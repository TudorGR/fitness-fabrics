# 🏋️ Fitness Fabrics

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Site-brightgreen)](https://fitness-fabrics.vercel.app/)
[![Admin Dashboard](https://img.shields.io/badge/Admin%20Dashboard-Visit%20Panel-blue)](https://fitness-fabrics-admin.vercel.app/)

A modern, full-stack **eCommerce platform** specializing in fitness apparel and accessories. Built with the **MERN stack** (MongoDB, Express.js, React.js, Node.js), this application delivers a seamless shopping experience for fitness enthusiasts while providing comprehensive admin tools for business management.

## 📋 Table of Contents

- [🎯 Features](#-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [📱 Design](#-design)
- [🚀 Live Demo](#-live-demo)
- [⚡ Quick Start](#-quick-start)
- [📁 Project Structure](#-project-structure)
- [🔧 Configuration](#-configuration)
- [📝 API Documentation](#-api-documentation)
- [🤝 Contributing](#-contributing)

## 🎯 Features

### 🛒 Customer Features

- **Product Browsing**: Explore a comprehensive catalog of fitness products with high-quality images
- **Advanced Filtering**: Filter products by category, price range, size, and brand
- **Smart Search**: Find products quickly with intelligent search functionality
- **Product Variants**: Select from multiple product options (sizes, colors)
- **Shopping Cart**: Add, remove, and modify cart items with real-time updates
- **Secure Checkout**: Multiple payment options including Cash on Delivery and online payments
- **Order Tracking**: Monitor order status from placement to delivery
- **User Accounts**: Register, login, and manage personal profiles
- **Responsive Design**: Optimized experience across all devices

### 🔧 Admin Features

- **Product Management**: Add, edit, and delete products with image uploads
- **Inventory Control**: Track stock levels and manage product variants
- **Order Management**: View, process, and update order statuses
- **Customer Management**: Access customer information and order history
- **Analytics Dashboard**: Monitor sales performance and key metrics
- **Secure Authentication**: Protected admin routes with JWT tokens

## 📱 Design

### Mobile-First Responsive Design

This application is built with a mobile-first approach, ensuring optimal user experience across all devices.

![Mobile Design](https://github.com/user-attachments/assets/64572805-f61c-4325-848b-5a22080ca7c4)

**Key Design Features:**

- 📱 Fully responsive layout that adapts to any screen size
- 🎨 Modern, clean interface with intuitive navigation
- ⚡ Fast loading times with optimized images
- 🌗 Consistent design language across all components
- ♿ Accessibility-focused user experience

## 🚀 Live Demo

Experience the application in action:

| Platform               | URL                                                                           | Description                          |
| ---------------------- | ----------------------------------------------------------------------------- | ------------------------------------ |
| 🛒 **Customer Store**  | [fitness-fabrics.vercel.app](https://fitness-fabrics.vercel.app/)             | Browse and purchase fitness products |
| 🔧 **Admin Dashboard** | [fitness-fabrics-admin.vercel.app](https://fitness-fabrics-admin.vercel.app/) | Manage products and orders           |

## 🛠️ Tech Stack

### Frontend

- ![React](https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react) - User interface library
- ![Vite](https://img.shields.io/badge/Vite-Latest-646CFF?logo=vite) - Build tool and dev server
- ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-Latest-06B6D4?logo=tailwindcss) - Utility-first CSS framework
- ![React Router](https://img.shields.io/badge/React%20Router-7.0.2-CA4245?logo=reactrouter) - Client-side routing
- ![Axios](https://img.shields.io/badge/Axios-1.7.9-5A29E4?logo=axios) - HTTP client

### Backend

- ![Node.js](https://img.shields.io/badge/Node.js-Latest-339933?logo=node.js) - JavaScript runtime
- ![Express.js](https://img.shields.io/badge/Express.js-4.21.2-000000?logo=express) - Web framework
- ![MongoDB](https://img.shields.io/badge/MongoDB-Latest-47A248?logo=mongodb) - NoSQL database
- ![Mongoose](https://img.shields.io/badge/Mongoose-8.9.2-880000?logo=mongoose) - MongoDB ODM
- ![JWT](https://img.shields.io/badge/JWT-9.0.2-000000?logo=jsonwebtokens) - Authentication

### Cloud Services

- ![Cloudinary](https://img.shields.io/badge/Cloudinary-Latest-3448C5?logo=cloudinary) - Image storage and optimization
- ![Vercel](https://img.shields.io/badge/Vercel-Latest-000000?logo=vercel) - Deployment platform

### Development Tools

- ![ESLint](https://img.shields.io/badge/ESLint-Latest-4B32C3?logo=eslint) - Code linting
- ![Nodemon](https://img.shields.io/badge/Nodemon-3.1.9-76D04B?logo=nodemon) - Development server

## ⚡ Quick Start

### Prerequisites

Ensure you have the following installed on your system:

- ![Node.js](https://img.shields.io/badge/Node.js-≥16.0.0-339933?logo=node.js)
- ![MongoDB](https://img.shields.io/badge/MongoDB-≥4.4-47A248?logo=mongodb) (Local installation or MongoDB Atlas)
- ![Git](https://img.shields.io/badge/Git-Latest-F05032?logo=git)

### 🔧 Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/TudorGR/fitness-fabrics.git
   cd fitness-fabrics
   ```

2. **Install dependencies for all modules**

   ```bash
   # Install backend dependencies
   cd backend
   npm install

   # Install frontend dependencies
   cd ../frontend
   npm install

   # Install admin dependencies
   cd ../admin
   npm install
   ```

3. **Set up environment variables** (see [Configuration](#-configuration) section)

4. **Start the development servers**

   ```bash
   # Terminal 1: Start backend server
   cd backend
   npm start

   # Terminal 2: Start frontend development server
   cd frontend
   npm run dev

   # Terminal 3: Start admin development server (optional)
   cd admin
   npm run dev
   ```

5. **Access the application**
   - Frontend: http://localhost:5173
   - Admin Panel: http://localhost:5174 (if running admin locally)
   - Backend API: http://localhost:4000

## 📁 Project Structure

```
fitness-fabrics/
├── 📁 backend/              # Express.js server
│   ├── 📁 config/           # Database and service configurations
│   ├── 📁 controllers/      # Route controllers
│   ├── 📁 middleware/       # Custom middleware
│   ├── 📁 models/           # MongoDB models
│   ├── 📁 routes/           # API routes
│   └── 📄 server.js         # Entry point
├── 📁 frontend/             # React.js customer app
│   ├── 📁 src/
│   │   ├── 📁 components/   # Reusable components
│   │   ├── 📁 context/      # React context providers
│   │   ├── 📁 pages/        # Page components
│   │   └── 📁 assets/       # Static assets
│   └── 📄 vite.config.js    # Vite configuration
├── 📁 admin/                # React.js admin dashboard
│   ├── 📁 src/
│   │   ├── 📁 components/   # Admin components
│   │   └── 📁 pages/        # Admin pages
│   └── 📄 vite.config.js    # Vite configuration
└── 📄 README.md             # Project documentation
```

## 🔧 Configuration

### Environment Variables

Create `.env` files in the respective directories with the following variables:

#### 🔙 Backend `.env`

Create `/backend/.env`:

```env
# Database Configuration
MONGODB_URI="mongodb://localhost:27017/fitness-fabrics"  # or MongoDB Atlas URI

# Cloudinary Configuration (for image uploads)
CLOUDINARY_API="your_cloudinary_api_key"
CLOUDINARY_SECRET_KEY="your_cloudinary_secret_key"
CLOUDINARY_NAME="your_cloudinary_cloud_name"

# Authentication
JWT_SECRET="your_super_secure_jwt_secret_key"

# Admin Credentials
ADMIN_EMAIL="admin@fitnessfabrics.com"
ADMIN_PASSWORD="your_admin_password"
```

#### 🎨 Frontend `.env`

Create `/frontend/.env`:

```env
# Backend API URL
VITE_BACKEND_URL="http://localhost:4000"
```

#### 🔧 Admin `.env`

Create `/admin/.env`:

```env
# Backend API URL
VITE_BACKEND_URL="http://localhost:4000"
```

### 🔗 External Services Setup

#### MongoDB Setup

1. **Local MongoDB**: Install MongoDB Community Edition
2. **MongoDB Atlas** (Recommended for production):
   - Create account at [MongoDB Atlas](https://www.mongodb.com/atlas)
   - Create a new cluster
   - Get connection string and add to `MONGODB_URI`

#### Cloudinary Setup

1. Create account at [Cloudinary](https://cloudinary.com/)
2. Navigate to Dashboard
3. Copy API Key, API Secret, and Cloud Name
4. Add to backend `.env` file

## 📝 API Documentation

### Main API Endpoints

#### Authentication

- `POST /api/user/register` - Register new user
- `POST /api/user/login` - User login
- `POST /api/user/admin` - Admin login

#### Products

- `GET /api/product/list` - Get all products
- `POST /api/product/add` - Add new product (Admin only)
- `POST /api/product/remove` - Remove product (Admin only)

#### Cart & Orders

- `POST /api/cart/add` - Add item to cart
- `POST /api/cart/update` - Update cart item
- `POST /api/cart/get` - Get user cart
- `POST /api/order/place` - Place new order
- `POST /api/order/userorders` - Get user orders
- `GET /api/order/list` - List all orders (Admin only)

### Response Format

All API responses follow this structure:

```json
{
  "success": true,
  "message": "Operation successful",
  "data": { ... }
}
```

## 🚦 Development Scripts

### Backend

```bash
npm start        # Start production server
npm run server   # Start development server with nodemon
```

### Frontend & Admin

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## 🧪 Testing

### Running Tests

```bash
# Backend tests
cd backend
npm test

# Frontend tests
cd frontend
npm test

# Admin tests
cd admin
npm test
```

## 🚀 Deployment

### Production Deployment

#### Backend Deployment (Vercel)

1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy from main branch

#### Frontend Deployment (Vercel)

1. Build the project: `npm run build`
2. Deploy the `dist` folder to Vercel
3. Set `VITE_BACKEND_URL` to production API URL

### Environment-Specific Configurations

#### Production Environment Variables

```env
# Backend
MONGODB_URI="your_production_mongodb_atlas_uri"
VITE_BACKEND_URL="https://your-backend-domain.vercel.app"
```

## 🤝 Contributing

I welcome contributions! Here's how you can help:

### Development Workflow

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/amazing-feature`
3. **Commit** your changes: `git commit -m 'Add amazing feature'`
4. **Push** to the branch: `git push origin feature/amazing-feature`
5. **Open** a Pull Request

### Contribution Guidelines

- Follow the existing code style and conventions
- Write clear, descriptive commit messages
- Add tests for new features
- Update documentation as needed
- Ensure all tests pass before submitting PR

### Code Style

- Use ESLint configuration provided in the project
- Follow React best practices and hooks patterns
- Use meaningful variable and function names
- Add comments for complex logic

## 🐛 Troubleshooting

### Common Issues

#### Port Already in Use

```bash
# Kill process on port 4000 (backend)
lsof -ti:4000 | xargs kill -9

# Kill process on port 5173 (frontend)
lsof -ti:5173 | xargs kill -9
```

#### MongoDB Connection Issues

- Ensure MongoDB is running locally
- Check connection string format
- Verify network access for MongoDB Atlas

#### Environment Variables Not Loading

- Ensure `.env` files are in correct directories
- Restart development servers after adding variables
- Check variable names match exactly

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/TudorGR/fitness-fabrics/issues)
- **Discussions**: [GitHub Discussions](https://github.com/TudorGR/fitness-fabrics/discussions)
