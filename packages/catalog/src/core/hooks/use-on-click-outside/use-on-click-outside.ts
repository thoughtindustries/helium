import { RefObject, useCallback } from 'react';
import { useWindowEventListener } from '../use-window-event-listener';

/**
 * Reference: https://usehooks.com/useOnClickOutside/
 *
 * @param ref       Reference to DOM element to detect if click happens
 *                  outside of the element
 * @param callback  Callback function when click outside is detected
 */
export default function useOnClickOutside<TRef extends HTMLElement>(
  ref: RefObject<TRef>,
  callback: (event: MouseEvent | PointerEvent) => void
) {
  const listener = useCallback(
    event => {
      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      callback(event);
    },
    // Add ref and callback to effect dependencies
    // It's worth noting that because passed in callback is a new ...
    // ... function on every render that will cause this effect ...
    // ... callback/cleanup to run every render. It's not a big deal ...
    // ... but to optimize you can wrap callback in useCallback before ...
    // ... passing it into this hook.
    [ref, callback]
  );
  useWindowEventListener('pointerdown', listener);
  useWindowEventListener('mousedown', listener);
}
