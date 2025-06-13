# Connect Space

> A modern full-stack social media platform built with React, Node.js, and MongoDB

- **Repository**: https://github.com/Amy-yanqing/ConnectSpace
- **Live Demo**: https://connectspace-cvg8.onrender.com/

![image](https://github.com/user-attachments/assets/3c2e989b-d11d-4ac9-ad93-0fbbf7a21dda) ![image](https://github.com/user-attachments/assets/82c66557-d038-4349-aaba-01429cb8fb64)


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

## Testing

**Test Framework:** [To be added]

**Test Coverage:** [To be updated]

- **Unit Tests**: 
- **Integration Tests**: 
- **Component Tests**:

## Quick Start

1. **Clone & Install**
   ```bash
   git clone https://github.com/Amy-yanqing/ConnectSpace.git
   cd connect-space
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
connect-space/
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

This project is production-ready and can be deployed to platforms like Heroku, Railway, or Render. The build process automatically handles frontend compilation and serves static files.

## Technical Highlights

- **Full-stack JavaScript** application with modern development practices
- **JWT-based authentication** with secure password hashing
- **React Query** for efficient data fetching and caching
- **RESTful API** design following industry standards
- **Cloud image storage** with Cloudinary integration
- **Responsive design** using Tailwind CSS

