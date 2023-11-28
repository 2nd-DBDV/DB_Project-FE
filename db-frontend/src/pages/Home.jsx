import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import mainImage from '../images/main_img.jpg'

const HomeContainer = styled.div`
  padding: 20px;
  text-align: center;

  img {
    max-width: 90%;
    height: auto;
    margin-top: 10px; 
  }
`;

const Home = () => {
  return (
    <div>
      <Header/>
      <HomeContainer>
        <img src={mainImage} alt="Main" />
      </HomeContainer>
    </div>
  );
};

export default Home;
