import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setMyLocation } from '../MapPage/mapSlice';
import { getFakeLocation } from './FAKE_LOCATIONS';
import './Login.css';
import LoginButton from './LoginButton';
import { LoginInput } from './LoginInput';
import type { LoginInputProps } from './LoginInput';
import Logo from './Logo';

const isUsernameValid = (username: LoginInputProps['username']) => {
  return username.length > 0 && username.length < 10 && !username.includes(' ');
};

const locationsOptions = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

export const Login = () => {
  const [username, setUsername] = useState('');
  const [locationErrorOccurred, setLocationErrorOccurred] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = () => {
    navigate('/map');
  };

  const onSuccess = (position: unknown) => {
    dispatch(
      setMyLocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      }),
    );
  };

  const onError = (error: GeolocationPositionError) => {
    console.log('Error occurred when trying to get the location');
    console.log(error);
    setLocationErrorOccurred(true);
  };

  useEffect(() => {
    // Commented only in development to test for fake Locations
    /*
    navigator.geolocation.getCurrentPosition(
      onSuccess,
      onError,
      locationsOptions,
    ); 
    */

    // Remove this when in production
    onSuccess(getFakeLocation());
  }, []);

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
          disabled={!isUsernameValid(username) || locationErrorOccurred}
          onClickHandler={handleLogin}
        />
      </div>
    </div>
  );
};
