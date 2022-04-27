import { useEffect, useState } from 'react';

/**
 * Reference: https://usehooks.com/useMedia/
 * Tweaked to run on both server and client sides. Reference to window object
 * takes place only on client side
 *
 * @param queries       List of media queries to find matching for
 *                      (order the narrowest query on top)
 * @param values        List of values for matched query (matching order of queries)
 * @param defaultValue  Default value when no match is found
 * @returns             Matching value or default value
 */
export default function useMedia<T>(queries: string[], values: T[], defaultValue: T): T {
  // State and setter for matched value
  const [value, setValue] = useState(defaultValue);
  useEffect(() => {
    // Array containing a media query list for each query
    const mediaQueryLists = queries.map(q => window.matchMedia(q));

    // Function that gets value based on matching media query
    const getValue = () => {
      // Get index of first media query that matches
      const index = mediaQueryLists.findIndex(mql => mql.matches);
      // Return related value or defaultValue if none
      return typeof values[index] !== 'undefined' ? values[index] : defaultValue;
    };

    setValue(getValue);

    // Event listener callback
    // Note: By defining getValue outside of useEffect we ensure that it has ...
    // ... current values of hook args (as this hook callback is created once on mount).
    const handler = () => setValue(getValue);

    // Set a listener for each media query with above handler as callback.
    mediaQueryLists.forEach(mql => mql.addEventListener('change', handler));

    // Remove listeners on cleanup
    return () => mediaQueryLists.forEach(mql => mql.removeEventListener('change', handler));
  }, [queries, values]);
  return value;
}
