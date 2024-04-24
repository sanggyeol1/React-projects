import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">포켓몬</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">내 포켓몬</Nav.Link>
            <Nav.Link href="#features">포켓몬 뽑기</Nav.Link>
            <Nav.Link href="#pricing">배틀</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Outlet />
    </div>
  )
}

export default Layout