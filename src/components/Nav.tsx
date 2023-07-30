import { RxHamburgerMenu } from 'react-icons/rx';
import { Text, List, Menu } from '@mantine/core';
import styled from 'styled-components';
import { Outlet, Link } from 'react-router-dom';

const NavContainer = styled.div`
  padding: 2rem;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const StyledList = styled(List)`
  list-style: none;
  display: flex;
  gap: 2rem;
  @media (max-width: 768px) {
    display: none;
  }
`;

const StyleLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const HamburgerContainer = styled('div')`
  @media (min-width: 768px) {
    display: none;
  }
`;

function Nav() {
  return (
    <>
      <NavContainer>
        <Text>Code of Conduct</Text>
        <StyledList>
          <List.Item>
            <StyleLink to="/home">Home</StyleLink>
          </List.Item>
          <List.Item>
            <StyleLink to="/about">About Us</StyleLink>
          </List.Item>
          <List.Item>
            <StyleLink to="/schedule">Schedule</StyleLink>
          </List.Item>
        </StyledList>
        <Menu>
          <Menu.Target>
            <HamburgerContainer>
              <RxHamburgerMenu />
            </HamburgerContainer>
          </Menu.Target>

          <Menu.Dropdown>
            <Menu.Item>
              <StyleLink to="/home">Home</StyleLink>
            </Menu.Item>
            <Menu.Item>
              <StyleLink to="/about">About Us</StyleLink>
            </Menu.Item>
            <Menu.Item>
              <StyleLink to="/schedule">Schedule</StyleLink>
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </NavContainer>
      <Outlet />
    </>
  );
}

export default Nav;
