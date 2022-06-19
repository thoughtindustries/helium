import React, { ReactNode, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import CodeBox from './code-box';
import { ResponseProps } from './types';

const CodeList = ({ setResponse }: ResponseProps): JSX.Element => {
  const styles = {
    addCodeStyle: 'flex justify-left text-indigo-700 text-sm'
  };

  const { t } = useTranslation();
  const [count, setCount] = useState(0);
  const [list, setList] = useState<ReactNode[]>([
    <CodeBox key={count} setResponse={setResponse} />
  ]);

  useEffect(() => {
    if (count > 0) {
      setList([...list, <CodeBox key={count} setResponse={setResponse} />]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  return (
    <div>
      {list}
      <button
        className={styles.addCodeStyle}
        type="button"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        {t('redemption-code.add-redemption-code')}
      </button>
    </div>
  );
};

CodeList.displayName = 'CodeList';
export default CodeList;
