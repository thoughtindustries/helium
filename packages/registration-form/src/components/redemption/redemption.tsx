import React from 'react';
import CodeList from './code-list';
import Banner from './banner';

const Redemption = (): JSX.Element => {
  return (
    <>
      <Banner />
      <CodeList />
    </>
  );
};

Redemption.displayName = 'Redemption';
export default Redemption;
