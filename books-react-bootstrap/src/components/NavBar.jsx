import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

const NavBar = () => {

  const handleLink = () => {
    const windowLink = window.open('about:blank');
    windowLink.location.href = "http://nzlouis.com"
  }

  return (
    <Navbar sticky="top" bg="light" variant="light">
      <Container>
      <Navbar.Brand onClick={handleLink}>
        <img
            alt="NZLouis.com"
            src={require(`../images/nzlouis.jpg`).default}
            width="100"
            height="30"
            className="d-inline-block align-top"
          />
      </Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="/books">Books</Nav.Link>
        <Nav.Link href="/authors">Authors</Nav.Link>
        <Nav.Link href="/rentals">Rentals</Nav.Link>
      </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
