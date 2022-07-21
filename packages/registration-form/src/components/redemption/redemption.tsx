import React from 'react';
import CodeList from './code-list';
import Banner from './banner';

const Redemption = (): JSX.Element => {
  return (
    <form>
      <Banner />
      <CodeList />
    </form>
  );
};

Redemption.displayName = 'Redemption';
export default Redemption;
