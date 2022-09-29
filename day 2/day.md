What are the different types of HTTP requests?
HTTP (Hypertext Transfer Protocol) specifies a collection of request methods to specify what action is to be performed on a particular resource. The most commonly used HTTP request methods are GET, POST, PUT, PATCH, and DELETE. These are equivalent to the CRUD operations (create, read, update, and delete).
GET: GET request is used to read/retrieve data from a web server. GET returns an HTTP status code of 200 (OK) if the data is successfully retrieved from the server.

POST: POST request is used to send data (file, form data, etc.) to the server. On successful creation, it returns an HTTP status code of 201.

PUT: A PUT request is used to modify the data on the server. It replaces the entire content at a particular location with data that is passed in the body payload. If there are no resources that match the request, it will generate one.

PATCH: PATCH is similar to PUT request, but the only difference is, it modifies a part of the data. It will only replace the content that you want to update.

DELETE: A DELETE request is used to delete the data on the server at a specified location.

Explain the concept of middleware in Node.js. Explain CORS
Express.js is a routing and Middleware framework for handling the different routing of the webpage and it works between the request and response cycle.

Middleware gets executed after the server receives the request and before the controller actions send the response.

Middleware has the access to the request object, responses object, and next, it can process the request before the server send a response. An Express-based application is a series of middleware function calls.

Middleware Chaining: Middleware can be chained from one to another, Hence creating a chain of functions that are executed in order. The last function sends the response back to the browser. So, before sending the response back to the browser the different middleware process the request.

The next() function in the express is responsible for calling the next middleware function if there is one.

app.get(path, (req, res, next) => {}, (req, res) => {})

CORS

CORS (Cross-Origin Resource Sharing) is a mechanism by which data or any other resource of a site could be shared intentionally to a third party website when there is a need. Generally, access to resources that are residing in a third party site is restricted by the browser clients for security purposes.

function httpGetAction(urlLink) { var xmlHttp = new XMLHttpRequest(); xmlHttp.open( "GET", urlLink, false ); xmlHttp.send(); return xmlHttp.responseText; }

npm i CORS

What is Express. how it helps you to create a backend application
Express.js: Express is a small framework that sits on top of Node.js’s web server functionality to simplify its APIs and add helpful new features. It makes it easier to organize your application’s functionality with middle ware and routing. It adds helpful utilities to Node.js’s HTTP objects. It facilitates the rendering of dynamic HTTP objects.

More features than Node.js

It is used to build web-apps using approaches and principles of Node.js.

Routing is provided.

It requires less coding time.

Uses middleware for the arrangement of functions systematically server-side.

import by const express = require ("express")

Explain min 5 status codes gets used in Backend development
An HTTP status code is a message a website's server sends to the browser to indicate whether or not that request can be fulfilled. Status codes specs are set by the W3C. Status codes are embedded in the HTTP header of a page to tell the browser the result of its request.
102 PROCESSING Processing 200 OK OK 400 BAD_REQUEST Bad Request 401 UNAUTHORIZED Unauthorized 402 PAYMENT_REQUIRED Payment Required 403 FORBIDDEN Forbidden 404 NOT_FOUND Not Found 500 INTERNAL_SERVER_ERROR Internal Server Error 503 - Service Unavailable

What is node.js ?
Node.js: Node.js is an open source and cross-platform runtime environment for executing JavaScript code outside of a browser. You need to remember that NodeJS is not a framework and it’s not a programming language. Most of the people are confused and understand it’s a framework or a programming language. We often use Node.js for building back-end services like APIs like Web App or Mobile App. It’s used in production by large companies such as Paypal, Uber, Netflix, Walmart and so on.

Node.js is a platform for building the i/o applications which are server-side event-driven and made using JavaScript.

It is used to build server-side, input-output, event-driven apps.

It is built on Google’s V8 engine.

C, C++, JavaScript can be used

Run-time platform or environment designed for server-side execution of JavaScript.

Routing is not provided.

No Middleware

Difference between HTTP and HTTPS
HTTPS stands for Hyper Text Transfer Protocol Secure. It is highly advanced and secure version of HTTP. It uses the port no. 443 for Data Communication.

HTTP also allows you to create a secure encrypted connection between the server and the browser. It offers the bi-directional security of Data.

HTTP lacks security mechanism to encrypt the data whereas HTTPS provides SSL or TLS Digital Certificate to secure the communication between server and client. HTTP operates at Application Layer whereas HTTPS operates at Transport Layer. HTTP by default operates on port 80 whereas HTTPS by default operates on port 443. HTTP transfers data in plain text while HTTPS transfers data in cipher text (encrypt text). HTTP is fast as compared to HTTPS because HTTPS consumes computation power to encrypt the communication channel.

HTTP It is hypertext transfer protocol. It is less secure as the data can be vulnerable to hackers. It uses port 80 by default. HTTP URLs begin with http:// It’s a good fit for websites designed for information consumption like blogs. HTTP does not scramble the data to be transmitted. HTTP website do not need SSL. Fast

HTTPS Vulnerable to hackers It Is highly secure as the data is encrypted before it is seen across a network. Slower than HTTP HTTPS requires SSL certificate. HTTPS scrambles the data before transmission. If the website needs to collect the private information such as credit card number, then it is a more secure protocol. HTTPs URLs begin with https:// It was use port 443 by default. It is designed to prevent hackers from accessing critical information. It is secure against such attacks. It is hypertext transfer protocol with secure.

What are JWT tokens?
JSON web token (JWT), pronounced "jot", is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. Again, JWT is a standard, meaning that all JWTs are tokens, but not all tokens are JWTs.
ex:-instagram
when we loggin somewhere , they provide us a unique token.which helps us to access through it
tocken is provided only when the registered data and login data are matching.
