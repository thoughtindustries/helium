import React from 'react';

export { Page };
export { documentProps };

const documentProps = {
  title: 'Home Page',
  description: 'The home page'
};

function Page() {
  return (
    <>
      <h1>Hello World</h1>
    </>
  );
}
