//Import Express
import express from "express";

//Initialize Express app-
const app = express();

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
      id: 1, name: "Arun", email: "arun@example.com"},
    { id: 2, name: "Sonal", email: "sonal@example.com" },
  ];
  res.json(user);
});

app.post("/savecontact", (req, res) => {
    const newContact = req.body;
    console.log("New contact with email:", newContact);
    res.json({ message: "Contact details submitted successfully!", contact: newContact });  
});

//Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
