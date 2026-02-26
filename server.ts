//Import Express
import express from "express";

//Initialize Express app-
const app = express();

app.use(express.json());

//Set the port
const PORT = 3000;

//Set up a  basic route
app.get("/", (req, res) => {
  res.send("Welcome to our API!. Hello World!");
});

//set up about route-
app.get("/about", (req, res) => {
  res.send("This is the about page of our API.");
});

//set up contact route
app.get("/contact", (req, res) => {
  const user = [
    {
      id: 1,
      name: "Arun",
      email: "arun@example.com",
      profession: "Architect",
      phone: "123-456-7890",
      address: "123 Main St, Cityville",
    },
    {
      id: 2,
      name: "Sonal",
      email: "sonal@example.com",
      profession: "Junior Developer",
      phone: "987-654-3210",
      address: "456 Elm St, Townsville",
    },
    {
      id: 3,
      name: "Alice",
      email: "alice@example.com",
      profession: "UX Designer",
      phone: "555-123-4567",
      address: "789 Oak St, Villageville",
    },
  ];
  res.json(user);
});

app.post("/savecontact", (req, res) => {
  const newContact = req.body;
  res.json({
    message: "Contact data saved successfully!",
    contact: newContact,
  });
});

//Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// 2Practice Exercise: Building Your Own API

// Task: Build a Simple API
// Create two routes:
// A GET route at /greet that responds with a welcome message (e.g., "Hello, developer!").
// A POST route at /submit that accepts user data (like name and age) and responds with a personalized message (e.g., "Hello, John! You are 25 years old.").
// Test Your Routes Using Insomnia:
// For the GET route, visit http://localhost:3000/greet.
// For the POST route, send JSON data with a name and age, and check the response.
//

// By completing this exercise, you will learn how to:
// Set up an Express server.
// Create API routes.
// Handle both GET and POST requests.
// Test your API using Insomnia.

//
app.get("/greet", (req, res) => {
  res.send("Hello, developer!");
});

app.post("/submit", (req, res) => {
  const { name, age } = req.body;
  res.json({
    message: `Hello, ${name}! You are ${age} years old. You live in ${req.body.address} with your family.`,
  });
});
