export interface CodeBoxProps {
  input: (code: string) => void;
  submit: () => void;
  valid: boolean | null | undefined;
  validating: boolean | undefined;
}

export interface CodeListProps {
  num: number;
  handleInput: (code: string) => void;
  handleSubmit: () => void;
  valid: boolean | null | undefined;
  validating: boolean | undefined;
}

export interface BannerProps {
  valid: boolean | null | undefined;
}
