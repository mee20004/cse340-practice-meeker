// Import express using ESM syntax
import express from 'express';

import { fileURLToPath } from 'url';
import path from 'path';

const NODE_ENV = process.env.NODE_ENV || 'production';
const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create an instance of an Express application
const app = express();

/**
 * Configure Express middleware
 */

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

const name = process.env.NAME; // <-- NEW

// Set EJS as the templating engine
app.set('view engine', 'ejs');

// Tell Express where to find your templates
app.set('views', path.join(__dirname, 'src/views'));


/**
 * Routes
 */
app.get('/', (req, res) => {
    const title = 'Welcome Home';
    res.render('home', { title });
});

app.get('/about', (req, res) => {
    const title = 'About Me';
    res.render('about', { title });
});



import { facultyListPage, facultyDetailPage } from "./src/controllers/faculty/faculty.js";

app.get('/products', (req, res) => {
    const title = 'Our Products';
    res.render('products', { title });
});

app.get('/faculty', facultyListPage);
app.get('/faculty/:facultyId', facultyDetailPage);

app.get('/student', (req, res) => {
    const student = {
        title: 'Student Information',
        name: 'Kameron Meeker',
        id: '123456',
        email: 'kameron.meeker@byui.edu',
        address: '123 Main St, Rexburg, ID 83440'
    };
    res.render('student', student);
});



// Start the server and listen on the specified port
app.listen(PORT, () => {
    console.log(`Server is running on http://127.0.0.1:${PORT}`);
});

//start by -    node server.js.    node --env-file=.env server.js