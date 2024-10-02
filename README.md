
# URL Shortener App

A full-stack URL shortener application that allows users to shorten long URLs and manage their shortened links. The app provides user authentication, secure password management, and a clean user interface.

## Features


- User authentication (signup/signin) using JWT (JSON Web Token)
- Password hashing with bcrypt for secure storage
- URL shortening and redirection
- Store multiple URLs for each user
- Protected routes for URL management
- Responsive and modern UI with Shadcn UI

## Tech Stack

### Frontend
- **React**: JavaScript library for building user interfaces
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Shadcn UI**: Customizable component library for React

### Backend
- **Node.js**: JavaScript runtime environment
- **Express.js**: Fast, unopinionated web framework for Node.js
- **Mongoose**: MongoDB object modeling tool designed to work in an asynchronous environment
- **MongoDB Atlas**: Cloud-based MongoDB database
- **JWT**: Secure token-based user authentication
- **bcrypt**: Password hashing for security
## Project Structure

```bash
├── backend
│   ├── db          
│   ├── middleware  
│   ├── models      
│   ├── routes     
│   └── server.js   
├── frontend
│   ├── components  
│   ├── pages       
│   ├── App.js     
│   └── index.js    
└── README.md
```
## Installation and Setup

### Prerequisites
- Node.js installed on your machine
- MongoDB Atlas account

### Backend Setup
1. Clone the repository:

```bash
git clone https://github.com/faizanr27/url-shortner.git
cd url-shortner/backend

```
2. Install dependencies for both frontend and backend:

```bash
cd backend
npm install
cd ../frontend
npm install

```
3. Create a .env file in the backend folder with the following environment variables:
```bash
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/<dbname>
JWT_SECRET=your_jwt_secret
PORT=5000

```
4. Start the backend server:
```bash
cd backend
node server.js

```
5. Start the frontend application:
```bash
cd frontend
npm run dev


```
## Usage

- Create an account by signing up
- Log in to access your dashboard
- Shorten URLs and manage your shortened links
- Access protected routes like the URL dashboard only after logging in


## Future Enhancements

- Add analytics for shortened URLs
- Implement custom URL slugs
- Add email notifications for account-related activities
