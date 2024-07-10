import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import profilePic from './avatar.png'; // Make sure to have your avatar.png in the src directory

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #f0f0f0;
  position: relative;
`;

const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 20px;
`;

const Name = styled.h1`
  font-size: 2rem;
  color: #333;
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: #555;
  text-align: center;
  max-width: 600px;
  margin-top: 20px;
`;

const Button = styled(Link)`
  color: black;
  padding: 10px 20px;
  border: none;
  text-decoration: none;
  font-size: 1rem;
  margin-top: 20px;

  &:hover {
    text-decoration: underline;
  }
`;

const About = () => {
  return (
    <Container>
      <ProfileImage src={profilePic} alt="profile" />
      <Name>civic1007</Name>
      <Description>im a pretty good react.js developer. like this website is coded in it rn!.</Description>
      <Button to="/social-media">social media</Button>
    </Container>
  );
};

export default About;
