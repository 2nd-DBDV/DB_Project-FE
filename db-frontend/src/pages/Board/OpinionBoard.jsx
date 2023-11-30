import React from 'react';
import styled from 'styled-components';
import Header from '../../components/Header';
import { Link } from 'react-router-dom';

const OpinionBoardContainer = styled.div`
  padding: 20px;
  text-align: center;
`;

const ButtonContainer = styled.div`
  padding: 50px; 
`;

const BoardButton = styled(Link)`
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 50px;
  text-decoration: none;
`;

const OpinionBoard = () => {
  return (
    <div>
      <Header/>
      <OpinionBoardContainer>
        <ButtonContainer>
          <BoardButton to="/userboard">유저 게시판</BoardButton>
          <BoardButton to="/link2">고장 신고 접수 게시판</BoardButton>
        </ButtonContainer>
      </OpinionBoardContainer>
    </div>
  );
};

export default OpinionBoard;
