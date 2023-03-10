/// <reference types="vite/client" />

interface ImportMetaEnv {
  // public env variables...
  readonly HELIUM_PUBLIC_APP_TITLE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
