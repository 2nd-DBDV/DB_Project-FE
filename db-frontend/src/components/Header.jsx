import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import myImage from '../images/logo.png';

const HeaderWrapContainer = styled.header`
  padding: 10px 20% 10px 20%;
  margin-bottom: 10px;
  border-bottom: 0.5px solid black;
`;


const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 10px;
  border-bottom: 0.5px solid black;

  ul {
    list-style: none;
    padding: 15px;
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

const MainLogoContainer = styled.img`
  width: 100px;
  height: auto;
  display: flex;
  justify-content: left;
`;

const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  
`;

const Nav = styled.nav`
display: flex;
justify-content: space-between;
align-items: center;

ul {
  list-style: none;
  padding: 15px;
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

const Header = () => {
  return (
    <HeaderWrapContainer>

      <TopContainer>
        <ul>
          <li>English</li>
          <li>中國語</li>
          <li>日本語</li>
          <li>한국어</li>
        </ul>

        <ul>
          <li><Link to="/login">로그인</Link></li>
          <li><Link to="/membership">회원가입</Link></li>
        </ul>
      </TopContainer>

      <Nav>
        <ul>
          <li>
            <LogoLink to="/">
              <MainLogoContainer src = {myImage} alt="Logo" />
            </LogoLink>
          </li>
        </ul>

        <ul>
          <li><Link to="/bike_info">사업소개</Link></li>
          <li><Link to="/stations">대여소 조회</Link></li>
          <li><Link to="/opinionBoard">게시판</Link></li>
          <li><Link to="/ranking">랭킹</Link></li>
        </ul>
      </Nav>

    </HeaderWrapContainer>
  );
};

export default Header;
