import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import LoginButton from './LoginButton';
import { LoginInput } from './LoginInput';
import type { LoginInputProps } from './LoginInput';
import Logo from './Logo';

const isUsernameValid = (username: LoginInputProps['username']) => {
  return username.length > 0 && username.length < 10 && !username.includes(' ');
};

export const Login = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate('/map');
  };
  const [username, setUsername] = useState('');
  return (
    <div className='l_page_container'>
      <div className='l_page_form'>
        <Logo />
        <LoginInput
          label='Input'
          username={username}
          setUsername={setUsername}
        />
        <LoginButton
          disabled={!isUsernameValid(username)}
          onClickHandler={handleLogin}
        />
      </div>
    </div>
  );
};
