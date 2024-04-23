const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files (HTML, CSS, JS, images, etc.)
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,  'book_items.html'));
});



// Parse JSON bodies
app.use(express.json());

// Function to calculate the total value of items' prices
function calculateTotal(cartItems) {
  let total = 0;
  cartItems.forEach(item => {
    total += item.price;
  });
  return total;
}

// Handle POST request to /checkout
app.post('/checkout', (req, res) => {
  const cartItems = req.body;
  const totalValue = calculateTotal(cartItems);
  const orderId = generateOrderId();
  // Process the cart items (e.g., save to database, send email confirmation, etc.)
  // For demonstration purposes, we'll simply log the received items and send a response.
  console.log('Received cart items:', cartItems);
  console.log('Total value of items:', totalValue);
  console.log('Order ID:', orderId);
  res.json({ 
    message: 'Your order has been placed!',
    orderId: orderId,
    totalValue: totalValue
  });
});

// Function to generate a random order ID
function generateOrderId() {
  return Math.random().toString(36).substr(2, 9); // Generate a random alphanumeric string
}

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
