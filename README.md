# books-springboot-react

An online books system, implemented using spring boot, H2, and JPA as the backend, react and react-bootstrap as the front end. Contains functions such as books and authors. The system uses many reusable components to improve the reusability of the project.

![](books-react-bootstrap/src/images/books.gif)

## Getting started

You can view a live demo over at http://books.nzlouis.com

To get the backend running locally:

- Clone this repo
- Download Sources through pom.xml file
- Run the BooksSpringbootApplication file

To get the frontend running locally:
- `npm install` to install all req'd dependencies
- `npm start` to start the local server (this project uses create-react-app)

## Getting startedMaking requests to the backend API

For convenience, we have a live API server running at http://nzlouis.com:8088/doc.html for the application to make requests against. You can view the API spec here which contains all routes & responses for the server.

The source code for the frontend can be found in the main books-react-bootstrap repo.

If you want to change the API URL to a local server, simply edit src/main/resources/application.properties and change server.port to the local server's URL (i.e. http://localhost:8088/doc.html)
