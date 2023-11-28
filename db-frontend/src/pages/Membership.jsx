import React from 'react';
import styled from 'styled-components';

const MembershipContainer = styled.div`
  padding: 20px;
  text-align: center;
`;

const MembershipInfo = styled.div`
  background-color: #f0f0f0;
  margin: 10px 20%;

  a {
    display: block;
    margin: 10px 0;
    text-align: left;
    font-size: 14px;
    color: #333;
    text-decoration: none;
  }
`;

const Membership = () => {
  return (
    <MembershipContainer>

      <MembershipInfo>
        <h3>[회원가입안내]</h3>
        <a>● 서울자전거 따릉이는 만14세 이상(일반회원), 만 13세로 구분하여 회원가입이 가능합니다.</a>
        <a>● 만 13세는 보호자(부모,법정대리인) 본인인증을 통해서 회원가입이 가능하므로, 반드시 보호자 핸드폰에서 진행하여 주시기 바랍니다.</a>
        <a>● 위의 사항에 동의할 경우에만 아래의 가입하기 버튼을 눌러 진행하여 주기 바랍니다.</a>
      </MembershipInfo>

    </MembershipContainer>
  );
};

export default Membership;
