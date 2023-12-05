import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import axios from 'axios';

const SignUpFormContainer = styled.div`
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const SignUpLabel = styled.label`
  display: block;
  margin-bottom: 10px;
  text-align: left;
`;

const SignUpInput = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 15px;
  box-sizing: border-box;
`;

const SignUpButton = styled.button`
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const SeniorSignup = () => {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userid, setUserid] = useState('');
  const [nickname, setNickname] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleUseridChange = (e) => {
    setUserid(e.target.value);
  };

  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };

  const handleSignUp = () => {
    axios
      .post('http://localhost:8080/senior_signup', {
        user_name: username,
        nickname: nickname,
        user_id: userid, 
        email: email,    
        password: password
      })
      .then((res) => {
      })
      .catch((err) => {
        console.log('에러');
      });
  };

  return (
    <div>
      <Header/>
      <SignUpFormContainer>
        <h2>회원가입</h2>
        <form>
          <SignUpLabel>
            이름:
            <SignUpInput type="text" value={username} onChange={handleUsernameChange} />
          </SignUpLabel>
          <SignUpLabel>
            닉네임:
            <SignUpInput type="text" value={nickname} onChange={handleNicknameChange} />
          </SignUpLabel>
          <SignUpLabel>
            이메일:
            <SignUpInput type="email" value={email} onChange={handleEmailChange} />
          </SignUpLabel>
          <SignUpLabel>
            아이디:
            <SignUpInput type="text" value={userid} onChange={handleUseridChange} />
          </SignUpLabel>
          <SignUpLabel>
            비밀번호:
            <SignUpInput type="password" value={password} onChange={handlePasswordChange} />
          </SignUpLabel>
          <SignUpButton type="button" onClick={handleSignUp}>
            가입하기
          </SignUpButton>
        </form>
      </SignUpFormContainer>
    </div>
  );
};

export default SeniorSignup;
