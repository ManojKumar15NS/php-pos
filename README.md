# KFC-Style Food Ordering POS System

## Overview
This project is a web-based POS (Point of Sale) system for a fast-food restaurant, modeled after KFC's ordering experience. It allows users to browse menu categories, add items to a cart, and complete orders with a checkout process using Razorpay for payments.

## Features
- **Dynamic Menu**: Items are loaded dynamically using AJAX.
- **Cart System**: Users can add items to their cart and adjust quantities.
- **Billing and Checkout**: Calculates total cost and integrates Razorpay for payments.
- **Admin Panel**: Allows stock management by adding new items.
- **Database Integration**: Fetches categories and items from the database.
- **Responsive UI**: Optimized for both desktop and mobile devices.

## Technologies Used
- **Frontend**: HTML, CSS, JavaScript, jQuery
- **Backend**: PHP, MySQL
- **Payment Integration**: Razorpay
- **Styling Frameworks**: Custom CSS with responsive design principles

## File Structure
```
├── index.html         # Admin panel for adding stock
├── billing.html       # Main POS system interface
├── billing.js         # Handles dynamic item loading and checkout
├── script.js          # Handles stock insertion via AJAX
├── get_categories.php # Fetches categories from the database
├── get_items.php      # Fetches items based on selected category
├── insert.php         # Inserts new items into the database
```

## Setup Instructions
1. **Database Configuration**:
   - Create a MySQL database and import the required tables.
   - Update the database credentials in the PHP files.

2. **Running the Project**:
   - Place the project files in a local server environment (XAMPP/LAMP/WAMP).
   - Ensure Apache and MySQL are running.
   - Open `billing.html` in a browser to access the POS system.

3. **Adding Items to Stock**:
   - Navigate to `index.html`.
   - Fill out the form and submit to add new items.

## Database Schema
```sql
CREATE DATABASE kfc_pos;
USE kfc_pos;

CREATE TABLE categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE items (
    id INT AUTO_INCREMENT PRIMARY KEY,
    category_id INT,
    name VARCHAR(255) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    image_path VARCHAR(255),
    FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE CASCADE
);

CREATE TABLE orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    total_amount DECIMAL(10,2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE order_items (
    id INT AUTO_INCREMENT PRIMARY KEY,
    order_id INT,
    item_id INT,
    quantity INT NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE,
    FOREIGN KEY (item_id) REFERENCES items(id) ON DELETE CASCADE
);
```

## Future Enhancements
- **User Authentication**: Secure access to admin features.
- **Order History**: Store completed orders for tracking.
- **Animations & Transitions**: Improve UI experience.

## License
This project is open-source and can be modified as needed.

