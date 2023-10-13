'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import UserForm from '../../components/UserForm';
import UserInput from '../../components/UserInput';
import handleSignUp from '../../services/user/signup';
import { toast } from '../../components/Alert';
import { LOGIN_ROUTE } from '../../components/constants';

const SignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSignUpSubmit = async (event) => {
    event.preventDefault();

    try {
      const { status, data } = await handleSignUp(email, firstName, password);
      if (status === 200) {
        toast.success(
          'Sign-up successful! You can now log in with your credentials.',
        );
        router.push(LOGIN_ROUTE);
      }
    } catch (error) {
      toast.error('Error signing up. Please try again later.');
    }
  };

  return (
    <UserForm
      onSubmit={handleSignUpSubmit}
      paragraphText="I agree to receive e-mails from your company and your terms and conditions."
      formText="Add me to your mailing list"
      footerText="Already have an account?"
      footerTextLink="Login here!"
      textHref="/login"
      showCheckBox
      boxText="Sign Up for Our Newsletter"
      boxColor="BoxUser-color"
      boxSize="BoxUser-size"
      paragraph="Fill out your information below to be signed upfor our informative newsletter."
    >
      <UserInput
        idInput="First-Name"
        laberHtmlFor="First-Name"
        labelText="First Name"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <UserInput
        idInput="Email-Address"
        laberHtmlFor="Email-Address"
        labelText="Email Address"
        placeholder="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <UserInput
        idInput="Password-sign-up"
        laberHtmlFor="Password-sign-up"
        labelText="Password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    </UserForm>
  );
};

export default SignUp;
