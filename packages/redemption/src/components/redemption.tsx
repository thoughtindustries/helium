import React, { useState } from 'react';
import Registration from './registration';
import CodeList from './code-list';
import Prompt from './prompt';
import Banner from './banner';
import TermsAndConditions from './terms-and-conditions';
import { RedemptionProps } from './types';

const Redemption = ({ isLoggedIn }: RedemptionProps): JSX.Element => {
  const styles = {
    container: 'mx-4 md:mx-40 text-center self-center'
  };

  const [valid, setValid] = useState<boolean | undefined>();

  return (
    <form className={styles.container}>
      {isLoggedIn ? (
        <>
          <Prompt />
          <Banner valid={valid} />
          <CodeList valid={valid} validate={setValid} />
          <TermsAndConditions valid={valid} />
        </>
      ) : (
        <Registration valid={valid} validate={setValid} />
      )}
    </form>
  );
};

Redemption.displayName = 'Redemption';
Redemption.Registration = Registration;
export default Redemption;
