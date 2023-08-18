import { a as r, F as n, j as e } from '../chunks/chunk-5011acf0.js';
function t({ is404: o }) {
  return o
    ? r(n, {
        children: [
          e('h1', { children: '404 Page Not Found' }),
          e('p', { children: 'This page could not be found.' })
        ]
      })
    : r(n, {
        children: [
          e('h1', { children: '500 Internal Server Error' }),
          e('p', { children: 'Something went wrong.' })
        ]
      });
}
export { t as Page };
