const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Import Routes
const routes = require('./routes/index');
app.use('/', routes);

// Handle 404 errors
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
