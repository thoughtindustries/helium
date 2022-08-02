import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useValidateRedemptionCodeMutation } from '../../graphql';
import { useRegistrationContext } from '../registration/registration';

const CodeBox = (): JSX.Element => {
  const { t } = useTranslation();
  const [ValidateRedemptionCodeMutation, { loading }] = useValidateRedemptionCodeMutation();
  const [code, setCode] = useState<string>('');
  const [valid, setValid] = useState<boolean | undefined>();
  const { setResponse, validatedRedemptionCodes, setValidatedRedemptionCodes } =
    useRegistrationContext();

  const handleInput = (value: string) => {
    setCode(value);
  };

  const handleSubmit = async () => {
    await ValidateRedemptionCodeMutation({ variables: { code: code } })
      .then(response => {
        if (response && response.data && response.data.ValidateRedemptionCode) {
          setResponse(response.data.ValidateRedemptionCode);
          setValid(response.data.ValidateRedemptionCode?.valid);
          if (response.data.ValidateRedemptionCode.valid) {
            setValidatedRedemptionCodes([...validatedRedemptionCodes, code]);
          }
        }
      })
      .catch(error => console.log('Redemption Request Error: ', error));
  };

  return (
    <div>
      <input
        disabled={loading || valid}
        className="p-4 text-sm w-full md:w-2/3 ring-1 ring-gray-300 ring-inset shadow-inner focus:outline-none focus:ring-gray-500 mb-4"
        placeholder={t('redemption-code.placeholder')}
        onChange={e => handleInput(e.target.value)}
      />
      <button
        className="text-white bg-indigo-700 disabled:bg-indigo-300 disabled:cursor-default hover:bg-indigo-600 inline-block font-normal text-sm no-underline py-4 w-full md:w-1/3 rounded-md md:rounded-l-none mb-4"
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
