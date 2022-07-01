import React, { useState } from 'react';
import Registration from './registration';
import CodeList from './code-list';
import Prompt from './prompt';
import Banner from './banner';
import TermsAndConditions from './terms-and-conditions';
import { UserProps, Props } from './types';

const Redemption = ({ isLoggedIn }: UserProps): JSX.Element => {
  const styles = {
    container: 'mx-4 md:mx-40 text-center self-center'
  };

  const [response, setResponse] = useState<Props>();
  const [redeemedCodes, setRedeemedCodes] = useState<Array<string>>([]);

  return (
    <form className={styles.container}>
      {isLoggedIn ? (
        <>
          <Prompt />
          <Banner
            valid={response?.valid}
            alreadyRedeemed={response?.alreadyRedeemed}
            codeExpired={response?.codeExpired}
          />
          <CodeList
            setResponse={setResponse}
            redeemedCodes={redeemedCodes}
            setRedeemedCodes={setRedeemedCodes}
          />
          <TermsAndConditions valid={response?.valid} redeemedCodes={redeemedCodes} />
        </>
      ) : (
        <Registration
          response={response}
          setResponse={setResponse}
          redeemedCodes={redeemedCodes}
          setRedeemedCodes={setRedeemedCodes}
        />
      )}
    </form>
  );
};

Redemption.displayName = 'Redemption';
Redemption.Registration = Registration;
export default Redemption;
