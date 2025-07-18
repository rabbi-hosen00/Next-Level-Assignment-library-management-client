 Minimal Library Management System 📚

[![Live Demo](https://img.shields.io/badge/Live-Demo-blue)](https://your-live-demo-url.com)

---

## Live Demo

Try the fully functional live application here:  
🔗 [https://your-live-demo-url.com](https://your-live-demo-url.com)

---

## Project Overview

The **Minimal Library Management System** is a React + Redux Toolkit Query + TypeScript based client application designed to manage books and borrowing operations. It interfaces with a Node.js and Express.js backend powered by MongoDB. This system facilitates the viewing, creation, updating, deletion, and borrowing of books — all without authentication or complex integrations, focusing on essential library functionalities.

---

## Features

- **Public Access:** No login/authentication required.
- **Book Management:**
  - View all books in a table with details (Title, Author, Genre, ISBN, Copies, Availability).
  - Add new books with full details.
  - Edit existing book information.
  - Delete books with confirmation.
- **Borrow Management:**
  - Borrow books via a form ensuring available copies.
  - Automatic update of book availability based on copies.
  - Borrow summary displaying aggregated borrowed quantities.
- **Responsive UI:** Adaptable layout for desktop, tablet, and mobile.
- **Optimistic UI Updates:** (Optional bonus)
- **Toast Notifications:** User-friendly success/error messages.
- **Type-Safe Forms:** Form validations with TypeScript safety.

---

## Tech Stack

| Layer          | Technology                  |
| -------------- | ---------------------------|
| Frontend       | React, TypeScript, Tailwind CSS |
| State Mgmt     | Redux Toolkit, RTK Query    |
| Backend        | Node.js, Express.js         |
| Database       | MongoDB, Mongoose           |
| API            | RESTful API, RTK Query      |
| Notifications  | Sonner (or similar toast lib)|

---

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm or yarn
- MongoDB (local or cloud instance)
- Git

### Installation

#### Backend

```bash
git clone https://github.com/yourusername/library-management-backend.git
cd library-management-backend
npm install
# Configure .env with your MongoDB connection string and other environment variables
Frontend
bash
Copy
Edit
git clone https://github.com/yourusername/library-management-frontend.git
cd library-management-frontend
npm install
# Configure .env if needed (API base URL, etc)
Running the Project
Backend:

bash
Copy
Edit
npm run dev
Frontend:

bash
Copy
Edit
npm start
Open your browser at http://localhost:3000 (or configured port) to access the app.

Project Structure
Frontend
bash
Copy
Edit
/src
  /api         - RTK Query API slices
  /components  - Reusable UI components
  /features    - Redux slices & state management
  /pages       - Route pages (Books, Borrow, Summary)
  /hooks       - Custom hooks for Redux
  /styles      - Tailwind CSS or global styles
  App.tsx      - Main app component with routing
Backend
bash
Copy
Edit
/controllers - Request handlers for books & borrows
/models      - Mongoose schemas (Book, Borrow)
/routes      - API route definitions
/middleware  - Middleware for error handling & auth (optional)
/utils       - Utility functions
server.js    - App entry point
API Endpoints
Method	Endpoint	Description
GET	/api/books	Get all books (with pagination)
POST	/api/books	Create a new book
GET	/api/books/:id	Get details of a specific book
PUT	/api/books/:id	Update an existing book
DELETE	/api/books/:id	Delete a book
POST	/api/borrow	Borrow a book
GET	/api/borrow-summary	Get aggregated borrow summary