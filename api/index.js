const express = require('express');
const app = express();
const PORT = 3000;

// Middleware (optional)
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// Define a route
app.get('/', (req, res) => {
    res.send('Hello, world!');
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
