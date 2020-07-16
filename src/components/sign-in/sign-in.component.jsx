import React, { useState } from 'react';

import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';

import { signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

const SignIn = (props) => {
  const [signIn, setSignIn] = useState({ email: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSignIn({ email: '', password: '' });
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setSignIn({ ...signIn, [name]: value });
  };

  const signInLayout = (
    <div className='sign-in'>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name='email'
          type='email'
          value={signIn.email}
          handleChange={handleChange}
          label='email'
          required
        />
        <FormInput
          name='password'
          type='password'
          value={signIn.password}
          handleChange={handleChange}
          label='password'
          required
        />
        <div className='buttons'>
          <CustomButton type='submit'>Sign In</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            Sign In with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );

  return signInLayout;
};

export default SignIn;
