import React from 'react';
import { Navbar, Container, Button, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
const Header = () => {
  const { users, signOutUser } = useAuth();
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>
            <img style={{ width: '150px' }} src="" alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/home">
                Home
              </Nav.Link>
              {/* <Nav.Link as={Link} to="/bookings">
                My Bookings
              </Nav.Link>
              <Nav.Link as={Link} to="/manageBookings">
                Manage Bookings
              </Nav.Link> */}

              {!users.email ? (
                <Link to="/login">
                  <Button variant="primary">Log In</Button>{' '}
                </Link>
              ) : (
                <div className="d-flex align-items-center">
                  <Nav.Link as={Link} to="/bookings">
                    My Bookings
                  </Nav.Link>
                  <Nav.Link as={Link} to="/manageBookings">
                    Manage Bookings
                  </Nav.Link>
                  <Link to="/admin">
                    <Button variant="success">Add new Destination</Button>{' '}
                  </Link>
                  <h2 className="fs-5">{users.displayName}</h2>
                  <Button variant="danger" onClick={signOutUser}>
                    sign out{' '}
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
