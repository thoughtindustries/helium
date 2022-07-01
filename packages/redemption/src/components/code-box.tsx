import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useRedeemRedemptionCodeMutation } from '../graphql';
import { ResponseProps } from './types';

const CodeBox = ({ setResponse, setRedeemedCodes, redeemedCodes }: ResponseProps): JSX.Element => {
  const styles = {
    buttonStyle:
      'text-white bg-indigo-700 disabled:bg-indigo-300 disabled:cursor-default hover:bg-indigo-600 inline-block font-normal text-sm no-underline py-4 w-full md:w-1/3 rounded-md md:rounded-l-none mb-4',
    inputStyle:
      'p-4 text-sm w-full md:w-2/3 ring-1 ring-gray-300 ring-inset shadow-inner focus:outline-none focus:ring-gray-500 mb-4'
  };

  const { t } = useTranslation();
  const [RedeemRedemptionCodeMutation, { loading }] = useRedeemRedemptionCodeMutation();
  const [code, setCode] = useState<string>('');
  const [valid, setValid] = useState<boolean | undefined>();

  const handleInput = (value: string) => {
    setCode(value);
  };

  const handleSubmit = async () => {
    await RedeemRedemptionCodeMutation({ variables: { code: code } })
      .then(response => {
        if (response && response.data && response.data.RedeemRedemptionCode) {
          setResponse(response.data.RedeemRedemptionCode);
          setValid(response.data.RedeemRedemptionCode?.valid);
          if (response.data.RedeemRedemptionCode.valid) {
            setRedeemedCodes([...redeemedCodes, code]);
          }
        }
      })
      .catch(error => console.log('Redemption Request Error: ', error));
  };

  return (
    <div>
      <input
        disabled={loading || valid}
        className={styles.inputStyle}
        placeholder={t('redemption-code.placeholder')}
        onChange={e => handleInput(e.target.value)}
      />
      <button
        className={styles.buttonStyle}
        disabled={loading || valid}
        type="button"
        onClick={() => handleSubmit()}
      >
        {loading
          ? t('redemption-code.validating')
          : valid
          ? t('redemption-code.validated')
          : t('redemption-code.validate')}
      </button>
    </div>
  );
};

CodeBox.displayName = 'CodeBox';
export default CodeBox;
