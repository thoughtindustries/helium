import React from 'react';
import SigninPage from '../../components/Signin/SigninPage';

export { Page };

function Page() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <SigninPage
        heading="Sign in to your account"
        field1="Email address"
        field2="Password"
        primaryButtonUrl="/"
        primaryButtonText="Sign in"
        secondaryButtonUrl="/"
        secondaryButtonText="Forgot your password?"
      />
    </div>
  );
}
