# MeetConnect

A video conferencing application built with modern web technologies.

## Features

- Real-time video and audio calls
- Screen sharing
- Chat functionality
- User authentication
- Responsive design for all devices

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- MongoDB (for the backend)

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd MeetConnect
   ```

2. Install dependencies for both frontend and backend:
   ```bash
   # Install backend dependencies
   cd backend
   npm install
   
   # Install frontend dependencies
   cd ../frontend
   npm install
   ```

## Configuration

1. Create a `.env` file in the backend directory with the following variables:
   ```
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

## Running the Application

1. Start the backend server:
   ```bash
   cd backend
   npm start
   ```

2. In a new terminal, start the frontend development server:
   ```bash
   cd frontend
   npm start
   ```

3. Open your browser and navigate to `http://localhost:3000`

## Project Structure

```
MeetConnect/
├── backend/           # Backend server code
├── frontend/          # Frontend React application
└── README.md          # This file
```

## Technologies Used

- **Frontend**: React, WebRTC, Socket.io
- **Backend**: Node.js, Express, MongoDB
- **Authentication**: JWT

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
