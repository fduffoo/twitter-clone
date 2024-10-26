# Twitter Clone - MERN Stack

A full-stack Twitter clone built using the MERN (MongoDB, Express.js, React, and Node.js) stack. This project includes both a frontend (React) and backend (Node.js and Express) to replicate core Twitter functionalities, including user authentication, posting, following, and real-time feed updates.

## Table of Contents
- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Scripts](#scripts)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- User authentication (sign up, login, and logout) using JWT
- Password encryption with bcrypt
- Profile customization and user bio
- Posting tweets and viewing feeds
- Follow/unfollow users functionality
- Real-time data fetching with React Query
- Notifications with React Toastify
- Redux for state management
- Form validation with Formik and Yup

## Technologies

### Backend
- **Node.js** - Server-side runtime
- **Express** - Backend framework
- **MongoDB** - NoSQL database, using Mongoose for data modeling
- **JWT (jsonwebtoken)** - Secure user authentication with JSON Web Tokens
- **bcryptjs** - Password encryption

### Frontend
- **React** - Frontend library for building user interfaces
- **React Router** - Client-side routing
- **Redux Toolkit** - State management
- **React Query** - Data fetching and caching
- **React Toastify** - Notification system
- **Styled Components** - CSS-in-JS styling solution
- **Formik** - Form handling and validation
- **Yup** - Validation schema for Formik

### Testing
- **Jest** - Testing framework for backend unit tests
- **Supertest** - HTTP assertions for Express.js
- **@testing-library/react** - Testing utilities for React components

## Installation

### Prerequisites
Ensure you have the following installed:
- Node.js
- npm
- MongoDB
