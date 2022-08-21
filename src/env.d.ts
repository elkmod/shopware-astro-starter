interface ImportMetaEnv {
    readonly SHOPWARE_ENDPOINT: string;
    readonly SHOPWARE_ACCESS_KEY: string;
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }