import { useState } from 'react';
import './styles.css';

export type TextFieldProps = {
  isError?: boolean;
};

export const TextField: React.FC<TextFieldProps> = ({ isError }) => {
  const [text, setText] = useState('');
  const handlerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };
  return (
    <input
      className='text-field'
      type='text'
      value={text}
      data-error={isError}
      onChange={handlerChange}
    />
  );
};
