import React from 'react';

interface LoginButtonProps {
  onClickHandler: () => void;
  disabled?: boolean;
}

const LoginButton: React.FC<LoginButtonProps> = ({
  onClickHandler,
  disabled,
}) => {
  return (
    <button disabled={disabled} className='l_button' onClick={onClickHandler}>
      Login
    </button>
  );
};

export default LoginButton;
