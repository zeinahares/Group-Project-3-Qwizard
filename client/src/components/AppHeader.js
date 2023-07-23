//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
//// NEEDS UPDATING!!!!!
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Modal, Tab } from 'react-bootstrap';
import { Button } from 'antd';
// import SignUpForm from './SignupForm';
// import LoginForm from './LoginForm';
import CustomModal from './CustomModal';
import logo from '../images/logoQuiz.png';

import Auth from '../utils/auth';

const AppNavbar = () => {
  // set modal display state
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Navbar data-bs-theme="light" expand='lg' style={{ backgroundColor: "#F9F8EB" }}>
        <Container fluid >
          <Navbar.Brand className="logo-container" as={Link} to='/'>
            <img src={logo} alt='logo' className='logo' />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls='navbar' />
          <Navbar.Collapse id='navbar'>
            <Nav className='ml-auto'>

              <Link to="/">
                <Button type="primary" style={{ margin: "5px", background: "#FD5F00", borderColor: "#FD5F00" }} shape="round">
                  Home
                </Button>
              </Link>
              {/* if user is logged in show saved books and logout */}
              {Auth.loggedIn() ? (
                <>
                  <Link to="/myQuizzes">
                    <Button type="primary" style={{ margin: "5px", background: "#76B39D", borderColor: "#76B39D" }} shape="round">
                      My Quizzes
                    </Button>
                  </Link>
                  <Link to="/">
                    <Button onClick={Auth.logout} type="primary" style={{ margin: "5px", background: "#05004E", borderColor: "#05004E" }} shape="round">Logout</Button>
                  </Link>
                </>
              ) : (
                <Button onClick={() => setShowModal(true)} type="primary" style={{ margin: "5px", background: "#05004E", borderColor: "#05004E" }} shape="round"> Login/Sign Up</Button>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* set modal data up */}
      <CustomModal showModal={showModal} setShowModal={setShowModal} />
      {/* <Modal
        size='lg'
        show={showModal}
        onHide={() => setShowModal(false)}
        aria-labelledby='signup-modal'> */}
      {/* tab container to do either signup or login component */}
      {/* <Tab.Container defaultActiveKey='login'>
          <Modal.Header closeButton>
            <Modal.Title id='signup-modal'>
              <Nav variant='pills'>
                <Nav.Item>
                  <Nav.Link eventKey='login'>Login</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='signup'>Sign Up</Nav.Link>
                </Nav.Item>
              </Nav>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Tab.Content>
              <Tab.Pane eventKey='login'>
                <LoginForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
              <Tab.Pane eventKey='signup'>
                <SignUpForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
            </Tab.Content>
          </Modal.Body>
        </Tab.Container>
      </Modal> */}
    </>
  );
};

export default AppNavbar;
