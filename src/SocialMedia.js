// src/SocialMedia.js
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #f0f0f0;
`;

const Header = styled.h1`
  font-size: 2rem;
  color: #333;
  margin-bottom: 20px;
`;

const Link = styled.a`
  font-size: 1.2rem;
  color: #007BFF;
  margin: 10px 0;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const SocialMedia = () => {
  return (
    <Container>
      <Header>socials 👀</Header>
      <Link href="https://youtube.com/@scivic1007" target="_blank">youtube</Link>
      <Link href="https://x.com/seventygrandW" target="_blank">twitter</Link>
      <Link href="https://github.com/civic1007" target="_blank">github</Link>
      <Link href="https://discord.com/users/civic1007" target="_blank">discord</Link>
    </Container>
  );
};

export default SocialMedia;
