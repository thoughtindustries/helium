import React, { ChangeEvent, createRef, SyntheticEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { CatalogURLSearchParams, SearchTermFormHiddenField } from '../../core';

const SearchInput = ({
  formAction,
  hiddenFields
}: {
  formAction: string;
  hiddenFields: SearchTermFormHiddenField[];
}): JSX.Element => {
  const [inputValue, setInputValue] = useState<string>('');
  const formRef = createRef<HTMLFormElement>();
  const { t } = useTranslation();
  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setInputValue(evt.target.value);
  };
  const handleSearch = (evt: SyntheticEvent) => {
    evt.preventDefault();
    if (inputValue) {
      formRef.current?.submit();
    }
  };
  return (
    <div className="md:h-full relative">
      <form
        method="GET"
        action={formAction}
        onSubmit={handleSearch}
        ref={formRef}
        className="md:h-full"
      >
        <input
          className="border border-solid border-gray-400 shadow md:h-full md:m-0 md:border-none md:shadow-none w-full focus:outline-none p-2 text-sm rounded-md"
          placeholder={t('catalog-search-placeholder')}
          aria-label="Catalog Search"
          type="text"
          value={inputValue}
          onChange={handleChange}
          name={CatalogURLSearchParams.SearchTerm}
        />
        {hiddenFields.map(({ name, value }, index) => (
          <input
            key={`search-form-hidden-input-${index}`}
            type="hidden"
            name={name}
            value={value}
          />
        ))}
        <span className="mb-0 absolute h-full top-0 right-0 p-1 table" onClick={handleSearch}>
          <i
            className="text-2xl cursor-pointer py-0 px-3 text-accent table-cell align-middle"
            aria-label="search"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 30 30"
              width="30px"
              height="30px"
              fill="currentColor"
            >
              <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z" />
            </svg>
          </i>
        </span>
      </form>
    </div>
  );
};

SearchInput.displayName = 'SearchInput';
export default SearchInput;
