import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
const HomeContainer = styled.div`
  padding: 20px;
  text-align: center;
`;

const Home = () => {
  return (
    <div>
      <Header/>
      <HomeContainer>
        <h2>따릉이 홈페이지</h2>
      </HomeContainer>
    </div>
  );
};

export default Home;
