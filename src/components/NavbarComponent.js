import React from "react";
import { Navbar, Container,Nav, Form, Button, InputGroup } from "react-bootstrap";
import { useEffect, useState,  } from "react";
import { API_URL } from "../utils/constants";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";


const NavbarComponent = ({changeCategory, categorySelected}) => {

  const [category, setCategory] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${API_URL}/categories`).then((res) => setCategory(res.data));
  }, []);

    return(
        <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Nama Toko</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Celana">Discount</Nav.Link>
            <Nav.Link href="/Sepatu">Contact</Nav.Link>
            <Nav.Link href="/Topi">About</Nav.Link>
          </Nav>
          
          <FontAwesomeIcon icon={faSearch} className="fa-search" />
          <FontAwesomeIcon onClick={() => navigate("/keranjang")} className="fa-shop" icon={faShoppingCart} />
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}

export default NavbarComponent;