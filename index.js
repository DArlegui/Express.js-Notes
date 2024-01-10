const express = require('express');
const path = require('path'); //For working with file & dir path
const members = require('./Members'); //Captures data from Members.js fue
const app = express(); //Creates an instance of Express Application

/* Handlebars Middleware*/
const { engine } = require('express-handlebars'); //Found fix
app.engine('handlebars', engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Homepage Route (ignores static folder route)
app.get('/', (req, res) =>
  res.render('index', {
    title: 'Member App',
    members,
  })
);

// /* Init middleware */
// const logger = require('./middleware/logger');
// app.use(logger); //After we make a request, middleware will run

/* Set static folder Route */
/* 
  This app.use tells Express to serve static files from a directory named public in the same directory as this file. The path.joinpart constructs an absolute path to the public directory. */
app.use(express.static(path.join(__dirname, 'public')));

/* Members API Routes */
app.use('/api/members', require('./routes/api/members'));
/* 
  This line sets the port the server will listen on. It first tries to use the PORT environment variable (which is often set in production environments), and if that's not set, it defaults to 5000.*/
const PORT = process.env.PORT || 5000;
/* 
This line starts the server and makes it listen for requests on the specified port. When the server starts, it logs a message to the console indicating the port it's running on.
*/
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
