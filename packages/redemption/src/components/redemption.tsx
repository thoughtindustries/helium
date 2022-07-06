import React, { useState } from 'react';
import CodeList from './code-list';
import Banner from './banner';
import { Props } from './types';

const Redemption = (): JSX.Element => {
  const styles = {
    container: 'mx-4 md:mx-40 text-center self-center'
  };

  const [response, setResponse] = useState<Props>();

  return (
    <form className={styles.container}>
      <Banner
        valid={response?.valid}
        alreadyRedeemed={response?.alreadyRedeemed}
        codeExpired={response?.codeExpired}
      />
      <CodeList setResponse={setResponse} />
    </form>
  );
};

Redemption.displayName = 'Redemption';
export default Redemption;
