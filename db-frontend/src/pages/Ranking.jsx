import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Header from '../components/Header';

const RankingContainer = styled.div`
  max-width: 600px;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const RankingList = styled.ul`
  list-style: none;
  padding: 0;
`;

const RankingItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 8px;
  border-bottom: 1px solid #ddd;

  span {
    flex: 1;
  }
`;

const RankingPage = () => {
  const [userRanks, setUserRanks] = useState([]);

  useEffect(() => {
    const fetchRankingData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/ranking');
        setUserRanks(response.data.User);
      } catch (error) {
        console.error('랭킹 데이터를 불러오는 데 실패했습니다.', error);
      }
    };

    fetchRankingData();
  }, []);

  return (
    <div>
      <Header />
      <RankingContainer>
        <h1>자전거 이용 랭킹</h1>
        <RankingList>
          {userRanks.map((user, index) => (
            <RankingItem key={index}>
              <span>{index + 1}</span>
              <span>{user.user_name}</span>
              <span>{user.distance} km</span>
            </RankingItem>
          ))}
        </RankingList>
      </RankingContainer>
    </div>
  );
};

export default RankingPage;
