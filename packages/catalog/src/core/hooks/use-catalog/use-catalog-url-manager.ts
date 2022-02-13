import useCatalog from './use-catalog';

export default function useCatalogURLManager() {
  const { urlManager } = useCatalog();

  return urlManager;
}
