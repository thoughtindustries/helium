import React, { ReactNode, useState } from 'react';
import { useTranslation } from 'react-i18next';
import CodeBox from './code-box';
import { ResponseProps } from './types';

const CodeList = ({ setResponse }: ResponseProps): JSX.Element => {
  const { t } = useTranslation();
  const [count, setCount] = useState<number>(0);
  const [list, setList] = useState<ReactNode[]>([
    <CodeBox key={`code-box${count}`} setResponse={setResponse} />
  ]);

  return (
    <div>
      {list}
      <button
        className="flex justify-left text-indigo-700 text-sm"
        type="button"
        onClick={() => {
          setCount(count + 1);
          setList([...list, <CodeBox key={`code-box${count + 1}`} setResponse={setResponse} />]);
        }}
      >
        {t('redemption-code.add-redemption-code')}
      </button>
    </div>
  );
};

CodeList.displayName = 'CodeList';
export default CodeList;
