import { a as jsxs, j as jsx } from './chunk-7df435e3.js';
const Banner = props => {
  return /* @__PURE__ */ jsxs('div', {
    className: 'flex flex-col p-24 bg-slate-50',
    children: [
      /* @__PURE__ */ jsx('div', {
        className: 'lg:text-6xl md:text-5xl text-3xl font-bold mx-auto text-center',
        children: props.heading
      }),
      /* @__PURE__ */ jsx('div', {
        className: 'text-slate-500 text-xl font-light text-center mx-5',
        children: props.subtext
      })
    ]
  });
};
export { Banner as B };
