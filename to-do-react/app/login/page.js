'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import UserForm from '../../components/UserForm';
import UserInput from '../../components/UserInput';
import handleLogin from '../../services/user/login';
import { toast } from '../../components/Alert';
import { TODO_ROUTE } from '../../components/constants';

const LogIn = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    try {
      const { status, data } = await handleLogin(email, password);

      if (status === 200) {
        toast.success('Log-in successful! You can now edit your To Do List.');
        localStorage.setItem('UserState', JSON.stringify(data));
        router.push(TODO_ROUTE);
      }
    } catch (error) {
      toast.error(
        'There was an error trying to log in. Please try again later.',
      );
    }
  };

  return (
    <UserForm
      onSubmit={handleLoginSubmit}
      boxText="WELCOME TO THE TODO APP"
      boxColor="BoxUser-color"
      boxSize="BoxUser-size-login"
      classboxlogin="BoxUser-text-login"
      footerText="Already have an account?"
      footerTextLink="Sign Up here!"
      textHref="/signup"
    >
      <UserInput
        idInput="Email-Address"
        laberHtmlFor="Email-Address"
        labelText="Email Address"
        placeholder="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <UserInput
        idInput="Password-login"
        laberHtmlFor="Password-login"
        labelText="Password"
        placeholder="***************"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    </UserForm>
  );
};

export default LogIn;
