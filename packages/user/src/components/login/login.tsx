import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLoginMutation } from '../../graphql';

const Login = (): JSX.Element => {
  const { t } = useTranslation();
  const [LoginMutation] = useLoginMutation();

  const handleLogin = async () => {
    await LoginMutation({
      variables: { email: '', password: '' }
    })
      .then(response => {
        const token = response.data?.Login;
      })
      .catch(error => console.log('Login Request Error: ', error));
  };

  return <button onClick={() => handleLogin()}>{t('sign-in')}</button>;
};

Login.displayName = 'Login';
export default Login;
