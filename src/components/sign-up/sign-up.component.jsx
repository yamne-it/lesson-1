import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux' 

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signUpStart } from '../../redux/user/user.actions'

// import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './sign-up.styles.scss';

const SignUp = (props) => {
  const [signUp, setSignUp] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const dispatch = useDispatch()
  const exectuteSignUpStart = useCallback((userDetails) => dispatch(signUpStart(userDetails)), [ 
    dispatch,
  ])

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { displayName, email, password, confirmPassword } = signUp;

    if (password !== confirmPassword) {
      alert(`Passwords don't match`);
      return;
    }
    exectuteSignUpStart({ displayName, email, password })
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setSignUp({ ...signUp, [name]: value });
  };

  const signUpLayout = (
    <div className='sign-up'>
      <h2 className='title'>I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form className='sign-up-form' onSubmit={handleSubmit}>
        <FormInput
          type='text'
          name='displayName'
          value={signUp.displayName}
          onChange={handleChange}
          label='Display Name'
          required
        />
        <FormInput
          type='email'
          name='email'
          value={signUp.email}
          onChange={handleChange}
          label='Email'
          required
        />
        <FormInput
          type='password'
          name='password'
          value={signUp.password}
          onChange={handleChange}
          label='Password'
          required
        />
        <FormInput
          type='password'
          name='confirmPassword'
          value={signUp.confirmPassword}
          onChange={handleChange}
          label='Confirm Password'
          required
        />
        <div className='buttons'>
          <CustomButton type='submit'> Sign Up </CustomButton>
        </div>
      </form>
    </div>
  );

  return signUpLayout;
};

export default SignUp;
