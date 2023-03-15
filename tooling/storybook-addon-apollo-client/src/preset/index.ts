export function config(entry: unknown[] = []): unknown[] {
  return [...entry, require.resolve('./addDecorator')];
}

export function managerEntries(entry: unknown[] = []): unknown[] {
  return [...entry, require.resolve('../register')];
}
