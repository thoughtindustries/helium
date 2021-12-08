/**
 * in tailwind JIT mode, dynamic values like `md:grid-cols-${count}` are not supported.
 * use static complete strings instead.
 * @param desktopColumnCount
 * @returns
 */
export const tileClassnameByDesktopColumnCount = (desktopColumnCount: number): string => {
  switch (desktopColumnCount) {
    case 2:
      return 'md:grid-cols-2';
    case 3:
      return 'md:grid-cols-3';
    case 4:
      return 'md:grid-cols-4';
    case 5:
      return 'md:grid-cols-5';
  }
  return '';
};
