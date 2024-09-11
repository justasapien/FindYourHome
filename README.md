# FindYourHome.in

**FindYourHome.in** is a comprehensive real estate platform developed using the MERN stack (MongoDB, ExpressJS, ReactJS, NodeJS). This application allows users to browse, list, and interact with property listings efficiently and intuitively.

## Features

- **Property Browsing and Listing**: Users can browse available properties and list new ones for others to view.
- **Instant Messaging**: Implemented using Socket.io, enabling real-time communication between users and property listers.
- **Interactive Maps**: Integrated React Leaflet to provide interactive maps for visualizing property locations.
- **Efficient Data Handling**: Utilized Prisma for scalable and efficient operations with MongoDB.
- **Responsive Design**: Ensures a seamless user experience across various devices and screen sizes.
- **Authentication and Authorization**: Users can sign up, log in, and manage their accounts securely. Authorization ensures users have appropriate access to resources based on their roles.
- **Advanced Search Filters**: Users can filter properties based on criteria such as buy or rent, price range, and location.

## Technologies

- **Frontend**: ReactJS, React Leaflet, JavaScript
- **Backend**: NodeJS, ExpressJS
- **Database**: MongoDB
- **Authentication & Authorization**: JWT (JSON Web Tokens)
- **ORM**: Prisma
- **Real-Time Communication**: Socket.io

## Project Structure

- `client/` - Contains the frontend code (ReactJS application).
  - `src/`
    - `components/` - Reusable UI components.
    - `pages/` - Different pages of the application.
    - `services/` - API services for interacting with the backend.
    - `App.js` - Main application component.
    - `index.js` - Entry point of the React application.
- `api/` - Contains the backend code (NodeJS and ExpressJS application).
  - `controllers/` - Functions to handle requests and responses.
  - `models/` - Prisma models and MongoDB schemas.
  - `routes/` - API route definitions.
  - `config/` - Configuration files for environment variables and database connection.
  - `server.js` - Main entry point of the backend server.

## Installation

To set up and run this project locally, follow these steps:

### Frontend

1. **Navigate to the client directory:**

    ```bash
    cd client
    ```

2. **Install frontend dependencies:**

    ```bash
    npm install
    ```

3. **Run the frontend development server:**

    ```bash
    npm start
    ```

### Backend

1. **Navigate to the server directory:**

    ```bash
    cd server
    ```

2. **Install backend dependencies:**

    ```bash
    npm install
    ```

3. **Create a `.env` file** in the `server` directory and add your environment variables (e.g., MongoDB URI, JWT secret).

    ```env
    MONGO_URI=your_mongodb_uri
    JWT_SECRET=your_jwt_secret
    ```

4. **Run database migrations** (if applicable) to set up Prisma:

    ```bash
    npx prisma migrate deploy
    ```

5. **Run the backend server:**

    ```bash
    npm start
    ```

## Usage

- **Homepage**: Browse available property listings and view details.
- **Property Listing**: Add new properties to the platform.
- **Messaging**: Communicate with property listers in real time using instant messaging.
- **Map Visualization**: Explore property locations using interactive maps.
- **Authentication**: Sign up and log in to manage your account securely.
- **Authorization**: Access resources based on user roles and permissions.
- **Search Filters**: Use filters to search for properties based on buy or rent status, price range, and location.


## Contributing

To contribute to this project:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to the branch (`git push origin feature/your-feature`).
6. Open a Pull Request.


## Contact

For any questions or suggestions, feel free to open an issue or contact me at [vikash.sharma.ug21@nsut.ac.in](mailto:vikash.sharma.ug21@nsut.ac.in).
