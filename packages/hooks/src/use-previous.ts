import { MutableRefObject, useEffect, useRef } from 'react';

/**
 * Reference: https://usehooks.com/usePrevious/
 * @param value   Value
 * @returns       Previous value if applied
 */
export default function usePrevious<T>(value: T): T | undefined {
  // The ref object is a generic container whose current property is mutable ...
  // ... and can hold any value, similar to an instance property on a class
  const ref: MutableRefObject<T | undefined> = useRef();
  // Store current value in ref
  useEffect(() => {
    ref.current = value;
  }, [value]); // Only re-run if value changes
  // Return previous value (happens before update in useEffect above)
  return ref.current;
}
