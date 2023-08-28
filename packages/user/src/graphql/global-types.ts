export type Maybe<T> = T;
export type InputMaybe<T> = T;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  AbsoluteOrRelativeURL: string;
  Date: string;
  HexColor: string;
  JSON: any;
  RelativeURL: string;
  Slug: string;
  URL: string;
  UUID: string;
};

export type RedeemedRegistrationRedemptionResult = {
  __typename?: 'RedeemedRegistrationRedemptionResult';
  redeemed: Scalars['Boolean'];
};

export type TermsAndConditions = {
  __typename?: 'TermsAndConditions';
  globalTerms?: Maybe<Scalars['String']>;
};

export type ValidateRedemptionCodeResult = {
  __typename?: 'ValidateRedemptionCodeResult';
  alreadyRedeemed: Scalars['Boolean'];
  codeExpired: Scalars['Boolean'];
  valid: Scalars['Boolean'];
};
