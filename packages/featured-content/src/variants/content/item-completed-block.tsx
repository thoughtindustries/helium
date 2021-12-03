import React from 'react';
import { useTranslation } from 'react-i18next';

const ItemCompletedBlock = () => {
  const { t } = useTranslation();
  return (
    <div className="block absolute h-full left-0 top-0 w-full text-center bg-white bg-opacity-80 z-1">
      <div className="absolute w-full top-1/2 transform -translate-y-1/2">
        <div>
          <i
            className="bg-white text-3xl inline-block p-4 rounded-full border-4 border-solid border-white border-opacity-50 my-0 mx-auto bg-clip-padding"
            aria-label="Completed"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="#5bb65c"
            >
              <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
            </svg>
          </i>
        </div>
        <p className="mt-1 text-base">{t('course-completed-decal')}</p>
      </div>
    </div>
  );
};

ItemCompletedBlock.displayName = 'ItemCompletedBlock';

export default ItemCompletedBlock;
