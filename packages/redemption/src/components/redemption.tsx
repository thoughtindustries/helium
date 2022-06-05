import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Registration from './registration';
import { codeList, isEmpty } from './helper';
import Banner from './banner';
import { useRedeemRedemptionCodeMutation } from '../graphql';

const Redemption = ({ currentUser }: { currentUser: CurrentUser }): JSX.Element => {
  const styles = {
    container: 'mx-4 md:mx-40 text-center self-center',
    prompt: 'flex justify-center mb-8 text-sm text-gray-500',
    termsContainer: 'flex flex-col md:flex-row text-sm text-gray-500 justify-between',
    buttonStyle:
      'text-white bg-indigo-700 hover:bg-indigo-600 inline-block font-normal text-sm text-center no-underline py-2 w-full md:w-1/4 rounded-md',
    checkboxContainer: 'flex flex-row items-center mb-4',
    checkbox: 'mr-2',
    addCodeStyle: 'flex justify-left text-indigo-700 text-sm',
    terms: 'text-gray-700'
  };

  const { t } = useTranslation();
  const [count, setCount] = useState(1);
  const [RedeemRedemptionCodeMutation, { loading }] = useRedeemRedemptionCodeMutation();
  const [code, setCode] = useState('');
  const [valid, setValid] = useState<boolean | null | undefined>(null);

  const handleInput = (value: string) => {
    setCode(value);
  };

  const handleSubmit = () => {
    RedeemRedemptionCodeMutation({ variables: { code: code } })
      .then(response => setValid(response.data?.RedeemRedemptionCode?.valid))
      .catch(error => console.log('Redemption Request Error: ', error));
  };

  return (
    <form className={styles.container}>
      {!isEmpty(currentUser) ? (
        <>
          <h5 className={styles.prompt}>
            {t('redemption-code.redeem-course-copy-signed-in-manual-code')}
          </h5>
          <Banner valid={valid} />
          {codeList({
            num: count,
            handleInput: handleInput,
            handleSubmit: handleSubmit,
            valid: valid,
            validating: loading
          })}
          <button className={styles.addCodeStyle} type="button" onClick={() => setCount(count + 1)}>
            {t('redemption-code.add-redemption-code')}
          </button>
          <div className="w-full border-t border-gray-200 my-4"></div>
          <div className={styles.termsContainer}>
            <div className={styles.checkboxContainer}>
              <input className={styles.checkbox} type="checkbox" />
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                <p>{`${t('agree-terms')}\u00A0`}</p>
                <button className={styles.terms} type="button">
                  {t('terms-and-conditions')}
                </button>
              </div>
            </div>
            <button className={styles.buttonStyle} type="button">
              {t('redemption-code.redeem-code-preloaded')}
            </button>
          </div>
        </>
      ) : (
        <Registration
          valid={valid}
          handleInput={handleInput}
          handleSubmit={handleSubmit}
          loading={loading}
        />
      )}
    </form>
  );
};

Redemption.displayName = 'Redemption';
Redemption.Registration = Registration;
export default Redemption;
