import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import Header from '../components/Header';

const LoginFormContainer = styled.div`
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const LoginLabel = styled.label`
  display: block;
  margin-bottom: 10px;
  text-align: left;
`;

const LoginInput = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 15px;
  box-sizing: border-box;
`;

const LoginButton = styled.button`
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Login = () => {
  const [userid, setUserid] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleUseridChange = (e) => {
    setUserid(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    axios
      .post('http://localhost:8080/login', {
        user_id: userid,
        password: password,
      })
      .then((res) => {
        if (res.data.success) {
          navigate('/');
        } else {
          console.log('로그인 실패:', res.data.error);
        }
      })
      .catch((err) => {
        console.log('에러');
      });
  };

  return (
    <div>
        <Header/>
        <LoginFormContainer>
        <h2>로그인</h2>
        <form>
            <LoginLabel>
            아이디:
            <LoginInput type="text" value={userid} onChange={handleUseridChange} />
            </LoginLabel>
            <LoginLabel>
            비밀번호:
            <LoginInput type="password" value={password} onChange={handlePasswordChange} />
            </LoginLabel>
            <LoginButton type="button" onClick={handleLogin}>
            로그인
            </LoginButton>
        </form>
        </LoginFormContainer>
    </div>
  );
};

export default Login;
