const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000; 

// middleware
app.use(bodyParser.urlencoded({ extended: true }));

const renderPage = (title, content) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 0; padding: 0; text-align: center; background: #f8f9fa; }
        nav { background: #007BFF; padding: 15px; }
        nav a { color: white; text-decoration: none; margin: 0 15px; font-size: 18px; }
        h1 { color: #0056b3; }
        .container { padding: 20px; max-width: 800px; margin: auto; background: white; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); border-radius: 10px; }
        ul { list-style-type: none; padding: 0; }
        li { margin: 10px 0; font-size: 18px; }
        form input { padding: 10px; margin-top: 10px; font-size: 16px; }
        form button { padding: 10px 15px; font-size: 16px; background: #007BFF; color: white; border: none; cursor: pointer; }
        form button:hover { background: #0056b3; }
    </style>
</head>
<body>
    <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/favorites">Favorites</a>
        <a href="/survey">Survey</a>
    </nav>
    <div class="container">
        ${content}
    </div>
</body>
</html>
`;

// home 
app.get('/', (req, res) => {
    res.send(renderPage("ZooKeeper", `
        <h1>ZooKeeper</h1>
        <h3>Keeping Track of All Our Critters</h3>
        <p>ZooKeeper is a handy app for zookeepers and animal lovers to track, manage, and explore zoo animals around the world. 
        From feeding schedules to fascinating facts, we ensure every critter gets the attention it deserves!</p>
    `));
});

// about 
app.get('/about', (req, res) => {
    res.send(renderPage("About Us", `
        <h1>About Us</h1>
        <p>Welcome to ZooKeeper! Our mission is to bring zookeepers and animal lovers together 
        by providing a fun and educational platform. Whether you're a professional caretaker or 
        just love animals, we're here to help you stay informed and connected!</p>
    `));
});

// favorites 
app.get('/favorites', (req, res) => {
    res.send(renderPage("Zoo Favorites", `
        <h1>Zoo Favorites</h1>
        <ul>
            <li>🐘 African Elephant</li>
            <li>🦁 Lion</li>
            <li>🦓 Zebra</li>
            <li>🐅 Bengal Tiger</li>
            <li>🦜 Scarlet Macaw</li>
            <li>🦉 Snowy Owl</li>
            <li>🐧 Emperor Penguin</li>
            <li>🐢 Galápagos Tortoise</li>
            <li>🐒 Golden Tamarin</li>
            <li>🦦 Giant Otter</li>
        </ul>
    `));
});

// survey 
app.get('/survey', (req, res) => {
    res.send(renderPage("Favorite Zoo Animal Survey", `
        <h1>Favorite Zoo Animal Survey</h1>
        <form action="/results" method="POST">
            <label for="fav_vote">What is your favorite zoo animal?</label><br>
            <input type="text" id="fav_vote" name="fav_vote" required>
            <button type="submit">Submit</button>
        </form>
    `));
});

// reslts from submission
app.post('/results', (req, res) => {
    console.log(`New survey response: ${req.body.fav_vote}`);
    res.send(renderPage("Thank You!", `
        <h1>Thank You!</h1>
        <p>Your favorite zoo animal has been recorded. Check the console for the result!</p>
    `));
});

app.listen(PORT, () => {
    console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
