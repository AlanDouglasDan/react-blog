import { Nav } from "react-bootstrap";

function Header() {
  return (
    <div class="bg-header">
      <header className="main_header">V.A Properties and Homes</header>

      <div className="nav-container text-right">
        <Nav className="nav-bar">
          <Nav.Link href="#offer">Offer</Nav.Link>
          <Nav.Link href="#why-uyo">why uyo</Nav.Link>
          <Nav.Link href="#why-va">why us</Nav.Link>
          <Nav.Link href="#contact">contact</Nav.Link>
        </Nav>
      </div>
    </div>
  );
}

export default Header;
