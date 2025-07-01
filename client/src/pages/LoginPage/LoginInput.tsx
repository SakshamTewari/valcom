import React from 'react';

interface LoginInputProps {
  label: string;
  username: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
}

const LoginInput = (props: LoginInputProps) => {
  const { username, setUsername, label } = props;

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  return (
    <div className='l_input_group'>
      <label className='l_label'>{label}</label>
      <input
        className='l_input'
        placeholder='Input'
        value={username}
        onChange={handleValueChange}
      />
    </div>
  );
};

export { LoginInput };
export type { LoginInputProps };
