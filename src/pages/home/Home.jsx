// 예시: Home.jsx
import React from 'react';
import styled from 'styled-components';

// 스타일 정의
const TopStyle = styled.div`
  color: #333;
  font-size: 18px;
  padding: 20px;
  text-align: center;
`;

const Home = () => {
  return (
    <TopStyle>
      <p>따릉이 메인 페이지</p>
    </TopStyle>
  );
}

export default Home;
