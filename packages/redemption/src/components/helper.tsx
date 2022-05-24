import React, { ReactNode } from 'react';
import CodeBox from './code-box';
import { CodeListProps } from './types';

export const codeList = ({ num, handleInput, handleSubmit, valid, validating }: CodeListProps) => {
  const list: ReactNode[] = [];
  for (let i = 0; i < num; i++) {
    list.push(
      <CodeBox input={handleInput} submit={handleSubmit} valid={valid} validating={validating} />
    );
  }
  return list;
};

export const isEmpty = (obj: CurrentUser) => {
  return Object.keys(obj).length === 0;
};
