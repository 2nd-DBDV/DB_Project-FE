import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
  bottom: 0;
  width: 100%;
  padding: 10px 20% 10px 20%;
  text-align: center;
  background-color: #f0f0f0;
`;

const BottomInfo = styled.div`
  ul {
    list-style: none;
    padding: 10px;
    margin: 0;
    display: flex;

    li {
      margin: 0px 10px;
      a {
        text-decoration: none;
        color: #222;
        font-weight: bold;
      }
    }
  }
`;

const Footer = () => {
  return (
    <div>
      <FooterContainer>
        <BottomInfo>
          <ul>
            <li>이용약관</li>
            <li>위치정보관련 약관</li>
            <li>개인정보처리방침</li>
            <li>보험안내</li>
            <li>도움주신 분</li>
          </ul>

          <ul>
            <li>서울시 노원구 광운로 20 (월계동 447-1) 광운대학교(01897)</li>
            <li>COPYRIGHT ⓒ 2023 bikeseoul All RIGHTS RESERVED.</li>
          </ul>
        </BottomInfo>
      </FooterContainer>
    </div>
  );
};

export default Footer;
