import React from 'react'
import SignInForm from '../sign-in/sign-in-form.component';
import SignUpForm from '../sign-up/sign-up-form.component';

import "./authentication.styles.scss";

const Authentication = () => {
  return (
    <div className="auth-container">
        <SignInForm />
        <SignUpForm />
    </div>
  )
}

export default Authentication
