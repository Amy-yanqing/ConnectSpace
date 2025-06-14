# Connect Space

 A modern full-stack social media platform built with React, Node.js, and MongoDB

## Links

- **Repository**: https://github.com/Amy-yanqing/ConnectSpace
- **Live Demo**: https://connectspace-cvg8.onrender.com/

## Demo Account

For testing purposes, you can use the following demo account:
- **Username**: Deniz
- **Password**: 123456

*This demo account has sample posts and data to showcase the platform features.*

## Screenshots

<img src="https://github.com/user-attachments/assets/7b2fac65-27a2-49e7-b44b-5c2832ef143b" alt="Homepage Feed" width="700">

<img src="https://github.com/user-attachments/assets/82c66557-d038-4349-aaba-01429cb8fb64" alt="User Profile" width="700">

<div align="center">
  <img src="https://github.com/user-attachments/assets/3cc8827c-06d0-4682-8a0c-52308066c4c4" alt="Mobile Interface" width="700">
</div>

## Features

- **JWT Authentication** - Secure user registration and login
- **Create & Share Posts** - Publish text and image content
- **Social Interactions** - Like, comment, and engage with posts
- **Follow System** - Follow users and view personalized feeds
- **Real-time Notifications** - Get notified of likes and comments
- **Profile Management** - Edit profile, avatar, and cover images
- **Image Upload** - Cloud storage with Cloudinary
- **Responsive Design** - Mobile-friendly interface

## Tech Stack

**Frontend:** React 19, Vite, Tailwind CSS, React Query, React Router  
**Backend:** Node.js, Express 5, MongoDB, Mongoose  
**Authentication:** JWT, bcrypt  
**Image Storage:** Cloudinary  
**Deployment:** Production-ready with static file serving

## Quick Start

1. **Clone & Install**
   ```bash
   git clone https://github.com/Amy-yanqing/ConnectSpace.git
   cd ConnectSpace
   npm install  # Install all dependencies
   ```

2. **Environment Setup**
   ```env
   NODE_ENV=development
   PORT=5000
   MONGODB_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret
   ```

3. **Run the Application**
   ```bash
   # Development
   npm run dev
   
   # Production
   npm run build && npm start
   ```

4. **Access:** Open `http://localhost:5000`

## Project Structure

```
ConnectSpace/
├── backend/
│   ├── controllers/    # Business logic
│   ├── models/        # Database schemas
│   ├── routes/        # API endpoints
│   └── middleware/    # Authentication & validation
├── frontend/src/
│   ├── components/    # React components
│   ├── pages/         # Page components
│   └── hooks/         # Custom hooks
└── server.js          # Express server
```

## Key Features Implemented

- **User Authentication**: Secure registration/login with JWT
- **Post Management**: CRUD operations with image upload
- **Social Features**: Like, comment, follow/unfollow functionality
- **Personalized Feed**: View all posts or following-only feed
- **User Discovery**: Smart user recommendation system
- **Real-time Notifications**: Instant updates for user interactions
- **Profile Customization**: Edit profile info, avatar, and cover images

## API Endpoints

- `/api/auth` - User registration, login, logout
- `/api/users` - User management, follow/unfollow, recommendations
- `/api/posts` - Post creation, deletion, likes, comments
- `/api/notifications` - Notification management

## Deployment

This project is production-ready and deployed on Render. The build process automatically handles frontend compilation and serves static files. The live demo is available at: https://connectspace-cvg8.onrender.com/

## Technical Highlights

- **Full-stack JavaScript** application with modern development practices
- **JWT-based authentication** with secure password hashing
- **React Query** for efficient data fetching and caching
- **RESTful API** design following industry standards
- **Cloud image storage** with Cloudinary integration
- **Responsive design** using Tailwind CSS
- **Production deployment** with live demo available



