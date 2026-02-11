export const managerEntries = (entry: string[] = []) => {
  return [...entry, require.resolve('../register')];
};
