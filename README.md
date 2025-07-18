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


