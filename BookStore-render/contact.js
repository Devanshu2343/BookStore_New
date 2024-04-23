const express = require('express');
const bodyParser = require('body-parser');

const app = express();


app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
  const htmlContent = `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Us - Magalam BookStore</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css">
    <style>
      body {
        font-family: 'Courier New', Courier, monospace;
        background: linear-gradient(135deg, #fc6076, #ff9a44); 
        color: #fff;
        margin: 0;
        padding: 0;
      }
  
      .header {
        text-align: center;
        padding-top: 50px;
        font-size: 50px;
        letter-spacing: 3px;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3); 
      }
  
      .container-fluid {
        margin: 20px;
        text-align: center;
      }
  
      ul {
        list-style: none;
        padding: 0;
        margin: 0;
      }
  
      li {
        display: inline-block;
        padding: 10px 20px;
        border-radius: 25px;
        background-color: rgba(255, 255, 255, 0.3); 
        margin: 5px;
        font-weight: bold;
        cursor: pointer;
        transition: background-color 0.3s, color 0.3s; 
      }
  
      li:hover {
        background-color: rgba(255, 255, 255, 0.7); 
        color: #333; 
      }
  
      .container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
      }
  
      .contact-info {
        flex: 1;
        padding: 20px;
        text-align: center;
        margin: 20px;
        border-radius: 20px; 
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3); 
        background: linear-gradient(135deg, #a8262677, #2e9621);
      }
  
      .contact-info h1 {
        margin: 0;
        font-size: 30px; 
        color: #fff;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3); 
      }
  
      .contact-info p {
        font-size: 18px; 
        line-height: 1.5; 
        color: #fff; 
        
      }
  
      .contact-form {
        flex: 1;
        padding: 20px;
        margin: 20px;
        border-radius: 20px; 
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3); 
        background: linear-gradient(135deg,#3d8f32, #a5212177 );
      }
  
      .contact-form h1 {
        margin: 0;
        font-size: 30px; 
        color: #fff;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3); 
      }
  
      .contact-form input,
      .contact-form textarea {
        width: 100%;
        padding: 10px;
        margin-bottom: 20px;
        border: 1px solid #ccc;
        border-radius: 5px;
        font-size: 16px; 
        background-color: transparent; 
        color: #fff; 
      }
  
      .contact-form button {
        width: 100%;
        padding: 15px;
        border: none;
        border-radius: 5px;
        background-color: #007bff;
        color: #fff; 
        font-size: 20px;
        font-weight: bold; 
        cursor: pointer;
        transition: background-color 0.3s ease;
      }
  
      .contact-form button:hover {
        background-color: #0056b3;
      }
    </style>
  </head>
  <body>
    <h1 class="header">Magalam BookStore</h1>
    <div class="container-fluid">
      <ul class="list-inline justify-content-center"> 
        <li><a href="mainpage.html" style="text-decoration: none; color: #fff;">Home</a></li>
        <li><a href="about.html" style="text-decoration: none; color: #fff;">About</a></li>
        <li><a href="contact.html" style="text-decoration: none; color: #fff;">Contact Us</a></li>
        <li><a href="more.html" style="text-decoration: none; color: #fff;">More</a></li>
      </ul>
    </div>
  
    <div class="container">
      <div class="contact-info">
        <h1>Contact Us</h1>
        <p>
          We're here to assist you! If you have any questions or need assistance, please feel free to reach out to us.
        </p>
        <p>
          You can also email us at:
          <a href="https://veilmail.io/e/FkKh7o" class="email-link">https://veilmail.io/e/FkKh7o</a>
        </p>
      </div>
      <div class="contact-form">
        <h1>Contact Form</h1>
        <form action="/submit-details" method="post" >
          <div>
            <label for="name">Your Name</label>
            <input type="text" id="name" name="name" required>
          </div>
          <div>
            <label for="email">Your Email</label>
            <input type="email" id="email" name="email" required>
          </div>
          <div>
            <label for="message">Your Message</label>
            <textarea id="message" name="message" required></textarea>
          </div>
          <div>
            <button type="submit">Send Message ✉</button>
          </div>
        </form>
      </div>
    </div>
  </body>
  </html>
  `;
  
  res.send(htmlContent);
});


app.post('/submit-details', (req, res) => {
  
  const nname = req.body.name;
  const  eemail= req.body.email;
  const mmessage = req.body.message;

  
  console.log('Received name :', nname);
  console.log('Received email: ', eemail);
  console.log('Received message: ', mmessage);


  
  res.send('Details received successfully!');
});


const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});  