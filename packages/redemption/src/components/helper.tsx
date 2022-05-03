import React, { ReactNode } from 'react';
import CodeBox from './code-box';

export const codeList = (num: number) => {
  const list: ReactNode[] = [];
  for (let i = 0; i < num; i++) {
    list.push(<CodeBox />);
  }
  return list;
};
