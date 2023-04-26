/// <reference types="vite/client" />

interface ImportMetaEnv {
  // public env variables...
  readonly HELIUM_PUBLIC_APP_VERSION: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
