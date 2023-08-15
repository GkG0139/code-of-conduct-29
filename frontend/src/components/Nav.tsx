import { RxHamburgerMenu } from 'react-icons/rx';
import styled from 'styled-components';

import { List, Menu, Text } from '@mantine/core';

const NavContainer = styled.div`
  padding: 2rem;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-size: 1.5rem;
`;

const StyledList = styled(List)`
  list-style: none;
  display: flex;
  gap: 2rem;
  @media (max-width: 768px) {
    display: none;
  }
`;

const StyleLink = styled.a`
  text-decoration: none;
  color: black;
`;

const HamburgerContainer = styled('div')`
  @media (min-width: 768px) {
    display: none;
  }
`;

function Nav({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavContainer>
        <Text>Code of Conduct</Text>
        <StyledList>
          <List.Item>
            <StyleLink href="/home">Home</StyleLink>
          </List.Item>
          <List.Item>
            <StyleLink href="/about">About Us</StyleLink>
          </List.Item>
          <List.Item>
            <StyleLink href="/schedule">Schedule</StyleLink>
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
              <StyleLink href="/home">Home</StyleLink>
            </Menu.Item>
            <Menu.Item>
              <StyleLink href="/about">About Us</StyleLink>
            </Menu.Item>
            <Menu.Item>
              <StyleLink href="/schedule">Schedule</StyleLink>
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </NavContainer>
      {children}
    </>
  );
}

export default Nav;
