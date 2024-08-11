# Blissful Beauty Ecommerce Website

![Blissful Beauty](public/img/wired-logo.png)

## Overview

Blissful Cosmetics is a fully responsive ecommerce website built with React and Tailwind CSS, designed to replicate the look and feel of the [Shop Blissful Beauty](https://shopblissfulbeauty.com/) website. This project includes a frontend for displaying products, a backend powered by Node.js and MongoDB, and various features such as a shopping cart, product filtering, animations, and more.

## Features

- **Home Page**: Showcases featured products and categories with smooth animations.
- **Product Pages**: Displays product details fetched from a MongoDB database.
- **Shopping Cart**: Allows users to add items to the cart, view the cart, and proceed to checkout.
- **Checkout**: A user-friendly checkout process that includes order confirmation.
- **Contact Form**: Collects user information and sends it to the server while triggering an email notification for the admin.
- **Responsive Design**: Fully responsive layout that works on all devices.
- **Animations**: Subtle animations using Framer Motion to enhance the user experience.

## Technologies Used

- **Frontend**:
  - React
  - Tailwind CSS
  - Framer Motion
  - React Router
  - Axios
  
- **Backend**:
  - Node.js
  - Express.js
  - MongoDB
  - Mongoose

- **Other Tools**:
  - Git for version control

## Getting Started

### Prerequisites

- Node.js
- npm
- MongoDB

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/mariambabarkhan/ecommerce-website.git
    ```

2. Navigate to the project directory:
    ```bash
    cd ecommerce-website
    ```

3. Install the dependencies for the frontend:
    ```bash
    cd client
    npm install
    ```

4. Install the dependencies for the backend:
    ```bash
    cd ../server
    npm install
    ```

5. Set up your MongoDB database and add your connection string in the `.env` file:
    ```bash
    MONGO_URI=your_mongo_connection_string
    ```

6. Start the development server:
    - **Frontend & Backend Run Concurrently**:
        ```bash
        npm run dev
        ```

7. Open your browser and navigate to `http://localhost:3000` to view the website.

## Project Structure

### Frontend (React)

```
client/
│
├── public/                     # Public assets
│   └── favicon.ico             # Logo
│   └── index.html              # Main HTML file
│    
├── src/
│   ├── styles/                 # Styles for using Tailwind's essential libraries
│   │   ├── index.css           # Stylesheet
│   │   
│   ├── components/             # Reusable components
│   │   ├── Navbar.js           # Navigation bar
│   │   ├── Footer.js           # Footer component
│   │   ├── Products.js         # Product card component
│   │   ├── CartPopUp.js        # Cart pop-up component
│   │   ├── ContactForm.js      # Contact form component
│   │   └── ...                 # Other components
│   
│   ├── pages/                  # Page components (Home, Shop, Cart, etc.)
│   │   ├── AboutUs.js
│   │   ├── AllCollections.js
│   │   ├── Cart.js
│   │   ├── CategoryPage.js
│   │   ├── Checkout.js
│   │   ├── Collections.js
│   │   ├── Contact.js
│   │   ├── Home.js
│   │   └── SearchResults.js
│    
│   ├── context/                # Context API for global state management
│   │   └── CartContext.js
│     
│   ├── App.js                  # Main app component
│   ├── index.js                # Entry point
│   └── ...                     # Other files (e.g., package.json, package-lock.json)
│
└── tailwind.config.js          # Tailwind CSS configuration
```

### Backend (Node.js, Express, MongoDB)

```
server/
├── models/
│   ├── Product.js              # Product schema
├── .env                        # Environment variables
├── server.js                   # Entry point for the backend server
└── ...                         # Other files (e.g., package.json, CustomerCare.txt, Subscribers.txt, README.md)
```
## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

If you have any questions or suggestions, feel free to reach out at [mariamk.bscs21seecs@seecs.edu.pk](mailto:mariamk.bscs21seecs@seecs.edu.pk).
