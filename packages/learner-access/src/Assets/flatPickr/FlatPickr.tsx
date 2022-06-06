import React, { useState } from 'react';
import 'flatpickr/dist/themes/material_blue.css';
import './index.css';
import Flatpickr from 'react-flatpickr';

export const Calender = (): JSX.Element => {
  const [date, setDate] = useState<object>();
  return (
    <Flatpickr
      className="focus:outline-none h-10 mb-4 text-base py-2 px-4 w-full bg-white rounded-none border-solid border box-border block mx-0 mt-0 p-2 text-black cursor-pointer"
      value={date}
      onChange={(date: React.SetStateAction<object | undefined>) => {
        setDate(date);
      }}
    />
  );
};
