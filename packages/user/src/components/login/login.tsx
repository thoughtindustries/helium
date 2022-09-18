import React, { useState, KeyboardEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { useLoginMutation } from '../../graphql';
import { isEmpty } from 'lodash';
import { Banner } from '../banner';
import { ValidationProps } from '../types';

const Login = (): JSX.Element => {
  const { t } = useTranslation();
  const [LoginMutation] = useLoginMutation();
  const [creds, setCreds] = useState({ email: '', password: '' });
  const [response, setResponse] = useState<ValidationProps>();

  const handleLogin = async () => {
    await LoginMutation({
      variables: { email: creds.email, password: creds.password }
    })
      .then(() => {
        return true;
      })
      .catch(error => {
        if (error.graphQLErrors[0] && error.graphQLErrors[0].message) {
          const message = error.graphQLErrors[0].message;
          if (message === '401 Unauthorized') {
            setResponse({ valid: false, message: t('login-invalid-password') });
          }
          if (message === '423 Locked') {
            setResponse({ valid: false, message: t('login-disabled') });
          }
          if (message === 'User Throttled') {
            setResponse({ valid: false, message: t('login-too-many-attempts') });
          }
        }
      });
  };

  const handleKeypress = (e: KeyboardEvent) => {
    if (e.code === 'Enter') {
      handleLogin();
    }
  };

  const handleOnBlur = (e: React.FormEvent<HTMLInputElement>, field: string) => {
    const classList = (e.target as HTMLInputElement).classList;

    if (isEmpty(field)) {
      classList.remove('ring-gray-300');
      classList.add('ring-red-500');
    } else {
      classList.remove('ring-red-500');
      classList.add('ring-gray-300');
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen mx-4 md:mx-40">
      <Banner valid={response?.valid} message={response?.message} />
      <h2 className="text-2xl pb-4">{t('sign-in')}</h2>
      <input
        className="p-4 text-sm w-full ring-1 ring-gray-300 ring-inset shadow-inner focus:outline-none focus:ring-gray-500 mb-4"
        placeholder={t('register-email')}
        onChange={e => setCreds({ ...creds, email: e.target.value })}
        onBlur={e => handleOnBlur(e, creds.email)}
        onKeyPress={handleKeypress}
      />
      <input
        className="p-4 text-sm w-full ring-1 ring-gray-300 ring-inset shadow-inner focus:outline-none focus:ring-gray-500 mb-4"
        placeholder={t('register-password')}
        onChange={e => setCreds({ ...creds, password: e.target.value })}
        onBlur={e => handleOnBlur(e, creds.password)}
        onKeyPress={handleKeypress}
        type="password"
      />
      <div className="flex flex-col-reverse md:flex-row justify-between w-full">
        <button
          className="pt-4 md:pt-0"
          type="button"
          onClick={() => {
            window.location.href = '/learn/forgot';
          }}
        >
          <p>{t('forgot-password-question')}</p>
        </button>

        <button
          className="text-white bg-indigo-700 hover:bg-indigo-600 inline-block font-normal text-sm text-center no-underline py-2 w-full md:w-1/4 rounded-md disabled:bg-indigo-300 disabled:cursor-default"
          type="button"
          onClick={() => handleLogin()}
        >
          {t('sign-in')}
        </button>
      </div>
    </div>
  );
};

Login.displayName = 'Login';
export default Login;
