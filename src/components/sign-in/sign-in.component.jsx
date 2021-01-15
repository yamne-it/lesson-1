import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';

// import { auth } from '../../firebase/firebase.utils';
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions'

import './sign-in.styles.scss';

const SignIn = (props) => {
  const [signIn, setSignIn] = useState({ email: '', password: '' });

  const dispatch = useDispatch();
  const executeGoogleSignInStart = useCallback(() => dispatch(googleSignInStart()), [
    dispatch,
  ]);
  const executeEmailSignInStart = useCallback(emailAndPassword => dispatch(emailSignInStart(emailAndPassword)), [
    dispatch,
  ])

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = signIn;
    executeEmailSignInStart({ email, password })
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
          label='Email'
          required
        />
        <FormInput
          name='password'
          type='password'
          value={signIn.password}
          handleChange={handleChange}
          label='Password'
          required
        />
        <div className='buttons'>
          <CustomButton type='submit'>Sign In</CustomButton>
          <CustomButton type='button' onClick={executeGoogleSignInStart} isGoogleSignIn>
            Sign In with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );

  return signInLayout;
};

export default SignIn;
