import React from 'react';
import { Navbar, Container, Button, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
const Header = () => {
  const { users, signOutUser } = useAuth();
  return (
    <div>
      <Navbar className="py-2" bg="light" expand="lg">
        <Container>
          <Navbar.Brand className="d-flex align-items-center">
            <img
              style={{ width: '50px' }}
              src="https://e1.pngegg.com/pngimages/139/636/png-clipart-dots-mega-logo.png"
              alt=""
            />
            <h3 className="m-0 fw-bold">MegaBooking</h3>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link className="fw-bold fs-5" as={Link} to="/home">
                Home
              </Nav.Link>

              {!users.email ? (
                <Link to="/login">
                  <Button variant="primary mt-1">Log In</Button>{' '}
                </Link>
              ) : (
                <div className="d-xl-flex d-block align-items-center">
                  <Nav.Link className="fw-bold fs-5" as={Link} to="/bookings">
                    My Bookings
                  </Nav.Link>
                  <Nav.Link
                    className="fw-bold fs-5"
                    as={Link}
                    to="/manageBookings"
                  >
                    Manage Bookings
                  </Nav.Link>
                  <Nav.Link className="fw-bold fs-5" as={Link} to="/admin">
                    Add New Destination
                  </Nav.Link>
                  <h2 className="fs-5 m-0 mx-2 my-xl-0 my-2 border border-2 p-2 border-success rounded">
                    {users.displayName}
                  </h2>
                  <Button variant="danger" onClick={signOutUser}>
                    Sign Out{' '}
                  </Button>{' '}
                </div>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
