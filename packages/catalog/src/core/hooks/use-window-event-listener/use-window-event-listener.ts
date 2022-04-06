import { useEffect, useRef } from 'react';

/**
 * Reference: https://usehooks.com/useEventListener/
 * Tweaked to run on both server and client sides. Reference to window object
 * takes place only on client side
 *
 * @param eventName     Event name to attach specified event handler to
 * @param handler       Event handler
 */
export default function useWindowEventListener<T extends keyof WindowEventMap>(
  eventName: T,
  handler: (this: Window, evt: WindowEventMap[T]) => any
) {
  // Create a ref that stores handler
  const savedHandler = useRef(handler);
  // Update ref.current value if handler changes.
  // This allows our effect below to always get latest handler ...
  // ... without us needing to pass it in effect deps array ...
  // ... and potentially cause effect to re-run every render.
  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(
    () => {
      // Create event listener that calls handler function stored in ref
      const eventListener = (event: WindowEventMap[T]) => savedHandler.current.call(window, event);
      // Add event listener
      window.addEventListener(eventName, eventListener);
      // Remove event listener on cleanup
      return () => {
        window.removeEventListener(eventName, eventListener);
      };
    },
    [eventName] // Re-run if eventName changes
  );
}
