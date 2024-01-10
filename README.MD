# Express.js Notes Project

This Node.js project utilizes the Express framework to create and study the application with the following components:

1. **Express Setup:**

   - Uses the Express framework to create a web server for handling HTTP requests.

2. **Handlebars Templating Engine:**

   - Integrates the Handlebars templating engine to render dynamic HTML views.
   - Configures Handlebars as the view engine with a default layout named 'main'.

3. **Body Parser Middleware:**

   - Implements middleware for parsing JSON and URL-encoded data using `express.json()` and `express.urlencoded()`.

4. **Static File Serving:**

   - Utilizes the `express.static` middleware to serve static files from the 'public' directory.

5. **Homepage Route:**

   - Defines a route for the homepage ('/') that renders an 'index' view.
   - Passes data, including the title ('Member App') and a list of members, to the view.

6. **Members API Routes:**

   - Includes API routes for managing members using the 'express.Router' module.
   - API routes are prefixed with '/api/members'.

7. **Environment Configuration:**

   - Sets the server port using the 'PORT' environment variable or defaults to port 5000.

8. **Logging Middleware (commented out):**

   - Provides a middleware function for logging requests (currently commented out).

9. **Members Data:**

   - Defines a sample array of member data in 'Members.js' and exports it for use in other modules.

10. **HTML Views:**

    - Utilizes a main layout file ('layout.handlebars') and an 'index' view file for rendering HTML.
    - Includes a form for adding members and displays a list of members.

11. **Bootstrap Styling:**

    - Incorporates Bootstrap 4.3.1 for styling the HTML views.

12. **Server Start:**

    - Starts the Express server on the specified port and logs a message indicating the server's status.

13. **HTML Views (continued):**

    - Defines an HTML structure with a container, dynamic body content, and Bootstrap styling for the form and member list.

14. **Sample Data:**

    - Includes a sample array of members with their respective properties.

15. **HTML Views (continued):**
    - Renders an HTML form for adding members, displays a list of existing members, and provides a link to the members API.

**Note:** Please ensure that the necessary dependencies are installed (`express`, `express-handlebars`, `bootstrap`) using the appropriate package manager (e.g., `npm install`).
