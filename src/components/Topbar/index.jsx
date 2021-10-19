import React from "react";
import { Navbar, Container } from "react-bootstrap";
import { CURRENT_USER } from "../../fakedata/data";

const Topbar = () => {
  console.log("currentUser", CURRENT_USER);
  const { name } = CURRENT_USER;

  return (
    <Navbar style={{ backgroundColor: "#1d1d1d" }}>
      <Container>
        <Navbar.Brand style={{ color: "green" }} href="/">
          trakr
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text style={{ color: "green" }}>
            I am:{" "}
            <a href="/" style={{ color: "green" }}>
              {name}
            </a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Topbar;
