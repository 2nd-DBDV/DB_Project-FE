import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/Header';

const MembershipContainer = styled.div`
  padding: 20px;
  margin: 10px 20%;
  text-align: center;
`;

const MembershipInfo = styled.div`
  background-color: #f0f0f0;
  a {
    display: block;
    margin: 10px 0;
    text-align: left;
    font-size: 14px;
    color: #333;
    text-decoration: none;
  }
`;

const ButtonContainer = styled.div`
  padding: 50px; 
`;

const JoinButton = styled(Link)`
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

const Membership = () => {
  return (
    <div>
      <Header />

      <MembershipContainer>
        <MembershipInfo>
          <h3>[회원가입안내]</h3>
          <a>● 서울자전거 따릉이는 만14세 이상(일반회원), 만 13세로 구분하여 회원가입이 가능합니다.</a>
          <a>● 만 13세는 보호자(부모,법정대리인) 본인인증을 통해서 회원가입이 가능하므로, 반드시 보호자 핸드폰에서 진행하여 주시기 바랍니다.</a>
          <a>● 위의 사항에 동의할 경우에만 아래의 가입하기 버튼을 눌러 진행하여 주기 바랍니다.</a>
        </MembershipInfo>
              
        <ButtonContainer>
          <JoinButton to="/link1">만 13세 회원가입하기</JoinButton>
          <JoinButton to="/link2">만 14세 이상 회원가입하기</JoinButton>
        </ButtonContainer>
      </MembershipContainer>
    </div>
  );
};

export default Membership;
