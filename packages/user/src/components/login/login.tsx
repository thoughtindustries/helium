import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLoginMutation } from '../../graphql';
import { isEmpty } from 'lodash';

const Login = (): JSX.Element => {
  const { t } = useTranslation();
  const [LoginMutation] = useLoginMutation();
  const [creds, setCreds] = useState({ email: '', password: '' });

  const handleLogin = async () => {
    await LoginMutation({
      variables: { email: creds.email, password: creds.password }
    })
      .then(response => {
        return response && response.data && response.data.Login ? true : false;
      })
      .catch(error => console.log('Login Request Error: ', error));
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
    <div className="flex flex-col justify-center items-center min-h-screen px-4">
      <h2 className="text-2xl pb-4">{t('sign-in')}</h2>
      <input
        className="p-4 text-sm w-full md:w-2/3 ring-1 ring-gray-300 ring-inset shadow-inner focus:outline-none focus:ring-gray-500 mb-4"
        placeholder={t('register-email')}
        onChange={e => setCreds({ ...creds, email: e.target.value })}
        onBlur={e => handleOnBlur(e, creds.email)}
      />
      <input
        className="p-4 text-sm w-full md:w-2/3 ring-1 ring-gray-300 ring-inset shadow-inner focus:outline-none focus:ring-gray-500 mb-4"
        placeholder={t('register-password')}
        onChange={e => setCreds({ ...creds, password: e.target.value })}
        onBlur={e => handleOnBlur(e, creds.password)}
        type="password"
      />
      <div className="flex flex-col-reverse md:flex-row justify-between w-full md:w-2/3">
        <button
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
