# 🔗 ShortnURL

**ShortnURL** is a full-stack URL shortener built with the **MERN** stack that lets users generate short links from long URLs and track the number of times each link is clicked. It features real-time redirection, click tracking, and a clean, responsive UI.

## 🛠️ Tech Stack

- **Frontend:** React.js, Axios, Tailwind CSS (optional)
- **Backend:** Node.js, Express.js
- **Database:** MongoDB + Mongoose
- **Others:** Nanoid for unique short URL generation

## 🚀 Features

- Generate unique short URLs
- Redirect to original URL from shortened one
- Track number of clicks per URL
- User-friendly interface
- Basic error handling and input validation


## ⚙️ Setup Instructions

### Prerequisites

- Node.js
- MongoDB (local or Atlas)

### Backend

```bash
cd backend
npm install
# Create a .env file with the following:
# MONGO_URI=your_mongodb_connection_string
npm start
```

### Frontend

```bash
cd frontend
npm install
npm start

