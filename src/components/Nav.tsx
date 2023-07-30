import * as React from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { Text, MediaQuery, List } from '@mantine/core';
import styled from 'styled-components';

const NavContainer = styled.div`
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledList = styled(List)`
  list-style: none;
  display: flex;
  gap: 2rem;
`;

function Nav() {
  return (
    <NavContainer>
      <Text>Code of Conduct</Text>
      <MediaQuery
        query="(max-width: 710px)"
        styles={{
          display: 'none',
        }}
      >
        <StyledList>
          <List.Item>Home</List.Item>
          <List.Item>About Us</List.Item>
          <List.Item>Scheule</List.Item>
        </StyledList>
      </MediaQuery>
      <MediaQuery
        query="(min-width: 710px)"
        styles={{
          display: 'block',
        }}
      >
        <RxHamburgerMenu />
      </MediaQuery>
    </NavContainer>
  );
}

export default Nav;
