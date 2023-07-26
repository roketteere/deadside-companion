import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Card from "react-bootstrap/Card";
import logoImg from "../images/deadsidelogo_300x62.png";
import Image from "react-bootstrap/Image";
import "./style/navbar-style.css";

export default function NavBar() {
  const name = "John Doe";
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#home">
          <Image src={logoImg} className="logo-img" fluid />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "150px" }}
            navbarScroll>
            <Nav.Link
              href="https://www.deadsidegame.com/"
              className="official"
              style={{ fontSize: 24 }}>
              Official Website
            </Nav.Link>
            <Nav.Link href="#action2">Contact</Nav.Link>

            <Button
              className="btn btn-danger"
              style={{ maxWidth: 100 }}
              onClick={() => {
                window.location.href =
                  "https://store.steampowered.com/app/895400/Deadside/";
              }}>
              Buy Now
            </Button>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="mr-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
