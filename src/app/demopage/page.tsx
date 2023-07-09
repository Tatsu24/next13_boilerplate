'use client';

import { useState } from 'react';
import { Button } from '@/components/Button';
import { Header } from '@/components/Header';
import { TextField } from '@/components/TextField';

const Page = () => {
  const [text, setText] = useState('');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };
  const showText = () => {
    alert(text);
  };
  return (
    <div>
      <Header>Hello Demo Page</Header>
      <TextField value={text} onChange={handleChange} />
      <Button onClick={showText}>ボタン</Button>
    </div>
  );
};

export default Page;
