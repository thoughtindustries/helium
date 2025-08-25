// Global TypeScript declarations

/// <reference types="@testing-library/jest-dom" />

// TailwindCSS module declarations
declare module 'tailwindcss' {
  export interface Config {
    content?: string[] | { files: string[] };
    theme?: any;
    plugins?: any[];
    [key: string]: any;
  }
  const config: Config;
  export = config;
}

declare module 'tailwindcss/plugin' {
  interface PluginAPI {
    addUtilities: (utilities: any, options?: any) => void;
    addComponents: (components: any, options?: any) => void;
    addBase: (base: any) => void;
    addVariant: (name: string, definition: any) => void;
    e: (className: string) => string;
    prefix: (selector: string) => string;
    theme: (path: string, defaultValue?: any) => any;
    variants: (path: string, defaultValue?: any) => string[];
    config: (path: string, defaultValue?: any) => any;
    corePlugins: (path: string) => boolean;
    matchUtilities: (utilities: any, options?: any) => void;
  }

  interface PluginFunction {
    (api: PluginAPI): void;
  }

  function plugin(pluginFunction: PluginFunction, config?: any): any;
  export = plugin;
}

// JSON module declarations
declare module '*.json' {
  const value: any;
  export default value;
}

// Helium server module declarations
declare module '@thoughtindustries/helium-server' {
  export function setupHeliumServer(...args: any[]): any;
  export function tiConfig(...args: any[]): { plugins?: any[]; [key: string]: any };
}

declare module '@thoughtindustries/helium-server/make-apollo-client' {
  function makeApolloClient(...args: any[]): any;
  export default makeApolloClient;
}

// External navigation component
declare module '../../../../../helium-apps/2025/add-course-detail-to-template-base/components/Navigation/NavBar' {
  const NavBar: React.ComponentType<any>;
  export default NavBar;
}
