import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #ededed;
  color: #222;
  padding: 10px;
  text-align: center;
`;

const Nav = styled.nav`
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    li {
      margin: 0 10px;
      a {
        text-decoration: none;
        color: #222;
        font-weight: bold;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <h1>따릉이 홈페이지</h1>
      <Nav>
        <ul>
          <li><Link to="/">홈</Link></li>
          <li><Link to="/bike_info">사업소개</Link></li>
          <li><Link to="/stations">대여소</Link></li>
          <li><Link to="/opinionBoard">문의/FAQ</Link></li>
        </ul>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
