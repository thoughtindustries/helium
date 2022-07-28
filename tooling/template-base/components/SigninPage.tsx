import React from 'react';
import Logo from './Navigation/Logo';

const SigninPage = (props: {
  heading: string;
  field1: string;
  field1Placeholder?: string;
  field2?: string;
  subHeading?: string;
  primaryButtonUrl: string;
  primaryButtonText: string;
  secondaryButtonUrl: string;
  secondaryButtonText: string;
}) => {
  return (
    <div className="flex flex-col items-center py-12 px-8 space-y-4">
      {/* logo component */}
      <Logo logoLink="/" style="h-12 w-12" />
      {/* heading */}
      <div className="text-3xl font-bold font-secondary">{props.heading}</div>
      {/* subheading */}
      <div className="font-primary text-gray-500 text-sm text-center sm:w-96 w-80">
        {props.subHeading}
      </div>
      {/* Card Element */}
      <div className="p-8 bg-white rounded-md space-y-6 font-primary sm:w-96">
        {/* field 1 */}
        <div>
          <label className="text-sm font-semibold text-left">{props.field1}</label>
          <input
            type="text"
            id={props.field1}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder={props.field1Placeholder}
            required
          ></input>
        </div>
        {/* field 2 optional */}
        {props.field2 && (
          <div>
            <label className="text-sm font-semibold text-left">{props.field2}</label>
            <input
              type="text"
              id={props.field2}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            ></input>
          </div>
        )}
        {/* sign in button */}
        <form action={props.primaryButtonUrl}>
          <button
            type="submit"
            className="h-12 p-2.5 px-4 bg-indigo-800 hover:bg-blue-500 rounded-md w-full"
          >
            <div className="text-sm font-semibold text-white">{props.primaryButtonText}</div>
          </button>
        </form>
        <form action={props.secondaryButtonUrl}>
          <div className="p-8 text-indigo-800 hover:text-blue-500 text-center font-semibold">
            {props.secondaryButtonText}
          </div>
        </form>
      </div>
    </div>
  );
};

export default SigninPage;
