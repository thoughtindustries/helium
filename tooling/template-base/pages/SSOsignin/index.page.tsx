import React from 'react';
import SigninPage from '../../components/SigninPage';

export { Page };

function Page() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <SigninPage
        heading="Enter Custom Domain"
        subHeading={
          "To go to your company's login page, enter your Thought Industries company domain name."
        }
        field1="Your company domain"
        field1Placeholder="http:// domain.thoughtindustries.com"
        primaryButtonUrl="/"
        primaryButtonText="Continue with SSO"
        secondaryButtonUrl="/"
        secondaryButtonText={"What's my company domain?"}
      />
    </div>
  );
}
