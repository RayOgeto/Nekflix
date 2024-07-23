import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #111;
  padding: 0 20px;
  z-index: 1;
`;

const Logo = styled.img`
  width: 80px;
`;

const Avatar = styled.img`
  width: 30px;
  border-radius: 4px;
`;

function Navbar() {
  return (
    <Nav>
      <Logo src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix Logo" />
      <Avatar src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="User Avatar" />
    </Nav>
  );
}

export default Navbar;
