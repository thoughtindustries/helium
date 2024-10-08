(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
  {
    './.storybook/preview.js-generated-config-entry.js': function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      var preview_namespaceObject = {};
      __webpack_require__.r(preview_namespaceObject),
        __webpack_require__.d(preview_namespaceObject, 'parameters', function () {
          return parameters;
        });
      __webpack_require__('./node_modules/core-js/modules/es.object.keys.js'),
        __webpack_require__('./node_modules/core-js/modules/es.symbol.js'),
        __webpack_require__('./node_modules/core-js/modules/es.array.filter.js'),
        __webpack_require__(
          './node_modules/core-js/modules/es.object.get-own-property-descriptor.js'
        ),
        __webpack_require__('./node_modules/core-js/modules/es.array.for-each.js'),
        __webpack_require__('./node_modules/core-js/modules/web.dom-collections.for-each.js'),
        __webpack_require__(
          './node_modules/core-js/modules/es.object.get-own-property-descriptors.js'
        ),
        __webpack_require__('./node_modules/core-js/modules/es.object.define-properties.js'),
        __webpack_require__('./node_modules/core-js/modules/es.object.define-property.js');
      var ClientApi = __webpack_require__(
          './node_modules/@storybook/client-api/dist/esm/ClientApi.js'
        ),
        esm = __webpack_require__('./node_modules/@storybook/client-logger/dist/esm/index.js'),
        MockedProvider =
          (__webpack_require__('./.storybook/style.css'),
          __webpack_require__('./node_modules/@apollo/client/testing/react/MockedProvider.js')),
        i18next = __webpack_require__('./node_modules/i18next/dist/esm/i18next.js'),
        context = __webpack_require__('./node_modules/react-i18next/dist/es/context.js');
      i18next.a.use(context.e).init({
        fallbackLng: 'en',
        interpolation: { escapeValue: !1 },
        resources: {
          en: {
            translation: {
              'course-add-to-queue': 'Add to Queue',
              'course-added-to-queue': 'Added to Queue',
              'course-completed-decal': 'Completed!',
              'course-view-details': 'View Details',
              more: 'more'
            }
          }
        }
      });
      var parameters = {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: { matchers: { color: /(background|color)$/i, date: /Date$/ } },
        apolloClient: { MockedProvider: MockedProvider.a },
        i18n: i18next.a,
        locale: 'en'
      };
      function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          enumerableOnly &&
            (symbols = symbols.filter(function (sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            })),
            keys.push.apply(keys, symbols);
        }
        return keys;
      }
      function _defineProperty(obj, key, value) {
        return (
          key in obj
            ? Object.defineProperty(obj, key, {
                value: value,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (obj[key] = value),
          obj
        );
      }
      Object.keys(preview_namespaceObject).forEach(function (key) {
        var value = preview_namespaceObject[key];
        switch (key) {
          case 'args':
          case 'argTypes':
            return esm.a.warn('Invalid args/argTypes in config, ignoring.', JSON.stringify(value));
          case 'decorators':
            return value.forEach(function (decorator) {
              return Object(ClientApi.d)(decorator, !1);
            });
          case 'loaders':
            return value.forEach(function (loader) {
              return Object(ClientApi.e)(loader, !1);
            });
          case 'parameters':
            return Object(ClientApi.f)(
              (function _objectSpread(target) {
                for (var i = 1; i < arguments.length; i++) {
                  var source = null != arguments[i] ? arguments[i] : {};
                  i % 2
                    ? ownKeys(Object(source), !0).forEach(function (key) {
                        _defineProperty(target, key, source[key]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source))
                    : ownKeys(Object(source)).forEach(function (key) {
                        Object.defineProperty(
                          target,
                          key,
                          Object.getOwnPropertyDescriptor(source, key)
                        );
                      });
                }
                return target;
              })({}, value),
              !1
            );
          case 'argTypesEnhancers':
            return value.forEach(function (enhancer) {
              return Object(ClientApi.b)(enhancer);
            });
          case 'argsEnhancers':
            return value.forEach(function (enhancer) {
              return Object(ClientApi.c)(enhancer);
            });
          case 'render':
            return Object(ClientApi.g)(value);
          case 'globals':
          case 'globalTypes':
            var v = {};
            return (v[key] = value), Object(ClientApi.f)(v, !1);
          case 'decorateStory':
          case 'renderToDOM':
            return null;
          default:
            return console.log(key + ' was not supported :( !');
        }
      });
    },
    './.storybook/style.css': function (module, exports, __webpack_require__) {
      var api = __webpack_require__(
          './node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js'
        ),
        content = __webpack_require__(
          './node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js?!./.storybook/style.css'
        );
      'string' == typeof (content = content.__esModule ? content.default : content) &&
        (content = [[module.i, content, '']]);
      var options = { insert: 'head', singleton: !1 };
      api(content, options);
      module.exports = content.locals || {};
    },
    './generated-stories-entry.js': function (module, exports, __webpack_require__) {
      'use strict';
      (function (module) {
        (0,
        __webpack_require__('./node_modules/@storybook/react/dist/esm/client/index.js').configure)(
          [
            __webpack_require__(
              './packages sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)stories\\/(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$'
            ),
            __webpack_require__(
              './packages sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)stories\\/(?!\\.)(?=.)[^/]*?\\.stories\\.tsx)$'
            )
          ],
          module,
          !1
        );
      }.call(this, __webpack_require__('./node_modules/webpack/buildin/module.js')(module)));
    },
    './node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js?!./.storybook/style.css':
      function (module, exports, __webpack_require__) {
        (exports = __webpack_require__('./node_modules/css-loader/dist/runtime/api.js')(!1)).push([
          module.i,
          '@import url(https://fonts.googleapis.com/css?family=Sintony:300,400,700|Nunito:300,400,600,700);'
        ]),
          exports.push([
            module.i,
            "/*! tailwindcss v2.2.19 | MIT License | https://tailwindcss.com */\n\n/*! modern-normalize v1.1.0 | MIT License | https://github.com/sindresorhus/modern-normalize */\n\n/*\nDocument\n========\n*/\n\n/**\nUse a better box model (opinionated).\n*/\n\n*,\n::before,\n::after {\n\tbox-sizing: border-box;\n}\n\n/**\nUse a more readable tab size (opinionated).\n*/\n\nhtml {\n\t-moz-tab-size: 4;\n\t-o-tab-size: 4;\n\t   tab-size: 4;\n}\n\n/**\n1. Correct the line height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n*/\n\nhtml {\n\tline-height: 1.15; /* 1 */\n\t-webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/*\nSections\n========\n*/\n\n/**\nRemove the margin in all browsers.\n*/\n\nbody {\n\tmargin: 0;\n}\n\n/**\nImprove consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n*/\n\nbody {\n\tfont-family:\n\t\tsystem-ui,\n\t\t-apple-system, /* Firefox supports this but not yet `system-ui` */\n\t\t'Segoe UI',\n\t\tRoboto,\n\t\tHelvetica,\n\t\tArial,\n\t\tsans-serif,\n\t\t'Apple Color Emoji',\n\t\t'Segoe UI Emoji';\n}\n\n/*\nGrouping content\n================\n*/\n\n/**\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n*/\n\nhr {\n\theight: 0; /* 1 */\n\tcolor: inherit; /* 2 */\n}\n\n/*\nText-level semantics\n====================\n*/\n\n/**\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr[title] {\n\t-webkit-text-decoration: underline dotted;\n\t        text-decoration: underline dotted;\n}\n\n/**\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n\tfont-weight: bolder;\n}\n\n/**\n1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n2. Correct the odd 'em' font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n\tfont-family:\n\t\tui-monospace,\n\t\tSFMono-Regular,\n\t\tConsolas,\n\t\t'Liberation Mono',\n\t\tMenlo,\n\t\tmonospace; /* 1 */\n\tfont-size: 1em; /* 2 */\n}\n\n/**\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n\tfont-size: 80%;\n}\n\n/**\nPrevent 'sub' and 'sup' elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n\tfont-size: 75%;\n\tline-height: 0;\n\tposition: relative;\n\tvertical-align: baseline;\n}\n\nsub {\n\tbottom: -0.25em;\n}\n\nsup {\n\ttop: -0.5em;\n}\n\n/*\nTabular data\n============\n*/\n\n/**\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n*/\n\ntable {\n\ttext-indent: 0; /* 1 */\n\tborder-color: inherit; /* 2 */\n}\n\n/*\nForms\n=====\n*/\n\n/**\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n\tfont-family: inherit; /* 1 */\n\tfont-size: 100%; /* 1 */\n\tline-height: 1.15; /* 1 */\n\tmargin: 0; /* 2 */\n}\n\n/**\nRemove the inheritance of text transform in Edge and Firefox.\n1. Remove the inheritance of text transform in Firefox.\n*/\n\nbutton,\nselect { /* 1 */\n\ttext-transform: none;\n}\n\n/**\nCorrect the inability to style clickable types in iOS and Safari.\n*/\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n\t-webkit-appearance: button;\n}\n\n/**\nRemove the inner border and padding in Firefox.\n*/\n\n::-moz-focus-inner {\n\tborder-style: none;\n\tpadding: 0;\n}\n\n/**\nRestore the focus styles unset by the previous rule.\n*/\n\n:-moz-focusring {\n\toutline: 1px dotted ButtonText;\n}\n\n/**\nRemove the additional ':invalid' styles in Firefox.\nSee: https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737\n*/\n\n:-moz-ui-invalid {\n\tbox-shadow: none;\n}\n\n/**\nRemove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.\n*/\n\nlegend {\n\tpadding: 0;\n}\n\n/**\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n\tvertical-align: baseline;\n}\n\n/**\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n\theight: auto;\n}\n\n/**\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n\t-webkit-appearance: textfield; /* 1 */\n\toutline-offset: -2px; /* 2 */\n}\n\n/**\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n\t-webkit-appearance: none;\n}\n\n/**\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to 'inherit' in Safari.\n*/\n\n::-webkit-file-upload-button {\n\t-webkit-appearance: button; /* 1 */\n\tfont: inherit; /* 2 */\n}\n\n/*\nInteractive\n===========\n*/\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n\tdisplay: list-item;\n}\n\n/**\n * Manually forked from SUIT CSS Base: https://github.com/suitcss/base\n * A thin layer on top of normalize.css that provides a starting point more\n * suitable for web applications.\n */\n\n/**\n * Removes the default spacing and border for appropriate elements.\n */\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nbutton {\n  background-color: transparent;\n  background-image: none;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nol,\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/**\n * Tailwind custom reset styles\n */\n\n/**\n * 1. Use the user's configured `sans` font-family (with Tailwind's default\n *    sans-serif font stack as a fallback) as a sane default.\n * 2. Use Tailwind's default \"normal\" line-height so the user isn't forced\n *    to override it to ensure consistency even when using the default theme.\n */\n\nhtml {\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 1 */\n  line-height: 1.5; /* 2 */\n}\n\n/**\n * Inherit font-family and line-height from `html` so users can set them as\n * a class directly on the `html` element.\n */\n\nbody {\n  font-family: inherit;\n  line-height: inherit;\n}\n\n/**\n * 1. Prevent padding and border from affecting element width.\n *\n *    We used to set this in the html element and inherit from\n *    the parent element for everything else. This caused issues\n *    in shadow-dom-enhanced elements like <details> where the content\n *    is wrapped by a div with box-sizing set to `content-box`.\n *\n *    https://github.com/mozdevs/cssremedy/issues/4\n *\n *\n * 2. Allow adding a border to an element by just adding a border-width.\n *\n *    By default, the way the browser specifies that an element should have no\n *    border is by setting it's border-style to `none` in the user-agent\n *    stylesheet.\n *\n *    In order to easily add borders to elements by just setting the `border-width`\n *    property, we change the default border-style for all elements to `solid`, and\n *    use border-width to hide them instead. This way our `border` utilities only\n *    need to set the `border-width` property instead of the entire `border`\n *    shorthand, making our border utilities much more straightforward to compose.\n *\n *    https://github.com/tailwindcss/tailwindcss/pull/116\n */\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: currentColor; /* 2 */\n}\n\n/*\n * Ensure horizontal rules are visible by default\n */\n\nhr {\n  border-top-width: 1px;\n}\n\n/**\n * Undo the `border-style: none` reset that Normalize applies to images so that\n * our `border-{width}` utilities have the expected effect.\n *\n * The Normalize reset is unnecessary for us since we default the border-width\n * to 0 on all elements.\n *\n * https://github.com/tailwindcss/tailwindcss/issues/362\n */\n\nimg {\n  border-style: solid;\n}\n\ntextarea {\n  resize: vertical;\n}\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\n\ninput:-ms-input-placeholder, textarea:-ms-input-placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n/**\n * Override legacy focus reset from Normalize with modern Firefox focus styles.\n *\n * This is actually an improvement over the new defaults in Firefox in our testing,\n * as it triggers the better focus styles even for links, which still use a dotted\n * outline in Firefox by default.\n */\n\n:-moz-focusring {\n\toutline: auto;\n}\n\ntable {\n  border-collapse: collapse;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/**\n * Reset links to optimize for opt-in styling instead of\n * opt-out.\n */\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/**\n * Reset form element properties that are easy to forget to\n * style explicitly so you don't inadvertently introduce\n * styles that deviate from your design system. These styles\n * supplement a partial reset that is already applied by\n * normalize.css.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  padding: 0;\n  line-height: inherit;\n  color: inherit;\n}\n\n/**\n * Use the configured 'mono' font family for elements that\n * are expected to be rendered with a monospace font, falling\n * back to the system monospace stack if there is no configured\n * 'mono' font family.\n */\n\npre,\ncode,\nkbd,\nsamp {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n}\n\n/**\n * 1. Make replaced elements `display: block` by default as that's\n *    the behavior you want almost all of the time. Inspired by\n *    CSS Remedy, with `svg` added as well.\n *\n *    https://github.com/mozdevs/cssremedy/issues/14\n * \n * 2. Add `vertical-align: middle` to align replaced elements more\n *    sensibly by default when overriding `display` by adding a\n *    utility like `inline`.\n *\n *    This can trigger a poorly considered linting error in some\n *    tools but is included by design.\n * \n *    https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210\n */\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/**\n * Constrain images and videos to the parent width and preserve\n * their intrinsic aspect ratio.\n *\n * https://github.com/mozdevs/cssremedy/issues/14\n */\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/**\n * Ensure the default browser behavior of the `hidden` attribute.\n */\n\n[hidden] {\n  display: none;\n}\n\n*, ::before, ::after{\n\t--tw-translate-x: 0;\n\t--tw-translate-y: 0;\n\t--tw-rotate: 0;\n\t--tw-skew-x: 0;\n\t--tw-skew-y: 0;\n\t--tw-scale-x: 1;\n\t--tw-scale-y: 1;\n\t--tw-transform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n\t--tw-border-opacity: 1;\n\tborder-color: rgba(229, 231, 235, var(--tw-border-opacity));\n\t--tw-ring-offset-shadow: 0 0 #0000;\n\t--tw-ring-shadow: 0 0 #0000;\n\t--tw-shadow: 0 0 #0000;\n}\n.container{\n\twidth: 100%;\n}\n@media (min-width: 640px){\n\n\t.container{\n\t\tmax-width: 640px;\n\t}\n}\n@media (min-width: 768px){\n\n\t.container{\n\t\tmax-width: 768px;\n\t}\n}\n@media (min-width: 1024px){\n\n\t.container{\n\t\tmax-width: 1024px;\n\t}\n}\n@media (min-width: 1440px){\n\n\t.container{\n\t\tmax-width: 1440px;\n\t}\n}\n@media (min-width: 1920px){\n\n\t.container{\n\t\tmax-width: 1920px;\n\t}\n}\n@media (min-width: 2560px){\n\n\t.container{\n\t\tmax-width: 2560px;\n\t}\n}\n.pointer-events-none{\n\tpointer-events: none;\n}\n.static{\n\tposition: static;\n}\n.absolute{\n\tposition: absolute;\n}\n.relative{\n\tposition: relative;\n}\n.right-0{\n\tright: 0px;\n}\n.-top-1{\n\ttop: -0.25rem;\n}\n.-right-2{\n\tright: -0.5rem;\n}\n.top-full{\n\ttop: 100%;\n}\n.left-0{\n\tleft: 0px;\n}\n.top-0{\n\ttop: 0px;\n}\n.top-1\\/2{\n\ttop: 50%;\n}\n.-top-px{\n\ttop: -1px;\n}\n.bottom-0{\n\tbottom: 0px;\n}\n.bottom-2{\n\tbottom: 0.5rem;\n}\n.right-6{\n\tright: 1.5rem;\n}\n.right-4{\n\tright: 1rem;\n}\n.top-2{\n\ttop: 0.5rem;\n}\n.top-2\\/4{\n\ttop: 50%;\n}\n.z-10{\n\tz-index: 10;\n}\n.float-right{\n\tfloat: right;\n}\n.float-left{\n\tfloat: left;\n}\n.m-0{\n\tmargin: 0px;\n}\n.my-4{\n\tmargin-top: 1rem;\n\tmargin-bottom: 1rem;\n}\n.my-0{\n\tmargin-top: 0px;\n\tmargin-bottom: 0px;\n}\n.mx-auto{\n\tmargin-left: auto;\n\tmargin-right: auto;\n}\n.my-3{\n\tmargin-top: 0.75rem;\n\tmargin-bottom: 0.75rem;\n}\n.-ml-4{\n\tmargin-left: -1rem;\n}\n.-mr-4{\n\tmargin-right: -1rem;\n}\n.mt-0{\n\tmargin-top: 0px;\n}\n.mb-0{\n\tmargin-bottom: 0px;\n}\n.mt-1{\n\tmargin-top: 0.25rem;\n}\n.mb-1{\n\tmargin-bottom: 0.25rem;\n}\n.mb-4{\n\tmargin-bottom: 1rem;\n}\n.mt-4{\n\tmargin-top: 1rem;\n}\n.mb-2{\n\tmargin-bottom: 0.5rem;\n}\n.mb-1\\.5{\n\tmargin-bottom: 0.375rem;\n}\n.mt-1\\.5{\n\tmargin-top: 0.375rem;\n}\n.mr-1{\n\tmargin-right: 0.25rem;\n}\n.mr-0{\n\tmargin-right: 0px;\n}\n.ml-4{\n\tmargin-left: 1rem;\n}\n.ml-1{\n\tmargin-left: 0.25rem;\n}\n.-mb-1\\.5{\n\tmargin-bottom: -0.375rem;\n}\n.ml-1\\.5{\n\tmargin-left: 0.375rem;\n}\n.-mb-1{\n\tmargin-bottom: -0.25rem;\n}\n.mt-2{\n\tmargin-top: 0.5rem;\n}\n.block{\n\tdisplay: block;\n}\n.inline-block{\n\tdisplay: inline-block;\n}\n.flex{\n\tdisplay: flex;\n}\n.grid{\n\tdisplay: grid;\n}\n.h-0{\n\theight: 0px;\n}\n.h-full{\n\theight: 100%;\n}\n.h-auto{\n\theight: auto;\n}\n.h-1{\n\theight: 0.25rem;\n}\n.h-5{\n\theight: 1.25rem;\n}\n.w-auto{\n\twidth: auto;\n}\n.w-full{\n\twidth: 100%;\n}\n.w-0{\n\twidth: 0px;\n}\n.w-1{\n\twidth: 0.25rem;\n}\n.w-5{\n\twidth: 1.25rem;\n}\n.max-w-1\\/2{\n\tmax-width: 50%;\n}\n.max-w-3\\/4{\n\tmax-width: 75%;\n}\n.max-w-1\\/4{\n\tmax-width: 25%;\n}\n.flex-none{\n\tflex: none;\n}\n.-translate-y-1\\/2{\n\t--tw-translate-y: -50%;\n\ttransform: var(--tw-transform);\n}\n.transform{\n\ttransform: var(--tw-transform);\n}\n.cursor-pointer{\n\tcursor: pointer;\n}\n.cursor-default{\n\tcursor: default;\n}\n.list-none{\n\tlist-style-type: none;\n}\n.grid-cols-1{\n\tgrid-template-columns: repeat(1, minmax(0, 1fr));\n}\n.grid-cols-2{\n\tgrid-template-columns: repeat(2, minmax(0, 1fr));\n}\n.flex-wrap-reverse{\n\tflex-wrap: wrap-reverse;\n}\n.items-end{\n\talign-items: flex-end;\n}\n.justify-start{\n\tjustify-content: flex-start;\n}\n.justify-end{\n\tjustify-content: flex-end;\n}\n.justify-between{\n\tjustify-content: space-between;\n}\n.gap-8{\n\tgap: 2rem;\n}\n.gap-5{\n\tgap: 1.25rem;\n}\n.gap-x-8{\n\t-moz-column-gap: 2rem;\n\t     column-gap: 2rem;\n}\n.overflow-hidden{\n\toverflow: hidden;\n}\n.overflow-y-scroll{\n\toverflow-y: scroll;\n}\n.overflow-ellipsis{\n\ttext-overflow: ellipsis;\n}\n.whitespace-normal{\n\twhite-space: normal;\n}\n.whitespace-nowrap{\n\twhite-space: nowrap;\n}\n.rounded-full{\n\tborder-radius: 9999px;\n}\n.rounded-sm{\n\tborder-radius: 0.125rem;\n}\n.border{\n\tborder-width: 1px;\n}\n.border-4{\n\tborder-width: 4px;\n}\n.border-0{\n\tborder-width: 0px;\n}\n.border-r-2{\n\tborder-right-width: 2px;\n}\n.border-r{\n\tborder-right-width: 1px;\n}\n.border-solid{\n\tborder-style: solid;\n}\n.border-none{\n\tborder-style: none;\n}\n.border-gray-300{\n\t--tw-border-opacity: 1;\n\tborder-color: rgba(209, 213, 219, var(--tw-border-opacity));\n}\n.border-transparent{\n\tborder-color: transparent;\n}\n.border-white{\n\t--tw-border-opacity: 1;\n\tborder-color: rgba(255, 255, 255, var(--tw-border-opacity));\n}\n.border-accent{\n\t--tw-border-opacity: 1;\n\tborder-color: rgba(17, 17, 17, var(--tw-border-opacity));\n}\n.border-gray-100{\n\t--tw-border-opacity: 1;\n\tborder-color: rgba(243, 244, 246, var(--tw-border-opacity));\n}\n.border-opacity-50{\n\t--tw-border-opacity: 0.5;\n}\n.bg-white{\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgba(255, 255, 255, var(--tw-bg-opacity));\n}\n.bg-gray-100{\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgba(243, 244, 246, var(--tw-bg-opacity));\n}\n.bg-gray-900{\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgba(17, 24, 39, var(--tw-bg-opacity));\n}\n.bg-accent{\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgba(17, 17, 17, var(--tw-bg-opacity));\n}\n.bg-gray-600{\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgba(75, 85, 99, var(--tw-bg-opacity));\n}\n.bg-opacity-80{\n\t--tw-bg-opacity: 0.8;\n}\n.bg-opacity-60{\n\t--tw-bg-opacity: 0.6;\n}\n.bg-clip-padding{\n\tbackground-clip: padding-box;\n}\n.p-4{\n\tpadding: 1rem;\n}\n.p-2\\.5{\n\tpadding: 0.625rem;\n}\n.p-2{\n\tpadding: 0.5rem;\n}\n.p-0{\n\tpadding: 0px;\n}\n.p-0\\.5{\n\tpadding: 0.125rem;\n}\n.p-8{\n\tpadding: 2rem;\n}\n.px-1\\.5{\n\tpadding-left: 0.375rem;\n\tpadding-right: 0.375rem;\n}\n.py-1{\n\tpadding-top: 0.25rem;\n\tpadding-bottom: 0.25rem;\n}\n.px-1{\n\tpadding-left: 0.25rem;\n\tpadding-right: 0.25rem;\n}\n.px-5{\n\tpadding-left: 1.25rem;\n\tpadding-right: 1.25rem;\n}\n.py-3{\n\tpadding-top: 0.75rem;\n\tpadding-bottom: 0.75rem;\n}\n.py-0{\n\tpadding-top: 0px;\n\tpadding-bottom: 0px;\n}\n.px-2{\n\tpadding-left: 0.5rem;\n\tpadding-right: 0.5rem;\n}\n.py-0\\.5{\n\tpadding-top: 0.125rem;\n\tpadding-bottom: 0.125rem;\n}\n.pl-4{\n\tpadding-left: 1rem;\n}\n.pr-4{\n\tpadding-right: 1rem;\n}\n.pt-1{\n\tpadding-top: 0.25rem;\n}\n.pl-0{\n\tpadding-left: 0px;\n}\n.pr-0{\n\tpadding-right: 0px;\n}\n.pb-5{\n\tpadding-bottom: 1.25rem;\n}\n.pb-0{\n\tpadding-bottom: 0px;\n}\n.pb-11{\n\tpadding-bottom: 2.75rem;\n}\n.pr-8{\n\tpadding-right: 2rem;\n}\n.pt-2{\n\tpadding-top: 0.5rem;\n}\n.pb-2{\n\tpadding-bottom: 0.5rem;\n}\n.pl-5{\n\tpadding-left: 1.25rem;\n}\n.text-left{\n\ttext-align: left;\n}\n.text-center{\n\ttext-align: center;\n}\n.align-top{\n\tvertical-align: top;\n}\n.font-header{\n\tfont-family: Sintony, Nunito, sans-serif;\n}\n.font-primary{\n\tfont-family: Sintony, Nunito, sans-serif;\n}\n.text-xs{\n\tfont-size: 0.75rem;\n\tline-height: 1rem;\n}\n.text-3xl{\n\tfont-size: 1.875rem;\n\tline-height: 2.25rem;\n}\n.text-base{\n\tfont-size: 1rem;\n\tline-height: 1.5rem;\n}\n.text-sm{\n\tfont-size: 0.875rem;\n\tline-height: 1.25rem;\n}\n.text-2xl{\n\tfont-size: 1.5rem;\n\tline-height: 2rem;\n}\n.text-xl{\n\tfont-size: 1.25rem;\n\tline-height: 1.75rem;\n}\n.font-normal{\n\tfont-weight: 400;\n}\n.font-bold{\n\tfont-weight: 700;\n}\n.uppercase{\n\ttext-transform: uppercase;\n}\n.not-italic{\n\tfont-style: normal;\n}\n.leading-none{\n\tline-height: 1;\n}\n.leading-normal{\n\tline-height: 1.5;\n}\n.leading-5{\n\tline-height: 1.25rem;\n}\n.text-gray-800{\n\t--tw-text-opacity: 1;\n\tcolor: rgba(31, 41, 55, var(--tw-text-opacity));\n}\n.text-gray-700{\n\t--tw-text-opacity: 1;\n\tcolor: rgba(55, 65, 81, var(--tw-text-opacity));\n}\n.text-accent{\n\t--tw-text-opacity: 1;\n\tcolor: rgba(17, 17, 17, var(--tw-text-opacity));\n}\n.text-white{\n\t--tw-text-opacity: 1;\n\tcolor: rgba(255, 255, 255, var(--tw-text-opacity));\n}\n.text-accent-contrast{\n\t--tw-text-opacity: 1;\n\tcolor: rgba(255, 255, 255, var(--tw-text-opacity));\n}\n.text-link{\n\t--tw-text-opacity: 1;\n\tcolor: rgba(169, 169, 169, var(--tw-text-opacity));\n}\n.text-gray-600{\n\t--tw-text-opacity: 1;\n\tcolor: rgba(75, 85, 99, var(--tw-text-opacity));\n}\n.underline{\n\ttext-decoration: underline;\n}\n.line-through{\n\ttext-decoration: line-through;\n}\n.no-underline{\n\ttext-decoration: none;\n}\n.opacity-25{\n\topacity: 0.25;\n}\n.shadow-none{\n\t--tw-shadow: 0 0 #0000;\n\tbox-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.transition-colors{\n\ttransition-property: background-color, border-color, color, fill, stroke;\n\ttransition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n\ttransition-duration: 150ms;\n}\n.transition-all{\n\ttransition-property: all;\n\ttransition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n\ttransition-duration: 150ms;\n}\n.duration-200{\n\ttransition-duration: 200ms;\n}\n.duration-500{\n\ttransition-duration: 500ms;\n}\n.ease-in-out{\n\ttransition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n}\n.before\\:absolute::before{\n\tcontent: \"\";\n\tposition: absolute;\n}\n.before\\:left-0::before{\n\tcontent: \"\";\n\tleft: 0px;\n}\n.before\\:-top-1\\.5::before{\n\tcontent: \"\";\n\ttop: -0.375rem;\n}\n.before\\:-top-1::before{\n\tcontent: \"\";\n\ttop: -0.25rem;\n}\n.before\\:h-0::before{\n\tcontent: \"\";\n\theight: 0px;\n}\n.before\\:w-8::before{\n\tcontent: \"\";\n\twidth: 2rem;\n}\n.before\\:border-t-2::before{\n\tcontent: \"\";\n\tborder-top-width: 2px;\n}\n.before\\:border-solid::before{\n\tcontent: \"\";\n\tborder-style: solid;\n}\n.before\\:content-\\[\\'\\\\\\\\\\\\\\\\002B\\'\\]::before{\n\tcontent: '\\\\\\\\002B';\n}\n.before\\:content-\\[\\'\\\\\\\\\\\\\\\\2022\\\\\\\\\\\\\\\\20\\'\\]::before{\n\tcontent: '\\\\\\\\2022\\\\\\\\20';\n}\n.before\\:content-\\[\\'\\\\2022\\\\20\\'\\]::before{\n\tcontent: '\\2022\\20';\n}\n.before\\:content-\\[\\'\\\\2705\\'\\]::before{\n\tcontent: '\\2705';\n}\n.before\\:content-\\[\\'\\\\002B\\'\\]::before{\n\tcontent: '\\002B';\n}\n.hover\\:border-accent-hover:hover{\n\t--tw-border-opacity: 1;\n\tborder-color: rgba(43, 43, 43, var(--tw-border-opacity));\n}\n.hover\\:bg-accent-hover:hover{\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgba(43, 43, 43, var(--tw-bg-opacity));\n}\n.hover\\:text-link-hover:hover{\n\t--tw-text-opacity: 1;\n\tcolor: rgba(118, 118, 118, var(--tw-text-opacity));\n}\n.hover\\:text-accent:hover{\n\t--tw-text-opacity: 1;\n\tcolor: rgba(17, 17, 17, var(--tw-text-opacity));\n}\n.hover\\:text-accent-contrast:hover{\n\t--tw-text-opacity: 1;\n\tcolor: rgba(255, 255, 255, var(--tw-text-opacity));\n}\n.hover\\:text-gray-600:hover{\n\t--tw-text-opacity: 1;\n\tcolor: rgba(75, 85, 99, var(--tw-text-opacity));\n}\n.focus\\:border-accent-hover:focus{\n\t--tw-border-opacity: 1;\n\tborder-color: rgba(43, 43, 43, var(--tw-border-opacity));\n}\n.focus\\:bg-accent-hover:focus{\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgba(43, 43, 43, var(--tw-bg-opacity));\n}\n.focus\\:shadow:focus{\n\t--tw-shadow: 0px 0px 5px #4d90fe;\n\tbox-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.focus\\:outline-blue:focus{\n\toutline: 1px solid #4d90fe;\n\toutline-offset: 0;\n}\n.active\\:border-accent-hover:active{\n\t--tw-border-opacity: 1;\n\tborder-color: rgba(43, 43, 43, var(--tw-border-opacity));\n}\n.active\\:bg-accent-hover:active{\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgba(43, 43, 43, var(--tw-bg-opacity));\n}\n@media (min-width: 768px){\n\n\t.md\\:absolute{\n\t\tposition: absolute;\n\t}\n\n\t.md\\:left-0{\n\t\tleft: 0px;\n\t}\n\n\t.md\\:bottom-8{\n\t\tbottom: 2rem;\n\t}\n\n\t.md\\:col-span-full{\n\t\tgrid-column: 1 / -1;\n\t}\n\n\t.md\\:col-span-3{\n\t\tgrid-column: span 3 / span 3;\n\t}\n\n\t.md\\:h-full{\n\t\theight: 100%;\n\t}\n\n\t.md\\:w-1\\/2{\n\t\twidth: 50%;\n\t}\n\n\t.md\\:w-1\\/3{\n\t\twidth: 33.333333%;\n\t}\n\n\t.md\\:w-1\\/4{\n\t\twidth: 25%;\n\t}\n\n\t.md\\:w-1\\/5{\n\t\twidth: 20%;\n\t}\n\n\t.md\\:grid-cols-4{\n\t\tgrid-template-columns: repeat(4, minmax(0, 1fr));\n\t}\n\n\t.md\\:grid-cols-3{\n\t\tgrid-template-columns: repeat(3, minmax(0, 1fr));\n\t}\n\n\t.md\\:grid-cols-2{\n\t\tgrid-template-columns: repeat(2, minmax(0, 1fr));\n\t}\n\n\t.md\\:grid-cols-5{\n\t\tgrid-template-columns: repeat(5, minmax(0, 1fr));\n\t}\n\n\t.md\\:gap-x-2{\n\t\t-moz-column-gap: 0.5rem;\n\t\t     column-gap: 0.5rem;\n\t}\n\n\t.md\\:bg-white{\n\t\t--tw-bg-opacity: 1;\n\t\tbackground-color: rgba(255, 255, 255, var(--tw-bg-opacity));\n\t}\n\n\t.md\\:bg-opacity-80{\n\t\t--tw-bg-opacity: 0.8;\n\t}\n\n\t.md\\:p-2{\n\t\tpadding: 0.5rem;\n\t}\n\n\t.md\\:text-3xl{\n\t\tfont-size: 1.875rem;\n\t\tline-height: 2.25rem;\n\t}\n\n\t.md\\:text-base{\n\t\tfont-size: 1rem;\n\t\tline-height: 1.5rem;\n\t}\n}\n@media (min-width: 1024px){\n\n\t.lg\\:text-4xl{\n\t\tfont-size: 2.25rem;\n\t\tline-height: 2.5rem;\n\t}\n\n\t.lg\\:text-lg{\n\t\tfont-size: 1.125rem;\n\t\tline-height: 1.75rem;\n\t}\n}",
            ''
          ]),
          (module.exports = exports);
      },
    './packages sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)stories\\/(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$':
      function (module, exports) {
        function webpackEmptyContext(req) {
          var e = new Error("Cannot find module '" + req + "'");
          throw ((e.code = 'MODULE_NOT_FOUND'), e);
        }
        (webpackEmptyContext.keys = function () {
          return [];
        }),
          (webpackEmptyContext.resolve = webpackEmptyContext),
          (module.exports = webpackEmptyContext),
          (webpackEmptyContext.id =
            './packages sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)stories\\/(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$');
      },
    './packages sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)stories\\/(?!\\.)(?=.)[^/]*?\\.stories\\.tsx)$':
      function (module, exports, __webpack_require__) {
        var map = {
          './featured-content/stories/FeaturedContent.stories.tsx':
            './packages/featured-content/stories/FeaturedContent.stories.tsx',
          './featured-content/stories/FeaturedContentWithDataFetching.stories.tsx':
            './packages/featured-content/stories/FeaturedContentWithDataFetching.stories.tsx',
          './header/stories/Header.stories.tsx': './packages/header/stories/Header.stories.tsx',
          './hero/stories/Hero.stories.tsx': './packages/hero/stories/Hero.stories.tsx',
          './link-lists/stories/LinkLists.stories.tsx':
            './packages/link-lists/stories/LinkLists.stories.tsx'
        };
        function webpackContext(req) {
          var id = webpackContextResolve(req);
          return __webpack_require__(id);
        }
        function webpackContextResolve(req) {
          if (!__webpack_require__.o(map, req)) {
            var e = new Error("Cannot find module '" + req + "'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          }
          return map[req];
        }
        (webpackContext.keys = function webpackContextKeys() {
          return Object.keys(map);
        }),
          (webpackContext.resolve = webpackContextResolve),
          (module.exports = webpackContext),
          (webpackContext.id =
            './packages sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)stories\\/(?!\\.)(?=.)[^/]*?\\.stories\\.tsx)$');
      },
    './packages/featured-content/src/index.ts': function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, 'h', function () {
        return SidebarPosition;
      }),
        __webpack_require__.d(__webpack_exports__, 'f', function () {
          return featured_content;
        }),
        __webpack_require__.d(__webpack_exports__, 'i', function () {
          return rss.b;
        }),
        __webpack_require__.d(__webpack_exports__, 'g', function () {
          return sidebar_default;
        }),
        __webpack_require__.d(__webpack_exports__, 'e', function () {
          return tile_standard_layout;
        }),
        __webpack_require__.d(__webpack_exports__, 'c', function () {
          return tile_descriptive_layout;
        }),
        __webpack_require__.d(__webpack_exports__, 'b', function () {
          return multi_carousel;
        }),
        __webpack_require__.d(__webpack_exports__, 'a', function () {
          return carousel;
        }),
        __webpack_require__.d(__webpack_exports__, 'd', function () {
          return tile_image_overlay;
        });
      var SidebarPosition,
        react = __webpack_require__('./node_modules/react/index.js');
      !(function (SidebarPosition) {
        (SidebarPosition.Left = 'left'), (SidebarPosition.Right = 'right');
      })(SidebarPosition || (SidebarPosition = {}));
      var jsx_runtime = __webpack_require__('./node_modules/react/jsx-runtime.js'),
        featured_content_FeaturedContent = function FeaturedContent(_ref) {
          var sidebar = _ref.sidebar,
            sidebarPosition = _ref.sidebarPosition,
            children = _ref.children,
            wrappedSidebar =
              sidebar &&
              Object(jsx_runtime.jsx)('div', { className: 'relative', children: sidebar }),
            wrappedChildren = Object(jsx_runtime.jsx)('div', {
              className: sidebar ? 'md:col-span-3' : 'md:col-span-full',
              children: children
            });
          return Object(jsx_runtime.jsx)('div', {
            className: 'w-auto -ml-4 -mr-4 mt-0 mb-0 max-w-none',
            children: Object(jsx_runtime.jsxs)('div', {
              className:
                'w-full relative pl-4 pr-4 float-left grid grid-cols-1 md:grid-cols-4 gap-8',
              children: [
                sidebarPosition === SidebarPosition.Left && wrappedSidebar,
                wrappedChildren,
                sidebarPosition === SidebarPosition.Right && wrappedSidebar
              ]
            })
          });
        };
      (featured_content_FeaturedContent.displayName = 'FeaturedContent'),
        (featured_content_FeaturedContent.displayName = 'FeaturedContent');
      var featured_content = featured_content_FeaturedContent,
        rss = __webpack_require__('./packages/featured-content/src/variants/sidebar/rss.tsx'),
        wrapper = __webpack_require__(
          './packages/featured-content/src/variants/sidebar/wrapper.tsx'
        ),
        default_SidebarDefault = function SidebarDefault(_ref) {
          var title = _ref.title,
            children = _ref.children;
          return Object(jsx_runtime.jsx)(wrapper.a, { title: title, children: children });
        };
      (default_SidebarDefault.displayName = 'SidebarDefault'),
        (default_SidebarDefault.displayName = 'SidebarDefault');
      var sidebar_default = default_SidebarDefault,
        format =
          (__webpack_require__('./node_modules/core-js/modules/es.parse-int.js'),
          __webpack_require__('./node_modules/core-js/modules/es.string.replace.js'),
          __webpack_require__('./node_modules/core-js/modules/es.regexp.exec.js'),
          __webpack_require__('./node_modules/core-js/modules/es.object.to-string.js'),
          __webpack_require__('./node_modules/core-js/modules/es.regexp.to-string.js'),
          __webpack_require__('./node_modules/core-js/modules/es.date.to-string.js'),
          __webpack_require__('./node_modules/core-js/modules/es.array.from.js'),
          __webpack_require__('./node_modules/core-js/modules/es.string.iterator.js'),
          __webpack_require__('./node_modules/core-js/modules/es.object.assign.js'),
          __webpack_require__('./node_modules/date-fns/esm/format/index.js')),
        clsx_m = __webpack_require__('./node_modules/clsx/dist/clsx.m.js'),
        tileClassnameByDesktopColumnCount = function tileClassnameByDesktopColumnCount(
          desktopColumnCount
        ) {
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
        },
        src =
          (__webpack_require__('./node_modules/core-js/modules/es.object.keys.js'),
          __webpack_require__('./node_modules/core-js/modules/es.array.index-of.js'),
          __webpack_require__('./node_modules/core-js/modules/es.symbol.js'),
          __webpack_require__('./packages/header/src/index.ts')),
        _excluded = ['title'];
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]), excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      var wrapper_ContentWrapper = function ContentWrapper(_ref) {
        var headerOptions = _ref.headerOptions,
          children = _ref.children,
          title = headerOptions.title,
          restHeaderProps = _objectWithoutProperties(headerOptions, _excluded);
        return Object(jsx_runtime.jsxs)(jsx_runtime.Fragment, {
          children: [
            title &&
              Object(jsx_runtime.jsx)(
                src.Header,
                Object.assign({ title: title }, restHeaderProps, { alternateTitleDisplay: !0 })
              ),
            children
          ]
        });
      };
      wrapper_ContentWrapper.displayName = 'ContentWrapper';
      var content_wrapper = wrapper_ContentWrapper,
        item_link_wrapper_ItemLinkWrapper = function ItemLinkWrapper(_ref) {
          var children = _ref.children,
            onClick = _ref.onClick,
            item = _ref.item,
            isActive = item.isActive,
            linkUrl = item.linkUrl,
            linkOpenInNewTab = item.linkOpenInNewTab,
            itemIsActiveOrWebinarOrEvent = !!isActive,
            linkProps = {
              href: linkUrl,
              onClick: Object(react.useCallback)(
                function (evt) {
                  onClick && onClick(evt, item);
                },
                [item, onClick]
              ),
              className:
                'block text-gray-800 ' + (itemIsActiveOrWebinarOrEvent ? '' : 'cursor-default')
            };
          return (
            linkOpenInNewTab && (linkProps.target = '_blank'),
            Object(jsx_runtime.jsx)('a', Object.assign({}, linkProps, { children: children }))
          );
        };
      (item_link_wrapper_ItemLinkWrapper.displayName = 'ItemLinkWrapper'),
        (item_link_wrapper_ItemLinkWrapper.displayName = 'ItemLinkWrapper');
      var item_link_wrapper = item_link_wrapper_ItemLinkWrapper,
        useTranslation =
          (__webpack_require__('./node_modules/core-js/modules/es.promise.js'),
          __webpack_require__('./node_modules/core-js/modules/es.array.is-array.js'),
          __webpack_require__('./node_modules/core-js/modules/es.symbol.description.js'),
          __webpack_require__('./node_modules/core-js/modules/es.symbol.iterator.js'),
          __webpack_require__('./node_modules/core-js/modules/es.array.iterator.js'),
          __webpack_require__('./node_modules/core-js/modules/web.dom-collections.iterator.js'),
          __webpack_require__('./node_modules/core-js/modules/es.array.slice.js'),
          __webpack_require__('./node_modules/core-js/modules/es.function.name.js'),
          __webpack_require__('./node_modules/react-i18next/dist/es/useTranslation.js'));
      function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
        try {
          var info = gen[key](arg),
            value = info.value;
        } catch (error) {
          return void reject(error);
        }
        info.done ? resolve(value) : Promise.resolve(value).then(_next, _throw);
      }
      function _slicedToArray(arr, i) {
        return (
          (function _arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr;
          })(arr) ||
          (function _iterableToArrayLimit(arr, i) {
            var _i =
              null == arr
                ? null
                : ('undefined' != typeof Symbol && arr[Symbol.iterator]) || arr['@@iterator'];
            if (null == _i) return;
            var _s,
              _e,
              _arr = [],
              _n = !0,
              _d = !1;
            try {
              for (
                _i = _i.call(arr);
                !(_n = (_s = _i.next()).done) && (_arr.push(_s.value), !i || _arr.length !== i);
                _n = !0
              );
            } catch (err) {
              (_d = !0), (_e = err);
            } finally {
              try {
                _n || null == _i.return || _i.return();
              } finally {
                if (_d) throw _e;
              }
            }
            return _arr;
          })(arr, i) ||
          (function _unsupportedIterableToArray(o, minLen) {
            if (!o) return;
            if ('string' == typeof o) return _arrayLikeToArray(o, minLen);
            var n = Object.prototype.toString.call(o).slice(8, -1);
            'Object' === n && o.constructor && (n = o.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(o);
            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
              return _arrayLikeToArray(o, minLen);
          })(arr, i) ||
          (function _nonIterableRest() {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function _arrayLikeToArray(arr, len) {
        (null == len || len > arr.length) && (len = arr.length);
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      var item_queue_button_ItemQueueButton = function ItemQueueButton(_ref) {
        var item = _ref.item,
          onClickAsync = _ref.onClickAsync,
          _ref$classNames = _ref.classNames,
          classNames = void 0 === _ref$classNames ? '' : _ref$classNames,
          _useState2 = _slicedToArray(Object(react.useState)(!1), 2),
          isLoading = _useState2[0],
          setIsLoading = _useState2[1],
          _useState4 = _slicedToArray(Object(react.useState)(!1), 2),
          wasAddedToQueue = _useState4[0],
          setWasAddedToQueue = _useState4[1],
          t = Object(useTranslation.a)().t,
          handleClick = Object(react.useCallback)(
            (function () {
              var _ref2 = (function _asyncToGenerator(fn) {
                return function () {
                  var self = this,
                    args = arguments;
                  return new Promise(function (resolve, reject) {
                    var gen = fn.apply(self, args);
                    function _next(value) {
                      asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'next', value);
                    }
                    function _throw(err) {
                      asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'throw', err);
                    }
                    _next(void 0);
                  });
                };
              })(
                regeneratorRuntime.mark(function _callee(evt) {
                  return regeneratorRuntime.wrap(
                    function _callee$(_context) {
                      for (;;)
                        switch ((_context.prev = _context.next)) {
                          case 0:
                            if (
                              (evt.preventDefault(),
                              evt.stopPropagation(),
                              !wasAddedToQueue && !isLoading)
                            ) {
                              _context.next = 4;
                              break;
                            }
                            return _context.abrupt('return');
                          case 4:
                            return (
                              setIsLoading(!0),
                              (_context.prev = 5),
                              (_context.next = 8),
                              onClickAsync(item)
                            );
                          case 8:
                            setWasAddedToQueue(!0), (_context.next = 13);
                            break;
                          case 11:
                            (_context.prev = 11), (_context.t0 = _context.catch(5));
                          case 13:
                            return (_context.prev = 13), setIsLoading(!1), _context.finish(13);
                          case 16:
                          case 'end':
                            return _context.stop();
                        }
                    },
                    _callee,
                    null,
                    [[5, 11, 13, 16]]
                  );
                })
              );
              return function (_x) {
                return _ref2.apply(this, arguments);
              };
            })(),
            [wasAddedToQueue, isLoading, item, onClickAsync]
          ),
          btnClassNames = Object(clsx_m.a)([
            'inline-block pl-0 mb-1 text-xs border-none rounded-sm cursor-pointer inline-block font-normal leading-normal m-0 p-0 relative text-center no-underline transition-colors ease-in-out duration-200 hover:text-link-hover',
            { 'cursor-default': wasAddedToQueue },
            classNames
          ]);
        return Object(jsx_runtime.jsxs)('button', {
          onClick: handleClick,
          className: btnClassNames,
          children: [
            wasAddedToQueue &&
              Object(jsx_runtime.jsxs)('span', {
                className: 'inline-block align-top',
                children: [
                  Object(jsx_runtime.jsx)('i', {
                    className: "-top-px pr-0 relative text-xs not-italic before:content-['\\2705']",
                    'aria-label': 'check'
                  }),
                  ' ',
                  t('course-added-to-queue')
                ]
              }),
            !wasAddedToQueue &&
              Object(jsx_runtime.jsxs)('span', {
                className: 'inline-block align-top',
                children: [
                  Object(jsx_runtime.jsx)('i', {
                    className: "-top-px pr-0 relative text-xs not-italic before:content-['\\002B']",
                    'aria-label': 'plus'
                  }),
                  ' ',
                  t('course-add-to-queue')
                ]
              })
          ]
        });
      };
      (item_queue_button_ItemQueueButton.displayName = 'ItemQueueButton'),
        (item_queue_button_ItemQueueButton.displayName = 'ItemQueueButton');
      var item_queue_button = item_queue_button_ItemQueueButton,
        item_asset_block_ItemAssetBlock = function ItemAssetBlock(_ref) {
          var asset = _ref.asset,
            _ref$classNames = _ref.classNames,
            classNames = void 0 === _ref$classNames ? '' : _ref$classNames;
          return Object(jsx_runtime.jsx)('img', {
            className: Object(clsx_m.a)(['max-w-full h-auto', classNames]),
            src:
              asset ||
              'https://d36ai2hkxl16us.cloudfront.net/thoughtindustries/image/upload/v1440546308/qj7eo4nseeiigiec5huh.png'
          });
        };
      (item_asset_block_ItemAssetBlock.displayName = 'ItemAssetBlock'),
        (item_asset_block_ItemAssetBlock.displayName = 'ItemAssetBlock');
      var item_asset_block = item_asset_block_ItemAssetBlock,
        item_completed_block_ItemCompletedBlock = function ItemCompletedBlock() {
          var t = Object(useTranslation.a)().t;
          return Object(jsx_runtime.jsx)('div', {
            className:
              'block absolute h-full left-0 top-0 w-full text-center bg-white bg-opacity-80 z-1',
            children: Object(jsx_runtime.jsxs)('div', {
              className: 'absolute w-full top-1/2 transform -translate-y-1/2',
              children: [
                Object(jsx_runtime.jsx)('div', {
                  children: Object(jsx_runtime.jsx)('i', {
                    className:
                      'bg-white text-3xl inline-block p-4 rounded-full border-4 border-solid border-white border-opacity-50 my-0 mx-auto bg-clip-padding',
                    'aria-label': 'Completed',
                    children: Object(jsx_runtime.jsx)('svg', {
                      xmlns: 'http://www.w3.org/2000/svg',
                      width: '30',
                      height: '30',
                      viewBox: '0 0 24 24',
                      fill: '#5bb65c',
                      children: Object(jsx_runtime.jsx)('path', {
                        d: 'M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z'
                      })
                    })
                  })
                }),
                Object(jsx_runtime.jsx)('p', {
                  className: 'mt-1 text-base',
                  children: t('course-completed-decal')
                })
              ]
            })
          });
        };
      (item_completed_block_ItemCompletedBlock.displayName = 'ItemCompletedBlock'),
        (item_completed_block_ItemCompletedBlock.displayName = 'ItemCompletedBlock');
      var item_completed_block = item_completed_block_ItemCompletedBlock;
      function _extends() {
        return (
          (_extends =
            Object.assign ||
            function (target) {
              for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source)
                  Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
              }
              return target;
            }),
          _extends.apply(this, arguments)
        );
      }
      var ContentTileStandardLayoutContext = Object(react.createContext)(void 0);
      var tile_standard_layout_ContentTileStandardLayout = function ContentTileStandardLayout(
        _ref
      ) {
        var _ref$headerOptions = _ref.headerOptions,
          headerOptions = void 0 === _ref$headerOptions ? {} : _ref$headerOptions,
          desktopColumnCount = _ref.desktopColumnCount,
          children = _ref.children,
          onAddedToQueue = _ref.onAddedToQueue,
          onClick = _ref.onClick,
          value = Object(react.useMemo)(
            function () {
              return {
                desktopColumnCount: desktopColumnCount,
                onAddedToQueue: onAddedToQueue,
                onClick: onClick
              };
            },
            [desktopColumnCount, onAddedToQueue, onClick]
          );
        return Object(jsx_runtime.jsx)(ContentTileStandardLayoutContext.Provider, {
          value: value,
          children: Object(jsx_runtime.jsx)(content_wrapper, {
            headerOptions: headerOptions,
            children: Object(jsx_runtime.jsx)('ul', {
              className: Object(clsx_m.a)([
                'grid gap-5 grid-cols-1',
                tileClassnameByDesktopColumnCount(desktopColumnCount)
              ]),
              children: children
            })
          })
        });
      };
      tile_standard_layout_ContentTileStandardLayout.displayName = 'ContentTileStandardLayout';
      var tile_standard_layout_ItemTitleBlock = function ItemTitleBlock(_ref2) {
        var title = _ref2.title,
          courseStartDate = _ref2.courseStartDate;
        return Object(jsx_runtime.jsxs)('p', {
          className: 'mb-1',
          children: [
            title,
            courseStartDate &&
              Object(jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                  Object(jsx_runtime.jsx)('br', {}),
                  Object(jsx_runtime.jsx)('span', {
                    className: 'text-xs text-gray-700',
                    children: Object(format.a)(courseStartDate, 'MM/dd/yyyy')
                  })
                ]
              })
          ]
        });
      };
      tile_standard_layout_ItemTitleBlock.displayName = 'ItemTitleBlock';
      var tile_standard_layout_ItemSourceBlock = function ItemSourceBlock(_ref3) {
        var contentTypeLabel = _ref3.contentTypeLabel,
          source = _ref3.source;
        return Object(jsx_runtime.jsxs)('div', {
          className: 'text-xs text-gray-700',
          children: [
            contentTypeLabel && Object(jsx_runtime.jsx)('strong', { children: contentTypeLabel }),
            contentTypeLabel &&
              source &&
              Object(jsx_runtime.jsxs)(jsx_runtime.Fragment, { children: ['|', source] }),
            !contentTypeLabel && source && Object(jsx_runtime.jsx)('strong', { children: source })
          ]
        });
      };
      tile_standard_layout_ItemSourceBlock.displayName = 'ItemSourceBlock';
      var tile_standard_layout_Star = function Star(_ref4) {
        var marked = _ref4.marked;
        return Object(jsx_runtime.jsx)('span', {
          className: 'text-accent',
          children: marked ? '★' : '☆'
        });
      };
      tile_standard_layout_Star.displayName = 'Star';
      var tile_standard_layout_Stars = function Stars(_ref5) {
        var stars,
          remainder = (stars = 0.05 * _ref5.gradePercentage) % 0.5;
        remainder > 0 && (stars = stars - remainder + 0.5);
        var starCount = parseInt(stars.toString().replace('.', ''));
        return Object(jsx_runtime.jsx)('div', {
          children: Array.from({ length: 5 }, function (v, i) {
            return Object(jsx_runtime.jsx)(
              tile_standard_layout_Star,
              { marked: starCount > i },
              'star-' + i
            );
          })
        });
      };
      tile_standard_layout_Stars.displayName = 'Stars';
      var tile_standard_layout_ItemRibbon = function ItemRibbon(_ref6) {
        var ribbon = _ref6.ribbon,
          attached = _ref6.attached,
          contrastColor = ribbon.contrastColor,
          bgColor = ribbon.bgColor,
          darkerColor = ribbon.darkerColor,
          label = ribbon.label,
          wrapperStyles = { color: contrastColor, backgroundColor: bgColor },
          wrapperClassnames =
            'text-xs font-normal leading-none absolute right-0 uppercase max-w-1/2 overflow-ellipsis z-10 px-1.5 py-1 -top-1 whitespace-no-wrap ' +
            (attached ? '-right-2' : ''),
          cornerStyles = { borderTopColor: darkerColor, borderLeftColor: darkerColor };
        return Object(jsx_runtime.jsxs)('div', {
          className: wrapperClassnames,
          style: wrapperStyles,
          children: [
            attached &&
              Object(jsx_runtime.jsx)('div', {
                className:
                  'right-0 block border-4 border-solid h-0 w-0 absolute border-transparent top-full',
                style: cornerStyles
              }),
            label
          ]
        });
      };
      tile_standard_layout_ItemRibbon.displayName = 'ItemRibbon';
      var tile_standard_layout_ItemCtaBlock = function ItemCtaBlock(_ref7) {
        var isActive = _ref7.isActive,
          callToAction = _ref7.callToAction;
        return isActive
          ? Object(jsx_runtime.jsx)('span', {
              className:
                'border-none rounded-sm cursor-pointer inline-block text-sm font-normal leading-normal m-0 p-0 relative text-center no-underline transition-colors ease-in-out duration-200 text-accent float-right text-left h-auto hover:text-accent',
              children: callToAction
            })
          : Object(jsx_runtime.jsx)('span', { className: 'text-xs', children: callToAction });
      };
      tile_standard_layout_ItemCtaBlock.displayName = 'ItemCtaBlock';
      var tile_standard_layout_ItemPriceBlock = function ItemPriceBlock(_ref8) {
          var priceInCents = _ref8.priceInCents,
            hasAvailability = _ref8.hasAvailability,
            suggestedRetailPriceInCents = _ref8.suggestedRetailPriceInCents;
          if (hasAvailability) return null;
          var formatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }),
            priceFormat = function priceFormat(priceInCents) {
              return formatter.format(priceInCents / 100);
            };
          return Object(jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
              Object(jsx_runtime.jsx)('span', { children: priceFormat(priceInCents) }),
              suggestedRetailPriceInCents &&
                Object(jsx_runtime.jsx)('span', {
                  className: 'line-through text-gray-700 text-xs',
                  children: priceFormat(suggestedRetailPriceInCents)
                })
            ]
          });
        },
        tile_standard_layout_Item = function Item(_ref9) {
          var item = _extends({}, _ref9),
            ribbon = item.ribbon,
            isCompleted = item.isCompleted,
            asset = item.asset,
            title = item.title,
            courseStartDate = item.courseStartDate,
            contentTypeLabel = item.contentTypeLabel,
            source = item.source,
            authors = item.authors,
            shortDescription = item.shortDescription,
            rating = item.rating,
            canAddToQueue = item.canAddToQueue,
            isActive = item.isActive,
            callToAction = item.callToAction,
            priceInCents = item.priceInCents,
            hasAvailability = item.hasAvailability,
            suggestedRetailPriceInCents = item.suggestedRetailPriceInCents,
            _useContentTileStanda = (function useContentTileStandardLayoutContext() {
              var context = Object(react.useContext)(ContentTileStandardLayoutContext);
              if (!context) throw new Error('No context found for ContentTileStandardLayout');
              return context;
            })(),
            onAddedToQueue = _useContentTileStanda.onAddedToQueue,
            onClick = _useContentTileStanda.onClick,
            desktopColumnCount = _useContentTileStanda.desktopColumnCount,
            columnCountIsOneOrTwo = 1 === desktopColumnCount || 2 === desktopColumnCount,
            gridItemDesktopClassnames = columnCountIsOneOrTwo ? ' md:grid-cols-2 md:gap-x-2' : '',
            assetWrapperDesktopClassnames = columnCountIsOneOrTwo ? ' md:p-2' : '';
          return Object(jsx_runtime.jsx)('li', {
            children: Object(jsx_runtime.jsx)(item_link_wrapper, {
              item: item,
              onClick: onClick,
              children: Object(jsx_runtime.jsxs)('div', {
                className:
                  'grid grid-cols-1' +
                  gridItemDesktopClassnames +
                  ' border border-solid border-gray-300 relative',
                children: [
                  ribbon &&
                    Object(jsx_runtime.jsx)(tile_standard_layout_ItemRibbon, {
                      ribbon: ribbon,
                      attached: !0
                    }),
                  Object(jsx_runtime.jsxs)('div', {
                    className: 'relative' + assetWrapperDesktopClassnames,
                    children: [
                      isCompleted && Object(jsx_runtime.jsx)(item_completed_block, {}),
                      Object(jsx_runtime.jsx)(item_asset_block, { asset: asset })
                    ]
                  }),
                  Object(jsx_runtime.jsxs)('div', {
                    className: 'p-2.5',
                    children: [
                      title &&
                        Object(jsx_runtime.jsx)(tile_standard_layout_ItemTitleBlock, {
                          title: title,
                          courseStartDate: courseStartDate
                        }),
                      Object(jsx_runtime.jsx)(tile_standard_layout_ItemSourceBlock, {
                        contentTypeLabel: contentTypeLabel,
                        source: source
                      }),
                      authors &&
                        Object(jsx_runtime.jsx)('p', {
                          className: 'text-xs mb-1 text-gray-700',
                          children: authors
                        }),
                      shortDescription &&
                        Object(jsx_runtime.jsx)('p', {
                          className: 'text-xs text-gray-700 pt-1 mb-0 overflow-hidden',
                          children: shortDescription
                        }),
                      rating &&
                        Object(jsx_runtime.jsx)(tile_standard_layout_Stars, {
                          gradePercentage: rating
                        }),
                      Object(jsx_runtime.jsx)('hr', { className: 'my-3' }),
                      Object(jsx_runtime.jsxs)('div', {
                        className: 'text-base leading-none',
                        children: [
                          canAddToQueue &&
                            Object(jsx_runtime.jsxs)('div', {
                              className: 'flex flex-wrap-reverse justify-between items-end',
                              children: [
                                Object(jsx_runtime.jsx)('span', {
                                  children: Object(jsx_runtime.jsx)(item_queue_button, {
                                    item: item,
                                    onClickAsync: onAddedToQueue
                                  })
                                }),
                                Object(jsx_runtime.jsx)('span', {
                                  children: Object(jsx_runtime.jsx)(
                                    tile_standard_layout_ItemCtaBlock,
                                    { isActive: isActive, callToAction: callToAction }
                                  )
                                })
                              ]
                            }),
                          !canAddToQueue &&
                            priceInCents &&
                            Object(jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                              children: [
                                Object(jsx_runtime.jsx)(tile_standard_layout_ItemPriceBlock, {
                                  priceInCents: priceInCents,
                                  hasAvailability: hasAvailability,
                                  suggestedRetailPriceInCents: suggestedRetailPriceInCents
                                }),
                                Object(jsx_runtime.jsx)(tile_standard_layout_ItemCtaBlock, {
                                  isActive: !0,
                                  callToAction: callToAction
                                })
                              ]
                            }),
                          !canAddToQueue &&
                            !priceInCents &&
                            Object(jsx_runtime.jsx)(tile_standard_layout_ItemCtaBlock, {
                              isActive: isActive,
                              callToAction: callToAction
                            })
                        ]
                      })
                    ]
                  })
                ]
              })
            })
          });
        };
      (tile_standard_layout_Item.displayName = 'Item'),
        (tile_standard_layout_ContentTileStandardLayout.displayName = 'ContentTileStandardLayout'),
        (tile_standard_layout_ContentTileStandardLayout.Item = tile_standard_layout_Item);
      var tile_standard_layout = tile_standard_layout_ContentTileStandardLayout;
      function tile_descriptive_layout_extends() {
        return (
          (tile_descriptive_layout_extends =
            Object.assign ||
            function (target) {
              for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source)
                  Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
              }
              return target;
            }),
          tile_descriptive_layout_extends.apply(this, arguments)
        );
      }
      var ContentTileDescriptiveLayoutContext = Object(react.createContext)(void 0);
      var tile_descriptive_layout_ContentTileDescriptiveLayout =
        function ContentTileDescriptiveLayout(_ref) {
          var _ref$headerOptions = _ref.headerOptions,
            headerOptions = void 0 === _ref$headerOptions ? {} : _ref$headerOptions,
            desktopColumnCount = _ref.desktopColumnCount,
            children = _ref.children,
            onAddedToQueue = _ref.onAddedToQueue,
            onClick = _ref.onClick,
            value = Object(react.useMemo)(
              function () {
                return {
                  desktopColumnCount: desktopColumnCount,
                  onAddedToQueue: onAddedToQueue,
                  onClick: onClick
                };
              },
              [desktopColumnCount, onAddedToQueue, onClick]
            );
          return Object(jsx_runtime.jsx)(ContentTileDescriptiveLayoutContext.Provider, {
            value: value,
            children: Object(jsx_runtime.jsx)(content_wrapper, {
              headerOptions: headerOptions,
              children: Object(jsx_runtime.jsx)('ul', {
                className: Object(clsx_m.a)([
                  'grid gap-5 grid-cols-1',
                  tileClassnameByDesktopColumnCount(desktopColumnCount)
                ]),
                children: children
              })
            })
          });
        };
      tile_descriptive_layout_ContentTileDescriptiveLayout.displayName =
        'ContentTileDescriptiveLayout';
      var tile_descriptive_layout_ItemTitleBlock = function ItemTitleBlock(_ref2) {
          var title = _ref2.title,
            courseStartDate = _ref2.courseStartDate;
          return Object(jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
              title &&
                Object(jsx_runtime.jsx)('p', {
                  className: 'mt-4 mb-0 text-base font-bold',
                  children: title
                }),
              courseStartDate &&
                Object(jsx_runtime.jsx)('div', {
                  className: 'text-xs mb-1 text-gray-700',
                  children: Object(format.a)(courseStartDate, 'MM/dd/yyyy')
                })
            ]
          });
        },
        tile_descriptive_layout_ItemSourceBlock = function ItemSourceBlock(_ref3) {
          var contentTypeLabel = _ref3.contentTypeLabel,
            source = _ref3.source;
          return Object(jsx_runtime.jsxs)('p', {
            className: 'text-xs text-gray-700 mb-1',
            children: [
              contentTypeLabel && Object(jsx_runtime.jsx)('strong', { children: contentTypeLabel }),
              contentTypeLabel &&
                source &&
                Object(jsx_runtime.jsxs)(jsx_runtime.Fragment, { children: ['|', source] }),
              !contentTypeLabel && source && Object(jsx_runtime.jsx)('strong', { children: source })
            ]
          });
        };
      tile_descriptive_layout_ItemSourceBlock.displayName = 'ItemSourceBlock';
      var tile_descriptive_layout_Item = function Item(_ref4) {
        var item = tile_descriptive_layout_extends({}, _ref4),
          asset = item.asset,
          title = item.title,
          courseStartDate = item.courseStartDate,
          contentTypeLabel = item.contentTypeLabel,
          source = item.source,
          authors = item.authors,
          shortDescription = item.shortDescription,
          canAddToQueue = item.canAddToQueue,
          _useContentTileDescri = (function useContentTileDescriptiveLayoutContext() {
            var context = Object(react.useContext)(ContentTileDescriptiveLayoutContext);
            if (!context) throw new Error('No context found for ContentTileDescriptiveLayout');
            return context;
          })(),
          onAddedToQueue = _useContentTileDescri.onAddedToQueue,
          onClick = _useContentTileDescri.onClick,
          desktopColumnCount = _useContentTileDescri.desktopColumnCount,
          columnCountIsOneOrTwo = 1 === desktopColumnCount || 2 === desktopColumnCount,
          gridItemDesktopClassnames = columnCountIsOneOrTwo ? ' md:grid-cols-2 md:gap-x-2' : '',
          assetWrapperDesktopClassnames = columnCountIsOneOrTwo ? ' md:p-2' : '',
          addToQueueClassnames = columnCountIsOneOrTwo ? ' justify-end' : ' justify-start';
        return Object(jsx_runtime.jsx)('li', {
          children: Object(jsx_runtime.jsx)(item_link_wrapper, {
            item: item,
            onClick: onClick,
            children: Object(jsx_runtime.jsxs)('div', {
              className:
                'grid grid-cols-1' +
                gridItemDesktopClassnames +
                ' border border-solid border-gray-300 relative',
              children: [
                Object(jsx_runtime.jsx)('div', {
                  className: 'relative' + assetWrapperDesktopClassnames,
                  children: Object(jsx_runtime.jsx)(item_asset_block, { asset: asset })
                }),
                Object(jsx_runtime.jsxs)('div', {
                  className: 'p-2.5',
                  children: [
                    Object(jsx_runtime.jsx)(tile_descriptive_layout_ItemTitleBlock, {
                      title: title,
                      courseStartDate: courseStartDate
                    }),
                    Object(jsx_runtime.jsx)(tile_descriptive_layout_ItemSourceBlock, {
                      contentTypeLabel: contentTypeLabel,
                      source: source
                    }),
                    authors &&
                      Object(jsx_runtime.jsx)('p', {
                        className: 'text-xs mb-1 text-gray-700',
                        children: authors
                      }),
                    shortDescription &&
                      Object(jsx_runtime.jsx)('p', {
                        className:
                          "mt-4 text-xs relative before:content-[' '] before:border-text-accent before:border-t-2 before:absolute before:left-0 before:border-solid before:w-8 before:h-0 before:-top-1.5",
                        children: shortDescription
                      }),
                    Object(jsx_runtime.jsx)('div', {
                      className: 'text-base leading-none flex' + addToQueueClassnames,
                      children:
                        canAddToQueue &&
                        Object(jsx_runtime.jsx)('p', {
                          className: '-mb-1.5 mt-2 text-xs bottom-0',
                          children: Object(jsx_runtime.jsx)(item_queue_button, {
                            item: item,
                            onClickAsync: onAddedToQueue
                          })
                        })
                    })
                  ]
                })
              ]
            })
          })
        });
      };
      (tile_descriptive_layout_Item.displayName = 'Item'),
        (tile_descriptive_layout_ContentTileDescriptiveLayout.displayName =
          'ContentTileDescriptiveLayout'),
        (tile_descriptive_layout_ContentTileDescriptiveLayout.Item = tile_descriptive_layout_Item);
      var tile_descriptive_layout = tile_descriptive_layout_ContentTileDescriptiveLayout,
        icons_IconLeft = function IconLeft() {
          return Object(jsx_runtime.jsx)('svg', {
            xmlns: 'http://www.w3.org/2000/svg',
            className: 'h-5 w-5',
            fill: 'none',
            viewBox: '0 0 24 24',
            stroke: 'currentColor',
            children: Object(jsx_runtime.jsx)('path', {
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
              strokeWidth: 2,
              d: 'M15 19l-7-7 7-7'
            })
          });
        };
      icons_IconLeft.displayName = 'IconLeft';
      var icons_IconRight = function IconRight() {
        return Object(jsx_runtime.jsx)('svg', {
          xmlns: 'http://www.w3.org/2000/svg',
          className: 'h-5 w-5',
          fill: 'none',
          viewBox: '0 0 24 24',
          stroke: 'currentColor',
          children: Object(jsx_runtime.jsx)('path', {
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: 2,
            d: 'M9 5l7 7-7 7'
          })
        });
      };
      icons_IconRight.displayName = 'IconRight';
      var _screenSizeToMediaQue, ScreenSize;
      __webpack_require__('./node_modules/core-js/modules/es.object.values.js'),
        __webpack_require__('./node_modules/core-js/modules/es.array.map.js'),
        __webpack_require__('./node_modules/core-js/modules/es.array.find-index.js'),
        __webpack_require__('./node_modules/core-js/modules/es.array.for-each.js'),
        __webpack_require__('./node_modules/core-js/modules/web.dom-collections.for-each.js');
      function use_media_slicedToArray(arr, i) {
        return (
          (function use_media_arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr;
          })(arr) ||
          (function use_media_iterableToArrayLimit(arr, i) {
            var _i =
              null == arr
                ? null
                : ('undefined' != typeof Symbol && arr[Symbol.iterator]) || arr['@@iterator'];
            if (null == _i) return;
            var _s,
              _e,
              _arr = [],
              _n = !0,
              _d = !1;
            try {
              for (
                _i = _i.call(arr);
                !(_n = (_s = _i.next()).done) && (_arr.push(_s.value), !i || _arr.length !== i);
                _n = !0
              );
            } catch (err) {
              (_d = !0), (_e = err);
            } finally {
              try {
                _n || null == _i.return || _i.return();
              } finally {
                if (_d) throw _e;
              }
            }
            return _arr;
          })(arr, i) ||
          (function use_media_unsupportedIterableToArray(o, minLen) {
            if (!o) return;
            if ('string' == typeof o) return use_media_arrayLikeToArray(o, minLen);
            var n = Object.prototype.toString.call(o).slice(8, -1);
            'Object' === n && o.constructor && (n = o.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(o);
            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
              return use_media_arrayLikeToArray(o, minLen);
          })(arr, i) ||
          (function use_media_nonIterableRest() {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function use_media_arrayLikeToArray(arr, len) {
        (null == len || len > arr.length) && (len = arr.length);
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      !(function (ScreenSize) {
        (ScreenSize.XXXLarge = 'xxxlarge'),
          (ScreenSize.XXLarge = 'xxlarge'),
          (ScreenSize.XLarge = 'xlarge'),
          (ScreenSize.Large = 'large'),
          (ScreenSize.Medium = 'medium'),
          (ScreenSize.Small = 'small');
      })(ScreenSize || (ScreenSize = {}));
      var screenSizeToMediaQueryMap =
        (((_screenSizeToMediaQue = {})[ScreenSize.XXXLarge] = '(min-width: 160.063em)'),
        (_screenSizeToMediaQue[ScreenSize.XXLarge] = '(min-width: 120.063em)'),
        (_screenSizeToMediaQue[ScreenSize.XLarge] = '(min-width: 90.063em)'),
        (_screenSizeToMediaQue[ScreenSize.Large] = '(min-width: 64.063em)'),
        (_screenSizeToMediaQue[ScreenSize.Medium] = '(min-width: 48.063em)'),
        _screenSizeToMediaQue);
      function useScreenSize() {
        var screenSize = (function useMedia(queries, values, defaultValue) {
          var mediaQueryLists = queries.map(function (q) {
              return window.matchMedia(q);
            }),
            getValue = function getValue() {
              var index = mediaQueryLists.findIndex(function (mql) {
                return mql.matches;
              });
              return void 0 !== values[index] ? values[index] : defaultValue;
            },
            _useState2 = use_media_slicedToArray(Object(react.useState)(getValue), 2),
            value = _useState2[0],
            setValue = _useState2[1];
          return (
            Object(react.useEffect)(function () {
              var handler = function handler() {
                return setValue(getValue);
              };
              return (
                mediaQueryLists.forEach(function (mql) {
                  return mql.addEventListener('change', handler);
                }),
                function () {
                  return mediaQueryLists.forEach(function (mql) {
                    return mql.removeEventListener('change', handler);
                  });
                }
              );
            }),
            value
          );
        })(
          Object.values(screenSizeToMediaQueryMap),
          Object.keys(screenSizeToMediaQueryMap),
          ScreenSize.Small
        );
        return screenSize;
      }
      var use_gesture_react_esm = __webpack_require__(
          './node_modules/@use-gesture/react/dist/use-gesture-react.esm.js'
        ),
        use_gesture_core_actions_esm = __webpack_require__(
          './node_modules/@use-gesture/core/actions/dist/use-gesture-core-actions.esm.js'
        );
      function use_carousel_behavior_slicedToArray(arr, i) {
        return (
          (function use_carousel_behavior_arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr;
          })(arr) ||
          (function use_carousel_behavior_iterableToArrayLimit(arr, i) {
            var _i =
              null == arr
                ? null
                : ('undefined' != typeof Symbol && arr[Symbol.iterator]) || arr['@@iterator'];
            if (null == _i) return;
            var _s,
              _e,
              _arr = [],
              _n = !0,
              _d = !1;
            try {
              for (
                _i = _i.call(arr);
                !(_n = (_s = _i.next()).done) && (_arr.push(_s.value), !i || _arr.length !== i);
                _n = !0
              );
            } catch (err) {
              (_d = !0), (_e = err);
            } finally {
              try {
                _n || null == _i.return || _i.return();
              } finally {
                if (_d) throw _e;
              }
            }
            return _arr;
          })(arr, i) ||
          (function use_carousel_behavior_unsupportedIterableToArray(o, minLen) {
            if (!o) return;
            if ('string' == typeof o) return use_carousel_behavior_arrayLikeToArray(o, minLen);
            var n = Object.prototype.toString.call(o).slice(8, -1);
            'Object' === n && o.constructor && (n = o.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(o);
            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
              return use_carousel_behavior_arrayLikeToArray(o, minLen);
          })(arr, i) ||
          (function use_carousel_behavior_nonIterableRest() {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function use_carousel_behavior_arrayLikeToArray(arr, len) {
        (null == len || len > arr.length) && (len = arr.length);
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      function useCarouselBehavior(_ref) {
        var itemCount = _ref.itemCount,
          scrollableRef = Object(react.useRef)(null),
          screenSize = useScreenSize(),
          prevScreenSize = (function usePrevious(value) {
            var ref = Object(react.useRef)();
            return (
              Object(react.useEffect)(
                function () {
                  ref.current = value;
                },
                [value]
              ),
              ref.current
            );
          })(screenSize),
          _useState2 = use_carousel_behavior_slicedToArray(Object(react.useState)(0), 2),
          currentPosition = _useState2[0],
          setCurrentPosition = _useState2[1],
          hasPrevItem = currentPosition > 0,
          hasNextItem = itemCount > currentPosition + 1,
          navigate = Object(react.useCallback)(
            function (direction) {
              if (scrollableRef.current) {
                var newPosition = currentPosition + direction,
                  percentage = 100 * -newPosition;
                (scrollableRef.current.style.transform = 'translateX(' + percentage + '%)'),
                  setCurrentPosition(newPosition);
              }
            },
            [currentPosition]
          ),
          reset = Object(react.useCallback)(function () {
            scrollableRef.current &&
              ((scrollableRef.current.style.transform = 'translateX(-0%)'), setCurrentPosition(0));
          }, []);
        return (
          Object(use_gesture_react_esm.createUseGesture)([use_gesture_core_actions_esm.a])(
            {
              onDragEnd: function onDragEnd(state) {
                var deltaX =
                  use_carousel_behavior_slicedToArray(state.xy, 1)[0] -
                  use_carousel_behavior_slicedToArray(state.initial, 1)[0];
                deltaX > 0 && hasPrevItem ? navigate(-1) : deltaX < 0 && hasNextItem && navigate(1);
              }
            },
            { target: scrollableRef, eventOptions: { passive: !1 } }
          ),
          {
            scrollableRef: scrollableRef,
            hasPrevItem: hasPrevItem,
            hasNextItem: hasNextItem,
            screenSize: screenSize,
            prevScreenSize: prevScreenSize,
            navigate: navigate,
            reset: reset,
            currentPosition: currentPosition
          }
        );
      }
      function multi_carousel_extends() {
        return (
          (multi_carousel_extends =
            Object.assign ||
            function (target) {
              for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source)
                  Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
              }
              return target;
            }),
          multi_carousel_extends.apply(this, arguments)
        );
      }
      var ContentMultiCarouselContext = Object(react.createContext)(void 0);
      var multi_carousel_ContentMultiCarousel = function ContentMultiCarousel(_ref) {
        var _ref$headerOptions = _ref.headerOptions,
          headerOptions = void 0 === _ref$headerOptions ? {} : _ref$headerOptions,
          desktopColumnCount = _ref.desktopColumnCount,
          children = _ref.children,
          onAddedToQueue = _ref.onAddedToQueue,
          onClick = _ref.onClick,
          totalItems = react.Children.count(children),
          _useMultiCarouselBeha = (function useMultiCarouselBehavior(_ref) {
            var desktopColumnCount = _ref.desktopColumnCount,
              itemCount = _ref.itemCount,
              _useCarouselBehavior = useCarouselBehavior({ itemCount: itemCount }),
              scrollableRef = _useCarouselBehavior.scrollableRef,
              screenSize = _useCarouselBehavior.screenSize,
              prevScreenSize = _useCarouselBehavior.prevScreenSize,
              navigate = _useCarouselBehavior.navigate,
              reset = _useCarouselBehavior.reset,
              currentPosition = _useCarouselBehavior.currentPosition,
              countPerSlide = screenSize === ScreenSize.Small ? 1 : desktopColumnCount,
              hasPrevItem = currentPosition > 0,
              hasNextItem = itemCount > (currentPosition + 1) * countPerSlide;
            return (
              Object(react.useEffect)(
                function () {
                  var isCurrentSmallScreen = screenSize === ScreenSize.Small,
                    isPreviousSmallScreen = prevScreenSize === ScreenSize.Small;
                  ((isPreviousSmallScreen && !isCurrentSmallScreen) ||
                    (!isPreviousSmallScreen && isCurrentSmallScreen)) &&
                    reset();
                },
                [screenSize, prevScreenSize, reset]
              ),
              {
                scrollableRef: scrollableRef,
                countPerSlide: countPerSlide,
                hasPrevItem: hasPrevItem,
                hasNextItem: hasNextItem,
                screenSize: screenSize,
                prevScreenSize: prevScreenSize,
                navigate: navigate,
                reset: reset
              }
            );
          })({ desktopColumnCount: desktopColumnCount, itemCount: totalItems }),
          scrollableRef = _useMultiCarouselBeha.scrollableRef,
          hasPrevItem = _useMultiCarouselBeha.hasPrevItem,
          hasNextItem = _useMultiCarouselBeha.hasNextItem,
          navigate = _useMultiCarouselBeha.navigate,
          value = Object(react.useMemo)(
            function () {
              return {
                desktopColumnCount: desktopColumnCount,
                onAddedToQueue: onAddedToQueue,
                onClick: onClick
              };
            },
            [desktopColumnCount, onAddedToQueue, onClick]
          );
        return Object(jsx_runtime.jsx)(ContentMultiCarouselContext.Provider, {
          value: value,
          children: Object(jsx_runtime.jsx)(content_wrapper, {
            headerOptions: headerOptions,
            children: Object(jsx_runtime.jsxs)('div', {
              className: 'whitespace-nowrap overflow-hidden relative',
              children: [
                Object(jsx_runtime.jsx)('ul', {
                  ref: scrollableRef,
                  style: { touchAction: 'none' },
                  className: 'transition-all duration-500 flex',
                  children: children
                }),
                hasPrevItem &&
                  Object(jsx_runtime.jsx)('button', {
                    className:
                      'no-underline font-normal cursor-pointer p-0 text-center text-gray-600 top-2/4 absolute left-0',
                    onClick: function onClick() {
                      return navigate(-1);
                    },
                    'aria-label': 'left',
                    children: Object(jsx_runtime.jsx)(icons_IconLeft, {})
                  }),
                hasNextItem &&
                  Object(jsx_runtime.jsx)('button', {
                    className:
                      'no-underline font-normal cursor-pointer p-0 text-center text-gray-600 top-2/4 absolute right-0',
                    onClick: function onClick() {
                      return navigate(1);
                    },
                    'aria-label': 'right',
                    children: Object(jsx_runtime.jsx)(icons_IconRight, {})
                  })
              ]
            })
          })
        });
      };
      multi_carousel_ContentMultiCarousel.displayName = 'ContentMultiCarousel';
      var multi_carousel_ItemTitleBlock = function ItemTitleBlock(_ref2) {
          var title = _ref2.title,
            courseStartDate = _ref2.courseStartDate;
          return Object(jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
              title &&
                Object(jsx_runtime.jsx)('h4', {
                  className: 'text-sm font-bold mb-2',
                  children: title
                }),
              courseStartDate &&
                Object(jsx_runtime.jsx)('div', {
                  className: 'text-xs text-gray-700 mb-1.5',
                  children: Object(format.a)(courseStartDate, 'MM/dd/yyyy')
                })
            ]
          });
        },
        multi_carousel_ItemSourceBlock = function ItemSourceBlock(_ref3) {
          var contentTypeLabel = _ref3.contentTypeLabel,
            source = _ref3.source;
          return Object(jsx_runtime.jsxs)('p', {
            className: 'text-xs text-gray-700 mb-1.5',
            children: [
              contentTypeLabel && Object(jsx_runtime.jsx)('strong', { children: contentTypeLabel }),
              contentTypeLabel &&
                source &&
                Object(jsx_runtime.jsxs)(jsx_runtime.Fragment, { children: ['|', source] }),
              !contentTypeLabel && source && Object(jsx_runtime.jsx)('strong', { children: source })
            ]
          });
        };
      multi_carousel_ItemSourceBlock.displayName = 'ItemSourceBlock';
      var itemClassnameByDesktopColumnCount = function itemClassnameByDesktopColumnCount(
          desktopColumnCount
        ) {
          switch (desktopColumnCount) {
            case 2:
              return 'md:w-1/2';
            case 3:
              return 'md:w-1/3';
            case 4:
              return 'md:w-1/4';
            case 5:
              return 'md:w-1/5';
          }
          return '';
        },
        multi_carousel_Item = function Item(_ref4) {
          var item = multi_carousel_extends({}, _ref4),
            asset = item.asset,
            title = item.title,
            courseStartDate = item.courseStartDate,
            contentTypeLabel = item.contentTypeLabel,
            source = item.source,
            authors = item.authors,
            shortDescription = item.shortDescription,
            canAddToQueue = item.canAddToQueue,
            isCompleted = item.isCompleted,
            _useContentMultiCarou = (function useContentMultiCarouselContext() {
              var context = Object(react.useContext)(ContentMultiCarouselContext);
              if (!context) throw new Error('No context found for ContentMultiCarouselContext');
              return context;
            })(),
            onAddedToQueue = _useContentMultiCarou.onAddedToQueue,
            onClick = _useContentMultiCarou.onClick,
            desktopColumnCount = _useContentMultiCarou.desktopColumnCount,
            classNames = Object(clsx_m.a)([
              'px-5 pb-5 text-base flex-none w-full',
              itemClassnameByDesktopColumnCount(desktopColumnCount)
            ]);
          return Object(jsx_runtime.jsx)('li', {
            className: classNames,
            children: Object(jsx_runtime.jsx)(item_link_wrapper, {
              item: item,
              onClick: onClick,
              children: Object(jsx_runtime.jsxs)('div', {
                className: 'border-r-2 border-solid border-white relative bg-gray-100',
                children: [
                  Object(jsx_runtime.jsxs)('div', {
                    className: 'relative',
                    children: [
                      isCompleted && Object(jsx_runtime.jsx)(item_completed_block, {}),
                      Object(jsx_runtime.jsx)(item_asset_block, {
                        asset: asset,
                        classNames: 'p-2.5 pb-0'
                      })
                    ]
                  }),
                  Object(jsx_runtime.jsxs)('div', {
                    className: 'text-center py-3 px-1',
                    children: [
                      Object(jsx_runtime.jsx)(multi_carousel_ItemTitleBlock, {
                        title: title,
                        courseStartDate: courseStartDate
                      }),
                      Object(jsx_runtime.jsx)(multi_carousel_ItemSourceBlock, {
                        contentTypeLabel: contentTypeLabel,
                        source: source
                      }),
                      authors &&
                        Object(jsx_runtime.jsx)('p', {
                          className: 'text-xs mb-1 text-gray-700',
                          children: authors
                        }),
                      shortDescription &&
                        Object(jsx_runtime.jsx)('p', {
                          className: 'mt-1.5 mb-0 text-xs relative text-left py-0 px-2',
                          children: shortDescription
                        }),
                      canAddToQueue &&
                        Object(jsx_runtime.jsx)('p', {
                          className: 'text-xs text-gray-700 text-left mt-1.5 mr-0 -mb-1.5 ml-1.5',
                          children: Object(jsx_runtime.jsx)(item_queue_button, {
                            item: item,
                            onClickAsync: onAddedToQueue
                          })
                        })
                    ]
                  })
                ]
              })
            })
          });
        };
      (multi_carousel_Item.displayName = 'Item'),
        (multi_carousel_ContentMultiCarousel.displayName = 'ContentMultiCarousel'),
        (multi_carousel_ContentMultiCarousel.Item = multi_carousel_Item);
      var multi_carousel = multi_carousel_ContentMultiCarousel;
      function carousel_extends() {
        return (
          (carousel_extends =
            Object.assign ||
            function (target) {
              for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source)
                  Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
              }
              return target;
            }),
          carousel_extends.apply(this, arguments)
        );
      }
      var ContentCarouselContext = Object(react.createContext)(void 0);
      var carousel_ItemDot = function ItemDot(_ref) {
        var activeClassname = _ref.isActive ? ' bg-accent' : ' bg-gray-600';
        return Object(jsx_runtime.jsx)('div', {
          className: 'rounded-full inline-block mr-1 h-1 w-1' + activeClassname
        });
      };
      carousel_ItemDot.displayName = 'ItemDot';
      var carousel_ContentCarousel = function ContentCarousel(_ref2) {
        var _ref2$headerOptions = _ref2.headerOptions,
          headerOptions = void 0 === _ref2$headerOptions ? {} : _ref2$headerOptions,
          children = _ref2.children,
          onClick = _ref2.onClick,
          totalItems = react.Children.count(children),
          _useCarouselBehavior = useCarouselBehavior({ itemCount: totalItems }),
          scrollableRef = _useCarouselBehavior.scrollableRef,
          hasPrevItem = _useCarouselBehavior.hasPrevItem,
          hasNextItem = _useCarouselBehavior.hasNextItem,
          navigate = _useCarouselBehavior.navigate,
          currentPosition = _useCarouselBehavior.currentPosition,
          value = Object(react.useMemo)(
            function () {
              return { onClick: onClick };
            },
            [onClick]
          ),
          navBtnBaseClassNames =
            'transition-colors relative text-center no-underline inline-block text-accent-contrast bg-accent hover:bg-accent-hover border border-solid border-accent hover:border-accent-hover p-0.5',
          enabledBtnClassNames = navBtnBaseClassNames + ' cursor-pointer',
          disabledBtnClassNames =
            navBtnBaseClassNames + ' cursor-default pointer-events-none opacity-25',
          prevNavClassNames = hasPrevItem ? enabledBtnClassNames : disabledBtnClassNames,
          nextNavClassNames = hasNextItem ? enabledBtnClassNames : disabledBtnClassNames;
        return Object(jsx_runtime.jsx)(ContentCarouselContext.Provider, {
          value: value,
          children: Object(jsx_runtime.jsx)(content_wrapper, {
            headerOptions: headerOptions,
            children: Object(jsx_runtime.jsxs)('div', {
              className: 'whitespace-nowrap overflow-hidden relative',
              children: [
                Object(jsx_runtime.jsx)('ul', {
                  ref: scrollableRef,
                  style: { touchAction: 'none' },
                  className: 'transition-all duration-500 m-0 flex',
                  children: children
                }),
                Object(jsx_runtime.jsx)('div', {
                  className: 'absolute text-center left-0 w-full bottom-2',
                  children: Array.from({ length: totalItems }, function (v, i) {
                    return Object(jsx_runtime.jsx)(
                      carousel_ItemDot,
                      { isActive: currentPosition === i },
                      'dot-' + i
                    );
                  })
                }),
                Object(jsx_runtime.jsxs)('div', {
                  className: 'absolute bottom-2 right-6',
                  children: [
                    Object(jsx_runtime.jsx)('button', {
                      className: prevNavClassNames,
                      onClick: function onClick() {
                        return navigate(-1);
                      },
                      'aria-label': 'left',
                      children: Object(jsx_runtime.jsx)(icons_IconLeft, {})
                    }),
                    Object(jsx_runtime.jsx)('button', {
                      className: nextNavClassNames,
                      onClick: function onClick() {
                        return navigate(1);
                      },
                      'aria-label': 'right',
                      children: Object(jsx_runtime.jsx)(icons_IconRight, {})
                    })
                  ]
                })
              ]
            })
          })
        });
      };
      carousel_ContentCarousel.displayName = 'ContentCarousel';
      var carousel_Item = function Item(_ref3) {
        var item = carousel_extends({}, _ref3),
          asset = item.asset,
          title = item.title,
          shortDescription = item.shortDescription,
          onClick = (function useContentCarouselContext() {
            var context = Object(react.useContext)(ContentCarouselContext);
            if (!context) throw new Error('No context found for ContentCarouselContext');
            return context;
          })().onClick;
        return Object(jsx_runtime.jsx)('li', {
          className: 'flex-none w-full whitespace-normal text-base',
          children: Object(jsx_runtime.jsx)(item_link_wrapper, {
            item: item,
            onClick: onClick,
            children: Object(jsx_runtime.jsxs)('div', {
              className: 'relative bg-gray-100',
              children: [
                Object(jsx_runtime.jsx)(item_asset_block, { asset: asset, classNames: 'w-full' }),
                Object(jsx_runtime.jsxs)('div', {
                  className: 'absolute bottom-0 left-0 w-full p-4 pb-11 bg-gray-900 bg-opacity-60',
                  children: [
                    Object(jsx_runtime.jsx)('h4', {
                      className: 'mb-0 text-base font-bold text-white',
                      children: title
                    }),
                    shortDescription &&
                      Object(jsx_runtime.jsx)('p', {
                        className: 'mt-1.5 mb-0 text-xs text-white',
                        children: shortDescription
                      })
                  ]
                })
              ]
            })
          })
        });
      };
      (carousel_Item.displayName = 'Item'),
        (carousel_ContentCarousel.displayName = 'ContentCarousel'),
        (carousel_ContentCarousel.Item = carousel_Item);
      var carousel = carousel_ContentCarousel;
      function tile_image_overlay_extends() {
        return (
          (tile_image_overlay_extends =
            Object.assign ||
            function (target) {
              for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source)
                  Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
              }
              return target;
            }),
          tile_image_overlay_extends.apply(this, arguments)
        );
      }
      var ContentTileImageOverlayContext = Object(react.createContext)(void 0);
      var tile_image_overlay_ContentTileImageOverlay = function ContentTileImageOverlay(_ref) {
        var _ref$headerOptions = _ref.headerOptions,
          headerOptions = void 0 === _ref$headerOptions ? {} : _ref$headerOptions,
          desktopColumnCount = _ref.desktopColumnCount,
          children = _ref.children,
          onAddedToQueue = _ref.onAddedToQueue,
          onClick = _ref.onClick,
          value = Object(react.useMemo)(
            function () {
              return {
                desktopColumnCount: desktopColumnCount,
                onAddedToQueue: onAddedToQueue,
                onClick: onClick
              };
            },
            [desktopColumnCount, onAddedToQueue, onClick]
          );
        return Object(jsx_runtime.jsx)(ContentTileImageOverlayContext.Provider, {
          value: value,
          children: Object(jsx_runtime.jsx)(content_wrapper, {
            headerOptions: headerOptions,
            children: Object(jsx_runtime.jsx)('ul', {
              className: Object(clsx_m.a)([
                'grid gap-5 grid-cols-1',
                tileClassnameByDesktopColumnCount(desktopColumnCount)
              ]),
              children: children
            })
          })
        });
      };
      tile_image_overlay_ContentTileImageOverlay.displayName = 'ContentTileImageOverlay';
      var tile_image_overlay_Item = function Item(_ref2) {
        var item = tile_image_overlay_extends({}, _ref2),
          asset = item.asset,
          title = item.title,
          shortDescription = item.shortDescription,
          canAddToQueue = item.canAddToQueue,
          _useContentTileImageO = (function useContentTileImageOverlayContext() {
            var context = Object(react.useContext)(ContentTileImageOverlayContext);
            if (!context) throw new Error('No context found for ContentTileImageOverlay');
            return context;
          })(),
          onAddedToQueue = _useContentTileImageO.onAddedToQueue,
          onClick = _useContentTileImageO.onClick;
        return Object(jsx_runtime.jsx)('li', {
          children: Object(jsx_runtime.jsx)(item_link_wrapper, {
            item: item,
            onClick: onClick,
            children: Object(jsx_runtime.jsxs)('div', {
              className: 'relative',
              children: [
                Object(jsx_runtime.jsx)(item_asset_block, { asset: asset }),
                Object(jsx_runtime.jsxs)('div', {
                  className: 'absolute bottom-0 left-0 p-4 w-full bg-gray-900 bg-opacity-80',
                  children: [
                    Object(jsx_runtime.jsx)('h4', {
                      className: 'mb-0 text-sm text-white',
                      children: title
                    }),
                    shortDescription &&
                      Object(jsx_runtime.jsx)('p', {
                        className: 'mt-1 mb-0 text-xs text-white',
                        children: shortDescription
                      }),
                    canAddToQueue &&
                      Object(jsx_runtime.jsx)('p', {
                        className: 'mt-1 -mb-1 text-xs text-white text-left',
                        children: Object(jsx_runtime.jsx)(item_queue_button, {
                          item: item,
                          onClickAsync: onAddedToQueue,
                          classNames: 'hover:text-gray-600'
                        })
                      })
                  ]
                })
              ]
            })
          })
        });
      };
      (tile_image_overlay_Item.displayName = 'Item'),
        (tile_image_overlay_ContentTileImageOverlay.displayName = 'ContentTileImageOverlay'),
        (tile_image_overlay_ContentTileImageOverlay.Item = tile_image_overlay_Item);
      var tile_image_overlay = tile_image_overlay_ContentTileImageOverlay;
    },
    './packages/featured-content/src/variants/sidebar/rss.tsx': function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, 'a', function () {
        return RSS_ITEMS_QUERY;
      });
      __webpack_require__('./node_modules/core-js/modules/es.array.slice.js'),
        __webpack_require__('./node_modules/core-js/modules/es.array.map.js'),
        __webpack_require__('./node_modules/core-js/modules/es.string.link.js'),
        __webpack_require__('./node_modules/react/index.js');
      var _templateObject,
        _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          './node_modules/graphql-tag/lib/index.js'
        ),
        _apollo_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          './node_modules/@apollo/client/react/hooks/useQuery.js'
        ),
        react_i18next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          './node_modules/react-i18next/dist/es/useTranslation.js'
        ),
        _wrapper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          './packages/featured-content/src/variants/sidebar/wrapper.tsx'
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        );
      var RSS_ITEMS_QUERY = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_4__.a)(
          _templateObject ||
            (_templateObject = (function _taggedTemplateLiteralLoose(strings, raw) {
              return raw || (raw = strings.slice(0)), (strings.raw = raw), strings;
            })([
              '\n  query RssItemsQuery($feedUrl: String!) {\n    RssItems(feedUrl: $feedUrl) {\n      title\n      link\n    }\n  }\n'
            ]))
        ),
        SidebarRss = function SidebarRss(_ref) {
          var content,
            title = _ref.title,
            feedUrl = _ref.feedUrl,
            t = Object(react_i18next__WEBPACK_IMPORTED_MODULE_6__.a)().t,
            _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_5__.a)(RSS_ITEMS_QUERY, {
              variables: { feedUrl: feedUrl }
            }),
            data = _useQuery.data,
            loading = _useQuery.loading,
            error = _useQuery.error;
          return (
            (content =
              loading || error
                ? Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)('h5', {
                    children: t('please-wait')
                  })
                : Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment,
                    {
                      children:
                        data &&
                        data.RssItems.map(function (_ref2, index) {
                          var title = _ref2.title,
                            link = _ref2.link;
                          return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(
                            'a',
                            { href: link, className: 'block mb-4', children: title },
                            index
                          );
                        })
                    }
                  )),
            Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(
              _wrapper__WEBPACK_IMPORTED_MODULE_7__.a,
              { title: title, children: content }
            )
          );
        };
      (SidebarRss.displayName = 'SidebarRss'),
        (SidebarRss.displayName = 'SidebarRss'),
        (__webpack_exports__.b = SidebarRss);
    },
    './packages/featured-content/src/variants/sidebar/wrapper.tsx': function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__('./node_modules/react/index.js');
      var _thoughtindustries_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './packages/header/src/index.ts'
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        ),
        SidebarWrapper = function SidebarWrapper(_ref) {
          var title = _ref.title,
            children = _ref.children;
          return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)('div', {
            className: 'md:h-full md:absolute md:left-0 w-full',
            children: [
              title &&
                Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                  _thoughtindustries_header__WEBPACK_IMPORTED_MODULE_1__.Header,
                  { title: title, alternateTitleDisplay: !0 }
                ),
              Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)('div', {
                className: 'overflow-y-scroll text-sm md:h-full',
                children: children
              })
            ]
          });
        };
      (SidebarWrapper.displayName = 'SidebarWrapper'),
        (SidebarWrapper.displayName = 'SidebarWrapper'),
        (__webpack_exports__.a = SidebarWrapper);
    },
    './packages/featured-content/stories/FeaturedContent.stories.tsx': function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'TileStandardLayout', function () {
          return TileStandardLayout;
        }),
        __webpack_require__.d(__webpack_exports__, 'TileDescriptiveLayout', function () {
          return TileDescriptiveLayout;
        }),
        __webpack_require__.d(__webpack_exports__, 'MultiCarousel', function () {
          return MultiCarousel;
        }),
        __webpack_require__.d(__webpack_exports__, 'Carousel', function () {
          return Carousel;
        }),
        __webpack_require__.d(__webpack_exports__, 'TileImageOverlay', function () {
          return TileImageOverlay;
        }),
        __webpack_require__.d(__webpack_exports__, 'WithLeftSidebar', function () {
          return WithLeftSidebar;
        }),
        __webpack_require__.d(__webpack_exports__, 'WithRightSidebar', function () {
          return WithRightSidebar;
        });
      __webpack_require__('./node_modules/core-js/modules/es.date.to-string.js'),
        __webpack_require__('./node_modules/core-js/modules/es.promise.js'),
        __webpack_require__('./node_modules/core-js/modules/es.object.to-string.js'),
        __webpack_require__('./node_modules/core-js/modules/es.object.assign.js'),
        __webpack_require__('./node_modules/react/index.js');
      var _src__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          './packages/featured-content/src/index.ts'
        ),
        _src_variants_sidebar_rss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          './packages/featured-content/src/variants/sidebar/rss.tsx'
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        );
      __webpack_exports__.default = { title: 'Example/FeaturedContent' };
      var headerOptions = { title: 'Feature Content Header' },
        mockItems = {
          manual: {
            title: 'Manual item',
            description: 'description',
            shortDescription: 'short description',
            linkUrl: '/',
            canAddToQueue: !1
          },
          dynamic: {
            title: 'Dynamic item',
            courseStartDate: new Date(2020, 0, 1),
            contentTypeLabel: 'Course',
            source: 'Test source',
            authors: 'Test Author',
            description: 'description',
            shortDescription: 'short description',
            linkUrl: '/',
            isCompleted: !0,
            asset:
              'https://d36ai2hkxl16us.cloudfront.net/thoughtindustries/image/upload/a_exif,c_fill,w_800/v1416438573/placeholder_kcjvxm.jpg',
            canAddToQueue: !0,
            isActive: !0,
            callToAction: 'View Details',
            ribbon: {
              bgColor: '#39ad39',
              contrastColor: '#fff',
              darkerColor: '#2c872c',
              label: 'Test ribbon',
              slug: 'test-ribbon'
            },
            rating: 36,
            hasAvailability: !1,
            priceInCents: 6500,
            suggestedRetailPriceInCents: 8e3
          },
          dynamicTwo: {
            title: 'Dynamic item 2',
            courseStartDate: new Date(2020, 0, 1),
            contentTypeLabel: 'Course',
            source: 'Test source',
            authors: 'Test Author',
            description: 'description',
            shortDescription: 'short description',
            linkUrl: '/',
            isCompleted: !0,
            asset:
              'https://d36ai2hkxl16us.cloudfront.net/thoughtindustries/image/upload/a_exif,c_fit,w_800/v1/course-uploads/5fea45fb-d8cb-4f0a-b048-932cc361b20a/pfg9202pfzkd-test-image-5_800x600.jpg',
            canAddToQueue: !0,
            isActive: !0,
            callToAction: 'View Details',
            rating: 87,
            hasAvailability: !1,
            priceInCents: 6500,
            suggestedRetailPriceInCents: 8e3
          }
        },
        mockApolloResults = {
          sidebarRss: {
            request: {
              query: _src_variants_sidebar_rss__WEBPACK_IMPORTED_MODULE_6__.a,
              variables: { feedUrl: 'https://foo/bar' }
            },
            result: {
              data: {
                RssItems: [
                  { title: 'Link 1', link: '/rss-link1' },
                  { title: 'Link 2', link: '/rss-link2' },
                  { title: 'Link 3', link: '/rss-link3' }
                ]
              }
            }
          }
        },
        handleAddedToQueue = function handleAddedToQueue() {
          return Promise.resolve();
        },
        TileStandardLayout = function TileStandardLayout() {
          return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(
            _src__WEBPACK_IMPORTED_MODULE_5__.f,
            {
              children: Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(
                _src__WEBPACK_IMPORTED_MODULE_5__.e,
                {
                  headerOptions: headerOptions,
                  desktopColumnCount: 2,
                  onAddedToQueue: handleAddedToQueue,
                  children: [
                    Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(
                      _src__WEBPACK_IMPORTED_MODULE_5__.e.Item,
                      Object.assign({}, mockItems.dynamic)
                    ),
                    Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(
                      _src__WEBPACK_IMPORTED_MODULE_5__.e.Item,
                      Object.assign({}, mockItems.manual)
                    ),
                    Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(
                      _src__WEBPACK_IMPORTED_MODULE_5__.e.Item,
                      Object.assign({}, mockItems.manual)
                    ),
                    Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(
                      _src__WEBPACK_IMPORTED_MODULE_5__.e.Item,
                      Object.assign({}, mockItems.manual)
                    )
                  ]
                }
              )
            }
          );
        };
      TileStandardLayout.displayName = 'TileStandardLayout';
      var TileDescriptiveLayout = function TileDescriptiveLayout() {
        return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(
          _src__WEBPACK_IMPORTED_MODULE_5__.f,
          {
            children: Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(
              _src__WEBPACK_IMPORTED_MODULE_5__.c,
              {
                headerOptions: headerOptions,
                desktopColumnCount: 2,
                onAddedToQueue: handleAddedToQueue,
                children: [
                  Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(
                    _src__WEBPACK_IMPORTED_MODULE_5__.c.Item,
                    Object.assign({}, mockItems.dynamic)
                  ),
                  Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(
                    _src__WEBPACK_IMPORTED_MODULE_5__.c.Item,
                    Object.assign({}, mockItems.manual)
                  ),
                  Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(
                    _src__WEBPACK_IMPORTED_MODULE_5__.c.Item,
                    Object.assign({}, mockItems.manual)
                  ),
                  Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(
                    _src__WEBPACK_IMPORTED_MODULE_5__.c.Item,
                    Object.assign({}, mockItems.manual)
                  )
                ]
              }
            )
          }
        );
      };
      TileDescriptiveLayout.displayName = 'TileDescriptiveLayout';
      var MultiCarousel = function MultiCarousel() {
        return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(
          _src__WEBPACK_IMPORTED_MODULE_5__.f,
          {
            children: Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(
              _src__WEBPACK_IMPORTED_MODULE_5__.b,
              {
                headerOptions: headerOptions,
                desktopColumnCount: 2,
                onAddedToQueue: handleAddedToQueue,
                children: [
                  Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(
                    _src__WEBPACK_IMPORTED_MODULE_5__.b.Item,
                    Object.assign({}, mockItems.dynamic)
                  ),
                  Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(
                    _src__WEBPACK_IMPORTED_MODULE_5__.b.Item,
                    Object.assign({}, mockItems.manual)
                  ),
                  Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(
                    _src__WEBPACK_IMPORTED_MODULE_5__.b.Item,
                    Object.assign({}, mockItems.manual)
                  ),
                  Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(
                    _src__WEBPACK_IMPORTED_MODULE_5__.b.Item,
                    Object.assign({}, mockItems.manual)
                  )
                ]
              }
            )
          }
        );
      };
      MultiCarousel.displayName = 'MultiCarousel';
      var Carousel = function Carousel() {
        return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(
          _src__WEBPACK_IMPORTED_MODULE_5__.f,
          {
            children: Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(
              _src__WEBPACK_IMPORTED_MODULE_5__.a,
              {
                headerOptions: headerOptions,
                children: [
                  Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(
                    _src__WEBPACK_IMPORTED_MODULE_5__.a.Item,
                    Object.assign({}, mockItems.dynamic)
                  ),
                  Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(
                    _src__WEBPACK_IMPORTED_MODULE_5__.a.Item,
                    Object.assign({}, mockItems.dynamicTwo)
                  )
                ]
              }
            )
          }
        );
      };
      Carousel.displayName = 'Carousel';
      var TileImageOverlay = function TileImageOverlay() {
        return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(
          _src__WEBPACK_IMPORTED_MODULE_5__.f,
          {
            children: Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(
              _src__WEBPACK_IMPORTED_MODULE_5__.d,
              {
                headerOptions: headerOptions,
                desktopColumnCount: 2,
                onAddedToQueue: handleAddedToQueue,
                children: [
                  Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(
                    _src__WEBPACK_IMPORTED_MODULE_5__.d.Item,
                    Object.assign({}, mockItems.dynamic)
                  ),
                  Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(
                    _src__WEBPACK_IMPORTED_MODULE_5__.d.Item,
                    Object.assign({}, mockItems.dynamicTwo)
                  )
                ]
              }
            )
          }
        );
      };
      TileImageOverlay.displayName = 'TileImageOverlay';
      var WithLeftSidebar = function WithLeftSidebar() {
        return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(
          _src__WEBPACK_IMPORTED_MODULE_5__.f,
          {
            sidebar: Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(
              _src__WEBPACK_IMPORTED_MODULE_5__.i,
              { title: 'RSS', feedUrl: 'https://foo/bar' }
            ),
            sidebarPosition: _src__WEBPACK_IMPORTED_MODULE_5__.h.Left,
            children: Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(
              _src__WEBPACK_IMPORTED_MODULE_5__.e,
              {
                headerOptions: headerOptions,
                desktopColumnCount: 2,
                onAddedToQueue: handleAddedToQueue,
                children: [
                  Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(
                    _src__WEBPACK_IMPORTED_MODULE_5__.e.Item,
                    Object.assign({}, mockItems.manual)
                  ),
                  Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(
                    _src__WEBPACK_IMPORTED_MODULE_5__.e.Item,
                    Object.assign({}, mockItems.manual)
                  ),
                  Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(
                    _src__WEBPACK_IMPORTED_MODULE_5__.e.Item,
                    Object.assign({}, mockItems.manual)
                  )
                ]
              }
            )
          }
        );
      };
      (WithLeftSidebar.displayName = 'WithLeftSidebar'),
        (WithLeftSidebar.parameters = { apolloClient: { mocks: [mockApolloResults.sidebarRss] } });
      var WithRightSidebar = function WithRightSidebar() {
        return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(
          _src__WEBPACK_IMPORTED_MODULE_5__.f,
          {
            sidebar: Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(
              _src__WEBPACK_IMPORTED_MODULE_5__.g,
              { title: 'Default', children: 'Static sidebar content' }
            ),
            sidebarPosition: _src__WEBPACK_IMPORTED_MODULE_5__.h.Right,
            children: Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(
              _src__WEBPACK_IMPORTED_MODULE_5__.e,
              {
                headerOptions: headerOptions,
                desktopColumnCount: 2,
                onAddedToQueue: handleAddedToQueue,
                children: [
                  Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(
                    _src__WEBPACK_IMPORTED_MODULE_5__.e.Item,
                    Object.assign({}, mockItems.manual)
                  ),
                  Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(
                    _src__WEBPACK_IMPORTED_MODULE_5__.e.Item,
                    Object.assign({}, mockItems.manual)
                  ),
                  Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(
                    _src__WEBPACK_IMPORTED_MODULE_5__.e.Item,
                    Object.assign({}, mockItems.manual)
                  )
                ]
              }
            )
          }
        );
      };
      (WithRightSidebar.displayName = 'WithRightSidebar'),
        (TileStandardLayout.parameters = Object.assign(
          {
            storySource: {
              source:
                '() => (\n  <FeaturedContent>\n    <ContentTileStandardLayout\n      headerOptions={headerOptions}\n      desktopColumnCount={2}\n      onAddedToQueue={handleAddedToQueue}\n    >\n      <ContentTileStandardLayout.Item {...mockItems.dynamic} />\n      <ContentTileStandardLayout.Item {...mockItems.manual} />\n      <ContentTileStandardLayout.Item {...mockItems.manual} />\n      <ContentTileStandardLayout.Item {...mockItems.manual} />\n    </ContentTileStandardLayout>\n  </FeaturedContent>\n)'
            }
          },
          TileStandardLayout.parameters
        )),
        (TileDescriptiveLayout.parameters = Object.assign(
          {
            storySource: {
              source:
                '() => (\n  <FeaturedContent>\n    <ContentTileDescriptiveLayout\n      headerOptions={headerOptions}\n      desktopColumnCount={2}\n      onAddedToQueue={handleAddedToQueue}\n    >\n      <ContentTileDescriptiveLayout.Item {...mockItems.dynamic} />\n      <ContentTileDescriptiveLayout.Item {...mockItems.manual} />\n      <ContentTileDescriptiveLayout.Item {...mockItems.manual} />\n      <ContentTileDescriptiveLayout.Item {...mockItems.manual} />\n    </ContentTileDescriptiveLayout>\n  </FeaturedContent>\n)'
            }
          },
          TileDescriptiveLayout.parameters
        )),
        (MultiCarousel.parameters = Object.assign(
          {
            storySource: {
              source:
                '() => (\n  <FeaturedContent>\n    <ContentMultiCarousel\n      headerOptions={headerOptions}\n      desktopColumnCount={2}\n      onAddedToQueue={handleAddedToQueue}\n    >\n      <ContentMultiCarousel.Item {...mockItems.dynamic} />\n      <ContentMultiCarousel.Item {...mockItems.manual} />\n      <ContentMultiCarousel.Item {...mockItems.manual} />\n      <ContentMultiCarousel.Item {...mockItems.manual} />\n    </ContentMultiCarousel>\n  </FeaturedContent>\n)'
            }
          },
          MultiCarousel.parameters
        )),
        (Carousel.parameters = Object.assign(
          {
            storySource: {
              source:
                '() => (\n  <FeaturedContent>\n    <ContentCarousel headerOptions={headerOptions}>\n      <ContentCarousel.Item {...mockItems.dynamic} />\n      <ContentCarousel.Item {...mockItems.dynamicTwo} />\n    </ContentCarousel>\n  </FeaturedContent>\n)'
            }
          },
          Carousel.parameters
        )),
        (TileImageOverlay.parameters = Object.assign(
          {
            storySource: {
              source:
                '() => (\n  <FeaturedContent>\n    <ContentTileImageOverlay\n      headerOptions={headerOptions}\n      desktopColumnCount={2}\n      onAddedToQueue={handleAddedToQueue}\n    >\n      <ContentTileImageOverlay.Item {...mockItems.dynamic} />\n      <ContentTileImageOverlay.Item {...mockItems.dynamicTwo} />\n    </ContentTileImageOverlay>\n  </FeaturedContent>\n)'
            }
          },
          TileImageOverlay.parameters
        )),
        (WithLeftSidebar.parameters = Object.assign(
          {
            storySource: {
              source:
                '() => (\n  <FeaturedContent\n    sidebar={<SidebarRss title="RSS" feedUrl={mockFeedUrl} />}\n    sidebarPosition={SidebarPosition.Left}\n  >\n    <ContentTileStandardLayout\n      headerOptions={headerOptions}\n      desktopColumnCount={2}\n      onAddedToQueue={handleAddedToQueue}\n    >\n      <ContentTileStandardLayout.Item {...mockItems.manual} />\n      <ContentTileStandardLayout.Item {...mockItems.manual} />\n      <ContentTileStandardLayout.Item {...mockItems.manual} />\n    </ContentTileStandardLayout>\n  </FeaturedContent>\n)'
            }
          },
          WithLeftSidebar.parameters
        )),
        (WithRightSidebar.parameters = Object.assign(
          {
            storySource: {
              source:
                '() => (\n  <FeaturedContent\n    sidebar={<SidebarDefault title="Default">Static sidebar content</SidebarDefault>}\n    sidebarPosition={SidebarPosition.Right}\n  >\n    <ContentTileStandardLayout\n      headerOptions={headerOptions}\n      desktopColumnCount={2}\n      onAddedToQueue={handleAddedToQueue}\n    >\n      <ContentTileStandardLayout.Item {...mockItems.manual} />\n      <ContentTileStandardLayout.Item {...mockItems.manual} />\n      <ContentTileStandardLayout.Item {...mockItems.manual} />\n    </ContentTileStandardLayout>\n  </FeaturedContent>\n)'
            }
          },
          WithRightSidebar.parameters
        ));
    },
    './packages/featured-content/stories/FeaturedContentWithDataFetching.stories.tsx': function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'WithCatalogQuery', function () {
          return FeaturedContentWithDataFetching_stories_WithCatalogQuery;
        }),
        __webpack_require__.d(__webpack_exports__, 'WithQueryContentsQuery', function () {
          return FeaturedContentWithDataFetching_stories_WithQueryContentsQuery;
        }),
        __webpack_require__.d(__webpack_exports__, 'WithUserRecentContentQuery', function () {
          return FeaturedContentWithDataFetching_stories_WithUserRecentContentQuery;
        });
      __webpack_require__('./node_modules/core-js/modules/es.array.slice.js'),
        __webpack_require__('./node_modules/core-js/modules/es.array.is-array.js'),
        __webpack_require__('./node_modules/core-js/modules/es.symbol.iterator.js'),
        __webpack_require__('./node_modules/core-js/modules/es.string.iterator.js'),
        __webpack_require__('./node_modules/core-js/modules/es.array.iterator.js'),
        __webpack_require__('./node_modules/core-js/modules/web.dom-collections.iterator.js'),
        __webpack_require__('./node_modules/core-js/modules/es.function.name.js'),
        __webpack_require__('./node_modules/core-js/modules/es.array.from.js'),
        __webpack_require__('./node_modules/core-js/modules/es.object.keys.js'),
        __webpack_require__('./node_modules/core-js/modules/es.array.index-of.js'),
        __webpack_require__('./node_modules/core-js/modules/es.object.assign.js'),
        __webpack_require__('./node_modules/core-js/modules/es.promise.js'),
        __webpack_require__('./node_modules/core-js/modules/es.object.to-string.js'),
        __webpack_require__('./node_modules/core-js/modules/es.array.map.js'),
        __webpack_require__('./node_modules/core-js/modules/es.symbol.js'),
        __webpack_require__('./node_modules/core-js/modules/es.symbol.description.js'),
        __webpack_require__('./node_modules/core-js/modules/es.array.join.js'),
        __webpack_require__('./node_modules/react/index.js');
      var AvailabilityStatus,
        ContentKind,
        AlternativePricingType,
        lib = __webpack_require__('./node_modules/graphql-tag/lib/index.js'),
        useMutation = __webpack_require__(
          './node_modules/@apollo/client/react/hooks/useMutation.js'
        ),
        useQuery = __webpack_require__('./node_modules/@apollo/client/react/hooks/useQuery.js'),
        useTranslation = __webpack_require__(
          './node_modules/react-i18next/dist/es/useTranslation.js'
        ),
        zonedTimeToUtc =
          (__webpack_require__('./node_modules/core-js/modules/es.array.includes.js'),
          __webpack_require__('./node_modules/core-js/modules/es.string.includes.js'),
          __webpack_require__('./node_modules/core-js/modules/es.object.entries.js'),
          __webpack_require__('./node_modules/date-fns-tz/esm/zonedTimeToUtc/index.js')),
        format = __webpack_require__('./node_modules/date-fns/esm/format/index.js');
      !(function (AvailabilityStatus) {
        (AvailabilityStatus.Completed = 'completed'),
          (AvailabilityStatus.Available = 'available'),
          (AvailabilityStatus.Started = 'started'),
          (AvailabilityStatus.NotStarted = 'not-started'),
          (AvailabilityStatus.NotCompleted = 'not-completed');
      })(AvailabilityStatus || (AvailabilityStatus = {})),
        (function (ContentKind) {
          (ContentKind.CourseGroup = 'courseGroup'),
            (ContentKind.Article = 'article'),
            (ContentKind.Webinar = 'webinar'),
            (ContentKind.WebinarCourse = 'webinarCourse'),
            (ContentKind.Video = 'video'),
            (ContentKind.ShareableContentObject = 'shareableContentObject'),
            (ContentKind.XApiObject = 'xApiObject'),
            (ContentKind.Course = 'course'),
            (ContentKind.Bundle = 'bundle'),
            (ContentKind.DiscountGroup = 'discountGroup'),
            (ContentKind.PickableGroup = 'pickableGroup'),
            (ContentKind.Product = 'product'),
            (ContentKind.LearningPath = 'learningPath'),
            (ContentKind.InPersonEvent = 'inPersonEvent'),
            (ContentKind.InPersonEventCourse = 'inPersonEventCourse'),
            (ContentKind.Sellable = 'sellable');
        })(ContentKind || (ContentKind = {})),
        (function (AlternativePricingType) {
          AlternativePricingType.Membership = 'membership';
        })(AlternativePricingType || (AlternativePricingType = {}));
      var isSameDay = __webpack_require__('./node_modules/date-fns/esm/isSameDay/index.js'),
        VILT_KINDS = [ContentKind.Webinar, ContentKind.WebinarCourse],
        ILT_KINDS = [ContentKind.InPersonEvent, ContentKind.InPersonEventCourse];
      var _templateObject,
        _templateObject2,
        _templateObject3,
        _templateObject4,
        _templateObject5,
        hydrate_content_getCallToAction = function getCallToAction(
          i18n,
          partialHydratedContentItem
        ) {
          if (
            partialHydratedContentItem.hasAvailability &&
            !partialHydratedContentItem.waitlistingTriggered
          ) {
            if (partialHydratedContentItem.coursePresold) {
              var runs = (function courseRunsPhrase(kind, startDate, endDate, timeZone) {
                timeZone || (timeZone = 'America/New_York');
                var parsedStartDate = Object(zonedTimeToUtc.a)(startDate, timeZone),
                  parsedEndDate = endDate ? Object(zonedTimeToUtc.a)(endDate, timeZone) : null;
                return ILT_KINDS.includes(kind) || VILT_KINDS.includes(kind)
                  ? parsedEndDate
                    ? Object(isSameDay.a)(parsedStartDate, parsedEndDate)
                      ? Object(format.a)(parsedStartDate, 'eee, MMM do yyyy hh:mm aaa') +
                        ' – ' +
                        Object(format.a)(parsedEndDate, 'hh:mm aaa z')
                      : Object(format.a)(parsedStartDate, 'eee, MMM do yyyy hh:mm aaa') +
                        ' – ' +
                        Object(format.a)(parsedEndDate, 'eee, MMM do yyyy hh:mm aaa z')
                    : '' + Object(format.a)(parsedStartDate, 'eee, MMM do yyyy hh:mm aaa z')
                  : parsedEndDate
                  ? Object(format.a)(parsedStartDate, 'MMM do yyyy') +
                    ' – ' +
                    Object(format.a)(parsedEndDate, 'MMM do yyyy')
                  : Object(format.a)(parsedStartDate, 'MMM do yyyy');
              })(
                partialHydratedContentItem.kind,
                partialHydratedContentItem.courseStartDate,
                partialHydratedContentItem.courseEndDate,
                partialHydratedContentItem.timeZone
              );
              return (
                (partialHydratedContentItem.usesContentAccessText
                  ? i18n.t('content-access')
                  : partialHydratedContentItem.contentTypeLabel + ' ' + i18n.t('runs')) +
                ' ' +
                runs
              );
            }
            return partialHydratedContentItem.courseGracePeriodEnded
              ? i18n.t('course-ended') +
                  ' ' +
                  Object(format.a)(
                    partialHydratedContentItem.courseGracePeriodEndDate ||
                      partialHydratedContentItem.courseEndDate,
                    'MMM do YYYY'
                  )
              : partialHydratedContentItem.hasUnmetPrerequisites
              ? i18n.t('course.prerequisites')
              : partialHydratedContentItem.bulkPurchasingEnabled
              ? i18n.t('course-view-details')
              : partialHydratedContentItem.isCompleted
              ? partialHydratedContentItem.kind === ContentKind.LearningPath
                ? i18n.t('learning-path.view')
                : i18n.t('view-course', {
                    contentType: partialHydratedContentItem.contentTypeLabel
                  })
              : partialHydratedContentItem.isStarted
              ? partialHydratedContentItem.kind === ContentKind.LearningPath
                ? i18n.t('learning-path.continue')
                : i18n.t('continue-course')
              : partialHydratedContentItem.isNotStarted
              ? partialHydratedContentItem.kind === ContentKind.LearningPath
                ? i18n.t('learning-path.start')
                : i18n.t('start-course', {
                    contentType: partialHydratedContentItem.contentTypeLabel
                  })
              : partialHydratedContentItem.isNotCompleted
              ? i18n.t('not-completed-course')
              : i18n.t('course-view-details');
          }
          return partialHydratedContentItem.waitlistingTriggered &&
            partialHydratedContentItem.waitlistingEnabled
            ? i18n.t('join-waitlist')
            : i18n.t('course-view-details');
        },
        hydrate_content_getHref = function getHref(partialHydratedContentItem) {
          var itemKind = partialHydratedContentItem.kind,
            itemSlug = partialHydratedContentItem.slug;
          return itemKind === ContentKind.Product
            ? '/products/' + itemSlug
            : itemKind === ContentKind.Bundle
            ? '/bundles/' + itemSlug
            : itemKind === ContentKind.PickableGroup
            ? '/cart-collections/' + itemSlug
            : itemKind === ContentKind.DiscountGroup
            ? '/collections/' + itemSlug
            : itemKind === ContentKind.LearningPath && partialHydratedContentItem.isActive
            ? partialHydratedContentItem.hasAvailability &&
              !partialHydratedContentItem.bulkPurchasingEnabled
              ? '/learn/learning-path/' + itemSlug
              : '/learning-paths/' + itemSlug
            : partialHydratedContentItem.isActive
            ? partialHydratedContentItem.hasAvailability
              ? itemKind === ContentKind.ShareableContentObject ||
                itemKind === ContentKind.XApiObject
                ? partialHydratedContentItem.isAvailable
                  ? '/courses/' + itemSlug
                  : '#'
                : (!partialHydratedContentItem.isCompleted &&
                    !partialHydratedContentItem.isStarted) ||
                  partialHydratedContentItem.bulkPurchasingEnabled
                ? partialHydratedContentItem.isNotStarted
                  ? '/learn/enroll/' + partialHydratedContentItem.displayCourse
                  : '/courses/' + itemSlug
                : itemKind === ContentKind.Webinar
                ? '/learn/webinars/' + partialHydratedContentItem.displayCourse + '/redirect'
                : itemKind === ContentKind.Article
                ? '/learn/article/' + partialHydratedContentItem.displayCourseSlug
                : itemKind === ContentKind.InPersonEvent
                ? '/learn/event/' + partialHydratedContentItem.displayCourseSlug
                : itemKind === ContentKind.Video
                ? '/learn/video/' + partialHydratedContentItem.displayCourseSlug
                : '/learn/course/' + partialHydratedContentItem.displayCourseSlug
              : '/courses/' + itemSlug
            : itemKind === ContentKind.Webinar || itemKind === ContentKind.InPersonEvent
            ? '/courses/' + itemSlug
            : '#';
        },
        hydrate_content = function hydrateContentItem(i18n, contentItem) {
          var hasAvailability,
            isCompleted,
            isAvailable,
            isStarted,
            isNotStarted,
            isNotCompleted,
            kindIsScormOrXApi,
            locationIsOnline,
            locationIsInPerson,
            usesContentAccessText,
            customFields = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            hasUnmetPrerequisites =
              (contentItem.currentUserUnmetCoursePrerequisites || []).length > 0 ||
              (contentItem.currentUserUnmetLearningPathPrerequisites || []).length > 0,
            isActive =
              !contentItem.coursePresold &&
              !contentItem.courseGracePeriodEnded &&
              !hasUnmetPrerequisites,
            meetingStartDate = contentItem.meetingStartDate
              ? Object(zonedTimeToUtc.a)(contentItem.meetingStartDate, contentItem.timeZone)
              : void 0,
            courseStartDate = Object(zonedTimeToUtc.a)(
              contentItem.courseStartDate,
              contentItem.timeZone
            ),
            courseEndDate = contentItem.courseEndDate
              ? Object(zonedTimeToUtc.a)(contentItem.courseEndDate, contentItem.timeZone)
              : void 0,
            courseGracePeriodEndDate = contentItem.courseGracePeriodEndDate
              ? Object(zonedTimeToUtc.a)(contentItem.courseGracePeriodEndDate, contentItem.timeZone)
              : void 0;
          contentItem.availabilityStatus
            ? ((hasAvailability = !0),
              (isCompleted = contentItem.availabilityStatus === AvailabilityStatus.Completed),
              (isAvailable = contentItem.availabilityStatus === AvailabilityStatus.Available),
              (isStarted = contentItem.availabilityStatus === AvailabilityStatus.Started),
              (isNotStarted = contentItem.availabilityStatus === AvailabilityStatus.NotStarted),
              (isNotCompleted = contentItem.availabilityStatus === AvailabilityStatus.NotCompleted))
            : (hasAvailability = !1),
            (contentItem.kind !== ContentKind.ShareableContentObject &&
              contentItem.kind !== ContentKind.XApiObject) ||
              (kindIsScormOrXApi = !0),
            [ContentKind.Webinar, ContentKind.WebinarCourse].includes(contentItem.kind) &&
              (locationIsOnline = !0),
            [ContentKind.InPersonEvent, ContentKind.InPersonEventCourse].includes(
              contentItem.kind
            ) && (locationIsInPerson = !0),
            [ContentKind.WebinarCourse, ContentKind.InPersonEventCourse].includes(
              contentItem.kind
            ) && (usesContentAccessText = !0);
          var partialHydratedContentItem = Object.assign({}, contentItem, {
              hasUnmetPrerequisites: hasUnmetPrerequisites,
              isActive: isActive,
              meetingStartDate: meetingStartDate,
              courseStartDate: courseStartDate,
              courseEndDate: courseEndDate,
              courseGracePeriodEndDate: courseGracePeriodEndDate,
              hasAvailability: hasAvailability,
              isCompleted: isCompleted,
              isAvailable: isAvailable,
              isStarted: isStarted,
              isNotStarted: isNotStarted,
              isNotCompleted: isNotCompleted,
              kindIsScormOrXApi: kindIsScormOrXApi,
              locationIsOnline: locationIsOnline,
              locationIsInPerson: locationIsInPerson,
              usesContentAccessText: usesContentAccessText
            }),
            callToAction = hydrate_content_getCallToAction(i18n, partialHydratedContentItem),
            href = hydrate_content_getHref(partialHydratedContentItem);
          if (Object.keys(customFields).length && href.length > 1) {
            var urlParams =
              'sessionFields=' + encodeURIComponent(JSON.stringify(Object.entries(customFields)));
            href = href + '?' + urlParams;
          }
          var priceInCents = contentItem.priceInCents,
            suggestedRetailPriceInCents = contentItem.suggestedRetailPriceInCents;
          if (contentItem.alternativePricingType === AlternativePricingType.Membership) {
            var origPriceInCents = priceInCents;
            (priceInCents = suggestedRetailPriceInCents),
              (suggestedRetailPriceInCents = origPriceInCents);
          }
          return Object.assign({}, partialHydratedContentItem, {
            callToAction: callToAction,
            href: href,
            priceInCents: priceInCents,
            suggestedRetailPriceInCents: suggestedRetailPriceInCents
          });
        },
        src = __webpack_require__('./packages/featured-content/src/index.ts'),
        jsx_runtime = __webpack_require__('./node_modules/react/jsx-runtime.js'),
        _excluded = ['authors', 'description', 'href'],
        _excluded2 = ['authors', 'description', 'href'],
        _excluded3 = ['authors', 'description', 'href'];
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]), excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      function _slicedToArray(arr, i) {
        return (
          (function _arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr;
          })(arr) ||
          (function _iterableToArrayLimit(arr, i) {
            var _i =
              null == arr
                ? null
                : ('undefined' != typeof Symbol && arr[Symbol.iterator]) || arr['@@iterator'];
            if (null == _i) return;
            var _s,
              _e,
              _arr = [],
              _n = !0,
              _d = !1;
            try {
              for (
                _i = _i.call(arr);
                !(_n = (_s = _i.next()).done) && (_arr.push(_s.value), !i || _arr.length !== i);
                _n = !0
              );
            } catch (err) {
              (_d = !0), (_e = err);
            } finally {
              try {
                _n || null == _i.return || _i.return();
              } finally {
                if (_d) throw _e;
              }
            }
            return _arr;
          })(arr, i) ||
          (function _unsupportedIterableToArray(o, minLen) {
            if (!o) return;
            if ('string' == typeof o) return _arrayLikeToArray(o, minLen);
            var n = Object.prototype.toString.call(o).slice(8, -1);
            'Object' === n && o.constructor && (n = o.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(o);
            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
              return _arrayLikeToArray(o, minLen);
          })(arr, i) ||
          (function _nonIterableRest() {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function _arrayLikeToArray(arr, len) {
        (null == len || len > arr.length) && (len = arr.length);
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      function _taggedTemplateLiteralLoose(strings, raw) {
        return raw || (raw = strings.slice(0)), (strings.raw = raw), strings;
      }
      __webpack_exports__.default = { title: 'Example/FeaturedContent (data fetching)' };
      var headerOptions = { title: 'Feature Content Header' },
        handleClick = function handleClick() {},
        CORE_CONTENT_FIELDS = Object(lib.a)(
          _templateObject ||
            (_templateObject = _taggedTemplateLiteralLoose([
              '\n  fragment CoreContentFields on Content {\n    id\n    asset\n    authors\n    availabilityStatus\n    canAddToQueue\n    contentTypeLabel\n    courseGracePeriodEnded\n    coursePresold\n    courseStartDate\n    description\n    rating\n    slug\n    title\n    kind\n    currentUserUnmetCoursePrerequisites\n    currentUserUnmetLearningPathPrerequisites\n    priceInCents\n    suggestedRetailPriceInCents\n    source\n    ribbon {\n      label\n      color\n      contrastColor\n      darkerColor\n    }\n    displayCourse\n  }\n'
            ]))
        ),
        CATLOG_QUERY_QUERY = Object(lib.a)(
          _templateObject2 ||
            (_templateObject2 = _taggedTemplateLiteralLoose([
              '\n  ',
              '\n  query CatalogQueryQuery($query: String, $querySignature: String, $querySort: String) {\n    CatalogQuery(query: $query, querySignature: $querySignature, querySort: $querySort) {\n      contentItems {\n        ...CoreContentFields\n      }\n    }\n  }\n'
            ])),
          CORE_CONTENT_FIELDS
        ),
        QUERY_CONTENTS_QUERY = Object(lib.a)(
          _templateObject3 ||
            (_templateObject3 = _taggedTemplateLiteralLoose([
              '\n  ',
              '\n  query QueryContentsQuery($ids: [ID!]!) {\n    QueryContents(ids: $ids) {\n      ...CoreContentFields\n    }\n  }\n'
            ])),
          CORE_CONTENT_FIELDS
        ),
        ADD_RESOURCE_TO_QUEUE_MUTATION = Object(lib.a)(
          _templateObject4 ||
            (_templateObject4 = _taggedTemplateLiteralLoose([
              '\n  mutation AddResourceToQueueMutation($resourceType: ContentKind, $resourceId: ID!) {\n    AddResourceToQueue(resourceType: $resourceType, resourceId: $resourceId)\n  }\n'
            ]))
        ),
        USER_RECENT_CONTENT_QUERY = Object(lib.a)(
          _templateObject5 ||
            (_templateObject5 = _taggedTemplateLiteralLoose([
              '\n  query UserRecentContentQuery($limit: Int) {\n    UserRecentContent(limit: $limit) {\n      asset\n      authors\n      availabilityStatus\n      contentTypeLabel\n      courseEndDate\n      courseGracePeriodEnded\n      coursePresold\n      courseStartDate\n      description\n      displayCourseSlug\n      isActive\n      kind\n      sku\n      slug\n      source\n      timeZone\n      title\n    }\n  }\n'
            ]))
        ),
        mockCatalogQueryVariables = {
          query: 'test query',
          querySignature: 'test query signature',
          querySort: 'relevance'
        },
        mockQueryContentsQueryVariables = { ids: ['item-id'] },
        mockUserRecentContentQueryVariables = { limit: 2 },
        FeaturedContentWithDataFetching_stories_mockContentItemFactory =
          function mockContentItemFactory() {
            var isLearningPath = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            return {
              __typename: 'Content',
              id: 'item-id',
              asset:
                'https://d36ai2hkxl16us.cloudfront.net/thoughtindustries/image/upload/a_exif,c_fill,w_800/v1416438573/placeholder_kcjvxm.jpg',
              authors: ['Author A', 'Author B'],
              availabilityStatus: 'available',
              canAddToQueue: !0,
              contentTypeLabel: 'Guide',
              courseGracePeriodEnded: !1,
              coursePresold: !1,
              courseStartDate: '2016-11-07T05:51:02.856Z',
              description: 'Test description',
              rating: 78,
              slug: 'test-course-slug',
              title: 'Test title',
              kind: isLearningPath ? ContentKind.LearningPath : null,
              currentUserUnmetCoursePrerequisites: [],
              currentUserUnmetLearningPathPrerequisites: [],
              priceInCents: null,
              suggestedRetailPriceInCents: null,
              source: null,
              ribbon: null,
              displayCourse: 'display-course-id'
            };
          },
        mockRecentContentItem = {
          __typename: 'Content',
          asset:
            'https://d36ai2hkxl16us.cloudfront.net/thoughtindustries/image/upload/a_exif,c_fill,w_800/v1416438573/placeholder_kcjvxm.jpg',
          authors: ['Author A', 'Author B'],
          availabilityStatus: 'available',
          contentTypeLabel: 'Guide',
          courseEndDate: null,
          courseGracePeriodEnded: !1,
          coursePresold: !1,
          courseStartDate: '2016-11-07T05:51:02.856Z',
          description: 'Test description',
          displayCourseSlug: 'test-display-course-slug',
          isActive: !0,
          kind: ContentKind.CourseGroup,
          sku: null,
          slug: 'test-course-slug',
          source: null,
          timeZone: 'America/New_York',
          title: 'Test title'
        },
        mockApolloResults = {
          catalogQuery: {
            request: {
              query: CATLOG_QUERY_QUERY,
              variables: Object.assign({}, mockCatalogQueryVariables)
            },
            result: {
              data: {
                CatalogQuery: {
                  contentItems: [FeaturedContentWithDataFetching_stories_mockContentItemFactory()]
                }
              }
            }
          },
          queryContentsQuery: {
            request: {
              query: QUERY_CONTENTS_QUERY,
              variables: Object.assign({}, mockQueryContentsQueryVariables)
            },
            result: {
              data: {
                QueryContents: [FeaturedContentWithDataFetching_stories_mockContentItemFactory(!0)]
              }
            }
          },
          addCourseToQueueMutation: {
            request: {
              query: ADD_RESOURCE_TO_QUEUE_MUTATION,
              variables: { resourceId: 'display-course-id' }
            },
            result: { data: { AddResourceToQueue: !0 } }
          },
          addLearningPathToQueueMutation: {
            request: {
              query: ADD_RESOURCE_TO_QUEUE_MUTATION,
              variables: { resourceId: 'test-course-slug', resourceType: ContentKind.LearningPath }
            },
            result: { data: { AddResourceToQueue: !0 } }
          },
          userRecentContentQuery: {
            request: {
              query: USER_RECENT_CONTENT_QUERY,
              variables: Object.assign({}, mockUserRecentContentQueryVariables)
            },
            result: { data: { UserRecentContent: [Object.assign({}, mockRecentContentItem)] } }
          }
        },
        FeaturedContentWithDataFetching_stories_WithCatalogQuery = function WithCatalogQuery() {
          var content,
            i18n = Object(useTranslation.a)().i18n,
            addResourceToQueue = _slicedToArray(
              Object(useMutation.a)(ADD_RESOURCE_TO_QUEUE_MUTATION),
              1
            )[0],
            _useQuery = Object(useQuery.a)(CATLOG_QUERY_QUERY, {
              variables: Object.assign({}, mockCatalogQueryVariables)
            }),
            data = _useQuery.data,
            loading = _useQuery.loading,
            error = _useQuery.error;
          return (
            loading && (content = Object(jsx_runtime.jsx)('p', { children: 'Loading content' })),
            error &&
              (content = Object(jsx_runtime.jsx)('p', { children: 'Error loading content' })),
            data &&
              (content = data.CatalogQuery.contentItems.map(function (item, index) {
                var hydratedItem = hydrate_content(i18n, item),
                  authors = hydratedItem.authors,
                  description = hydratedItem.description,
                  href = hydratedItem.href,
                  restItemProps = _objectWithoutProperties(hydratedItem, _excluded),
                  transformedItem = Object.assign({}, restItemProps, {
                    authors: null == authors ? void 0 : authors.join(', '),
                    shortDescription: description && description.substring(0, 75) + ' ...',
                    linkUrl: href
                  });
                return Object(jsx_runtime.jsx)(
                  src.e.Item,
                  Object.assign({}, transformedItem),
                  'item-' + index
                );
              })),
            Object(jsx_runtime.jsx)(src.f, {
              children: Object(jsx_runtime.jsx)(src.e, {
                headerOptions: headerOptions,
                desktopColumnCount: 3,
                onAddedToQueue: function handleAddedToQueue(item) {
                  return item.displayCourse
                    ? addResourceToQueue({ variables: { resourceId: item.displayCourse } }).then()
                    : Promise.resolve();
                },
                onClick: handleClick,
                children: content
              })
            })
          );
        };
      (FeaturedContentWithDataFetching_stories_WithCatalogQuery.displayName = 'WithCatalogQuery'),
        (FeaturedContentWithDataFetching_stories_WithCatalogQuery.parameters = {
          apolloClient: {
            mocks: [mockApolloResults.catalogQuery, mockApolloResults.addCourseToQueueMutation]
          }
        });
      var FeaturedContentWithDataFetching_stories_WithQueryContentsQuery =
        function WithQueryContentsQuery() {
          var content,
            i18n = Object(useTranslation.a)().i18n,
            addResourceToQueue = _slicedToArray(
              Object(useMutation.a)(ADD_RESOURCE_TO_QUEUE_MUTATION),
              1
            )[0],
            _useQuery2 = Object(useQuery.a)(QUERY_CONTENTS_QUERY, {
              variables: Object.assign({}, mockQueryContentsQueryVariables)
            }),
            data = _useQuery2.data,
            loading = _useQuery2.loading,
            error = _useQuery2.error;
          return (
            loading && (content = Object(jsx_runtime.jsx)('p', { children: 'Loading content' })),
            error &&
              (content = Object(jsx_runtime.jsx)('p', { children: 'Error loading content' })),
            data &&
              (content = data.QueryContents.map(function (item, index) {
                var hydratedItem = hydrate_content(i18n, item),
                  authors = hydratedItem.authors,
                  description = hydratedItem.description,
                  href = hydratedItem.href,
                  restItemProps = _objectWithoutProperties(hydratedItem, _excluded2),
                  transformedItem = Object.assign({}, restItemProps, {
                    authors: null == authors ? void 0 : authors.join(', '),
                    shortDescription: description && description.substring(0, 75) + ' ...',
                    linkUrl: href
                  });
                return Object(jsx_runtime.jsx)(
                  src.e.Item,
                  Object.assign({}, transformedItem),
                  'item-' + index
                );
              })),
            Object(jsx_runtime.jsx)(src.f, {
              children: Object(jsx_runtime.jsx)(src.e, {
                headerOptions: headerOptions,
                desktopColumnCount: 3,
                onAddedToQueue: function handleAddedToQueue(item) {
                  return item.slug
                    ? addResourceToQueue({
                        variables: { resourceType: item.kind, resourceId: item.slug }
                      }).then()
                    : Promise.resolve();
                },
                onClick: handleClick,
                children: content
              })
            })
          );
        };
      (FeaturedContentWithDataFetching_stories_WithQueryContentsQuery.displayName =
        'WithQueryContentsQuery'),
        (FeaturedContentWithDataFetching_stories_WithQueryContentsQuery.parameters = {
          apolloClient: {
            mocks: [
              mockApolloResults.queryContentsQuery,
              mockApolloResults.addLearningPathToQueueMutation
            ]
          }
        });
      var FeaturedContentWithDataFetching_stories_WithUserRecentContentQuery =
        function WithUserRecentContentQuery() {
          var content,
            i18n = Object(useTranslation.a)().i18n,
            _useQuery3 = Object(useQuery.a)(USER_RECENT_CONTENT_QUERY, {
              variables: Object.assign({}, mockUserRecentContentQueryVariables)
            }),
            data = _useQuery3.data,
            loading = _useQuery3.loading,
            error = _useQuery3.error;
          return (
            loading && (content = Object(jsx_runtime.jsx)('p', { children: 'Loading content' })),
            error &&
              (content = Object(jsx_runtime.jsx)('p', { children: 'Error loading content' })),
            data &&
              (content = data.UserRecentContent.map(function (item, index) {
                var hydratedItem = hydrate_content(i18n, item),
                  authors = hydratedItem.authors,
                  description = hydratedItem.description,
                  href = hydratedItem.href,
                  restItemProps = _objectWithoutProperties(hydratedItem, _excluded3),
                  transformedItem = Object.assign({}, restItemProps, {
                    authors: null == authors ? void 0 : authors.join(', '),
                    shortDescription: description && description.substring(0, 75) + ' ...',
                    linkUrl: href
                  });
                return Object(jsx_runtime.jsx)(
                  src.e.Item,
                  Object.assign({}, transformedItem),
                  'item-' + index
                );
              })),
            Object(jsx_runtime.jsx)(src.f, {
              children: Object(jsx_runtime.jsx)(src.e, {
                headerOptions: headerOptions,
                desktopColumnCount: 3,
                onAddedToQueue: function handleAddedToQueue() {
                  return Promise.resolve();
                },
                onClick: handleClick,
                children: content
              })
            })
          );
        };
      (FeaturedContentWithDataFetching_stories_WithUserRecentContentQuery.displayName =
        'WithUserRecentContentQuery'),
        (FeaturedContentWithDataFetching_stories_WithUserRecentContentQuery.parameters = {
          apolloClient: { mocks: [mockApolloResults.userRecentContentQuery] }
        }),
        (FeaturedContentWithDataFetching_stories_WithCatalogQuery.parameters = Object.assign(
          {
            storySource: {
              source:
                "() => {\n  const { i18n } = useTranslation();\n  const [addResourceToQueue] = useMutation<\n    AddResourceToQueueMutationData,\n    AddResourceToQueueMutationVars\n  >(ADD_RESOURCE_TO_QUEUE_MUTATION);\n  const handleAddedToQueue = (item: FeaturedContentContentItem): Promise<void> =>\n    item.displayCourse\n      ? addResourceToQueue({ variables: { resourceId: item.displayCourse } }).then()\n      : Promise.resolve();\n\n  const { data, loading, error } = useQuery<CatalogQueryData, CatalogQueryVars>(\n    CATLOG_QUERY_QUERY,\n    { variables: { ...mockCatalogQueryVariables } }\n  );\n  let content;\n  if (loading) {\n    content = <p>Loading content</p>;\n  }\n  if (error) {\n    content = <p>Error loading content</p>;\n  }\n  if (data) {\n    content = data.CatalogQuery.contentItems.map((item, index) => {\n      const hydratedItem = hydrateContent(i18n, item);\n      const { authors, description, href, ...restItemProps } = hydratedItem;\n      const transformedItem = {\n        ...restItemProps,\n        authors: authors?.join(', '),\n        shortDescription: description && `${description.substring(0, 75)} ...`,\n        linkUrl: href\n      };\n      return <ContentTileStandardLayout.Item key={`item-${index}`} {...transformedItem} />;\n    });\n  }\n  return (\n    <FeaturedContent>\n      <ContentTileStandardLayout\n        headerOptions={headerOptions}\n        desktopColumnCount={3}\n        onAddedToQueue={handleAddedToQueue}\n        onClick={handleClick}\n      >\n        {content}\n      </ContentTileStandardLayout>\n    </FeaturedContent>\n  );\n}"
            }
          },
          FeaturedContentWithDataFetching_stories_WithCatalogQuery.parameters
        )),
        (FeaturedContentWithDataFetching_stories_WithQueryContentsQuery.parameters = Object.assign(
          {
            storySource: {
              source:
                "() => {\n  const { i18n } = useTranslation();\n  const [addResourceToQueue] = useMutation<\n    AddResourceToQueueMutationData,\n    AddResourceToQueueMutationVars\n  >(ADD_RESOURCE_TO_QUEUE_MUTATION);\n  const handleAddedToQueue = (item: FeaturedContentContentItem): Promise<void> =>\n    item.slug\n      ? addResourceToQueue({\n          variables: {\n            resourceType: item.kind as ContentKind,\n            resourceId: item.slug\n          }\n        }).then()\n      : Promise.resolve();\n\n  const { data, loading, error } = useQuery<QueryContentsData, QueryContentsVars>(\n    QUERY_CONTENTS_QUERY,\n    { variables: { ...mockQueryContentsQueryVariables } }\n  );\n  let content;\n  if (loading) {\n    content = <p>Loading content</p>;\n  }\n  if (error) {\n    content = <p>Error loading content</p>;\n  }\n  if (data) {\n    content = data.QueryContents.map((item, index) => {\n      const hydratedItem = hydrateContent(i18n, item);\n      const { authors, description, href, ...restItemProps } = hydratedItem;\n      const transformedItem = {\n        ...restItemProps,\n        authors: authors?.join(', '),\n        shortDescription: description && `${description.substring(0, 75)} ...`,\n        linkUrl: href\n      };\n      return <ContentTileStandardLayout.Item key={`item-${index}`} {...transformedItem} />;\n    });\n  }\n  return (\n    <FeaturedContent>\n      <ContentTileStandardLayout\n        headerOptions={headerOptions}\n        desktopColumnCount={3}\n        onAddedToQueue={handleAddedToQueue}\n        onClick={handleClick}\n      >\n        {content}\n      </ContentTileStandardLayout>\n    </FeaturedContent>\n  );\n}"
            }
          },
          FeaturedContentWithDataFetching_stories_WithQueryContentsQuery.parameters
        )),
        (FeaturedContentWithDataFetching_stories_WithUserRecentContentQuery.parameters =
          Object.assign(
            {
              storySource: {
                source:
                  "() => {\n  const { i18n } = useTranslation();\n  const { data, loading, error } = useQuery<UserRecentContentData, UserRecentContentVars>(\n    USER_RECENT_CONTENT_QUERY,\n    { variables: { ...mockUserRecentContentQueryVariables } }\n  );\n  const handleAddedToQueue = (): Promise<void> => {\n    return Promise.resolve();\n  };\n  let content;\n  if (loading) {\n    content = <p>Loading content</p>;\n  }\n  if (error) {\n    content = <p>Error loading content</p>;\n  }\n  if (data) {\n    content = data.UserRecentContent.map((item, index) => {\n      const hydratedItem = hydrateContent(i18n, item);\n      const { authors, description, href, ...restItemProps } = hydratedItem;\n      const transformedItem = {\n        ...restItemProps,\n        authors: authors?.join(', '),\n        shortDescription: description && `${description.substring(0, 75)} ...`,\n        linkUrl: href\n      };\n      return <ContentTileStandardLayout.Item key={`item-${index}`} {...transformedItem} />;\n    });\n  }\n  return (\n    <FeaturedContent>\n      <ContentTileStandardLayout\n        headerOptions={headerOptions}\n        desktopColumnCount={3}\n        onAddedToQueue={handleAddedToQueue}\n        onClick={handleClick}\n      >\n        {content}\n      </ContentTileStandardLayout>\n    </FeaturedContent>\n  );\n}"
              }
            },
            FeaturedContentWithDataFetching_stories_WithUserRecentContentQuery.parameters
          ));
    },
    './packages/header/src/header.tsx': function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__('./node_modules/core-js/modules/es.object.assign.js'),
        __webpack_require__('./node_modules/react/index.js');
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        ),
        Header = function Header(props) {
          var title = props.title,
            alternateTitleDisplay = props.alternateTitleDisplay,
            linkOpenInNewTab = props.linkOpenInNewTab,
            linkText = props.linkText,
            linkUrl = props.linkUrl;
          if (alternateTitleDisplay) {
            var link,
              shouldDisplayCta = alternateTitleDisplay && linkText && linkUrl,
              titleClasses = shouldDisplayCta && 'pr-8 max-w-3/4';
            if (shouldDisplayCta) {
              var linkProps = {
                className:
                  'text-gray-700 absolute text-xs border border-solid border-gray-100 text-center px-1 py-0.5 max-w-1/4 right-4 top-2',
                href: linkUrl
              };
              linkOpenInNewTab && (linkProps.target = '_blank'),
                (link = Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                  'a',
                  Object.assign({}, linkProps, { children: linkText })
                ));
            }
            return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(
              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,
              {
                children: [
                  Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)('div', {
                    className: titleClasses,
                    children: Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)('h3', {
                      children: title
                    })
                  }),
                  link,
                  Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)('hr', {
                    className: 'relative my-4'
                  })
                ]
              }
            );
          }
          return alternateTitleDisplay
            ? Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,
                {
                  children: [
                    Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)('div', {
                      children: Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)('h3', {
                        children: title
                      })
                    }),
                    Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)('hr', {
                      className: 'relative'
                    })
                  ]
                }
              )
            : Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)('h2', {
                className: 'text-2xl text-center text-gray-700 mb-4 font-header',
                children: title
              });
        };
      (Header.displayName = 'Header'),
        (Header.displayName = 'Header'),
        (__webpack_exports__.a = Header);
    },
    './packages/header/src/index.ts': function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        './packages/header/src/header.tsx'
      );
      __webpack_require__.d(__webpack_exports__, 'Header', function () {
        return _header__WEBPACK_IMPORTED_MODULE_0__.a;
      });
      __webpack_require__('./packages/header/src/types.ts');
    },
    './packages/header/src/types.ts': function (module, exports) {},
    './packages/header/stories/Header.stories.tsx': function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'Base', function () {
          return Base;
        }),
        __webpack_require__.d(__webpack_exports__, 'Alternate', function () {
          return Alternate;
        }),
        __webpack_require__.d(__webpack_exports__, 'AlternateWithLink', function () {
          return AlternateWithLink;
        });
      __webpack_require__('./node_modules/core-js/modules/es.object.assign.js'),
        __webpack_require__('./node_modules/core-js/modules/es.function.bind.js'),
        __webpack_require__('./node_modules/react/index.js');
      var _src__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('./packages/header/src/index.ts'),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        );
      __webpack_exports__.default = {
        title: 'Example/Header',
        component: _src__WEBPACK_IMPORTED_MODULE_3__.Header,
        argTypes: {
          title: {
            name: 'title',
            type: { name: 'string', required: !0 },
            description: 'Title that appears on the Header.',
            control: { type: 'text' }
          },
          alternateTitleDisplay: {
            name: 'alternateTitleDisplay',
            type: { name: 'boolean', required: !1 },
            defaultValue: !1,
            description: 'Show alternate title display.',
            control: { type: 'boolean' }
          },
          linkOpenInNewTab: {
            name: 'linkOpenInNewTab',
            type: { name: 'boolean', required: !1 },
            defaultValue: !1,
            description: 'Open link in new tab.',
            control: { type: 'boolean' }
          },
          linkUrl: {
            name: 'linkUrl',
            type: { name: 'string', required: !1 },
            description: 'Url for link that appears next to the title.',
            control: { type: 'text' }
          },
          linkText: {
            name: 'linkOpenInNewTab',
            type: { name: 'string', required: !1 },
            description: 'Text for link that appears next to the title.',
            control: { type: 'text' }
          }
        }
      };
      var Template = function Template(args) {
        return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
          _src__WEBPACK_IMPORTED_MODULE_3__.Header,
          Object.assign({}, args)
        );
      };
      Template.displayName = 'Template';
      var Base = Template.bind({});
      Base.args = { title: 'Dolor Nullam Mattis Sem' };
      var Alternate = Template.bind({});
      Alternate.args = { title: 'Dolor Nullam Mattis Sem', alternateTitleDisplay: !0 };
      var AlternateWithLink = Template.bind({});
      (AlternateWithLink.args = {
        title: 'Dolor Nullam Mattis Sem',
        alternateTitleDisplay: !0,
        linkText: 'Test',
        linkUrl: '/'
      }),
        (Base.parameters = Object.assign(
          { storySource: { source: 'args => <Header {...args} />' } },
          Base.parameters
        )),
        (Alternate.parameters = Object.assign(
          { storySource: { source: 'args => <Header {...args} />' } },
          Alternate.parameters
        )),
        (AlternateWithLink.parameters = Object.assign(
          { storySource: { source: 'args => <Header {...args} />' } },
          AlternateWithLink.parameters
        ));
    },
    './packages/hero/src/hero.tsx': function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__('./node_modules/core-js/modules/es.object.assign.js'),
        __webpack_require__('./node_modules/react/index.js');
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        ),
        Hero = function Hero(props) {
          var caption,
            title = props.title,
            subtitle = props.subtitle,
            linkText = props.linkText,
            linkOpenInNewTab = props.linkOpenInNewTab,
            linkUrl = props.linkUrl,
            asset = props.asset,
            largeAsset = props.largeAsset,
            smallAsset = props.smallAsset,
            image =
              title &&
              Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)('picture', {
                className: 'inline-block w-full',
                children: [
                  largeAsset &&
                    Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)('source', {
                      srcSet: largeAsset,
                      media: '(min-width: 64.063em)'
                    }),
                  Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)('source', {
                    srcSet: asset,
                    media: '(min-width: 48em)'
                  }),
                  smallAsset &&
                    Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)('source', {
                      srcSet: smallAsset,
                      media: '(max-width: 48em)'
                    }),
                  Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)('img', {
                    src: asset,
                    alt: title,
                    className: 'w-full'
                  })
                ]
              });
          if (title) {
            var link;
            if (linkText && linkUrl) {
              var linkProps = {
                className:
                  'border border-solid rounded-sm cursor-pointer inline-block text-sm font-normal leading-normal mt-0 mb-0 mr-0 ml-4 pt-2 pb-2 pl-4 pr-4 relative text-center no-underline transition-colors ease-in-out duration-200 bg-accent border-accent text-accent-contrast hover:text-accent-contrast hover:bg-accent-hover hover:border-accent-hover focus:bg-accent-hover focus:border-accent-hover active:bg-accent-hover active:border-accent-hover',
                href: linkUrl
              };
              linkOpenInNewTab && (linkProps.target = '_blank'),
                (link = Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                  'a',
                  Object.assign({}, linkProps, { children: linkText })
                ));
            }
            caption = Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)('div', {
              className:
                'w-full p-8 md:absolute md:left-0 md:bg-white md:bg-opacity-80 md:bottom-8',
              children: [
                Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)('h2', {
                  className: 'text-gray-800 text-xl mb-1 md:text-3xl lg:text-4xl',
                  children: title
                }),
                subtitle &&
                  Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)('span', {
                    className:
                      'text-gray-800 text-xs leading-5 font-header md:text-base lg:text-lg',
                    children: subtitle
                  }),
                link
              ]
            });
          }
          return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)('div', {
            className: 'overflow-hidden relative',
            children: [image, caption]
          });
        };
      (Hero.displayName = 'Hero'), (Hero.displayName = 'Hero'), (__webpack_exports__.a = Hero);
    },
    './packages/hero/src/index.ts': function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      var _hero__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('./packages/hero/src/hero.tsx');
      __webpack_require__.d(__webpack_exports__, 'Hero', function () {
        return _hero__WEBPACK_IMPORTED_MODULE_0__.a;
      });
      __webpack_require__('./packages/hero/src/types.ts');
    },
    './packages/hero/src/types.ts': function (module, exports) {},
    './packages/hero/stories/Hero.stories.tsx': function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'Base', function () {
          return Base;
        });
      __webpack_require__('./node_modules/core-js/modules/es.object.assign.js'),
        __webpack_require__('./node_modules/core-js/modules/es.function.bind.js'),
        __webpack_require__('./node_modules/react/index.js');
      var _src__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('./packages/hero/src/index.ts'),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        );
      __webpack_exports__.default = {
        title: 'Example/Hero',
        component: _src__WEBPACK_IMPORTED_MODULE_3__.Hero,
        argTypes: {
          title: {
            name: 'title',
            type: { name: 'string', required: !1 },
            description: 'Title that appears on the Hero Image.',
            control: { type: 'text' }
          },
          subtitle: {
            name: 'subtitle',
            type: { name: 'string', required: !1 },
            description: 'Subtitle that appears on the Hero Image.',
            control: { type: 'text' }
          },
          linkText: {
            name: 'linkText',
            type: { name: 'string', required: !1 },
            description: 'Link text that appears on the Hero Image.',
            control: { type: 'text' }
          },
          linkOpenInNewTab: {
            name: 'linkOpenInNewTab',
            type: { name: 'boolean', required: !1 },
            defaultValue: !1,
            description: 'Open link in new tab for link text.',
            control: { type: 'boolean' }
          },
          linkUrl: {
            name: 'linkUrl',
            type: { name: 'string', required: !1 },
            description: 'Link url for link text.',
            control: { type: 'text' }
          },
          asset: {
            name: 'asset',
            type: { name: 'string', required: !1 },
            description: 'Default asset for Hero Image.',
            control: { type: 'text' }
          },
          largeAsset: {
            name: 'largeAsset',
            type: { name: 'string', required: !1 },
            description: 'Optional asset for Hero Image in large screen.',
            control: { type: 'text' }
          },
          smallAsset: {
            name: 'smallAsset',
            type: { name: 'string', required: !1 },
            description: 'Optional asset for Hero Image in small screen.',
            control: { type: 'text' }
          }
        }
      };
      var Template = function Template(args) {
        return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
          _src__WEBPACK_IMPORTED_MODULE_3__.Hero,
          Object.assign({}, args)
        );
      };
      Template.displayName = 'Template';
      var Base = Template.bind({});
      (Base.args = {
        title: 'Dolor Nullam Mattis Sem',
        subtitle:
          'Maecenas sed diam eget risus varius blandit sit amet non magna. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.',
        asset:
          'https://d36ai2hkxl16us.cloudfront.net/thoughtindustries/image/upload/a_exif,c_fill,w_800/v1416438573/placeholder_kcjvxm.jpg'
      }),
        (Base.parameters = Object.assign(
          { storySource: { source: 'args => <Hero {...args} />' } },
          Base.parameters
        ));
    },
    './packages/link-lists/stories/LinkLists.stories.tsx': function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'Base', function () {
          return LinkLists_stories_Base;
        }),
        __webpack_require__.d(__webpack_exports__, 'WithDisplayCutoff', function () {
          return LinkLists_stories_WithDisplayCutoff;
        });
      __webpack_require__('./node_modules/core-js/modules/es.object.assign.js');
      var react = __webpack_require__('./node_modules/react/index.js'),
        src = __webpack_require__('./packages/header/src/index.ts'),
        jsx_runtime = __webpack_require__('./node_modules/react/jsx-runtime.js'),
        link_lists_LinkLists = function LinkLists(props) {
          var title = props.title,
            alternateTitleDisplay = props.alternateTitleDisplay,
            children = props.children;
          return Object(jsx_runtime.jsx)('div', {
            className: 'w-auto -ml-4 -mr-4 mt-0 mb-0 max-w-none',
            children: Object(jsx_runtime.jsxs)('div', {
              className: 'w-full relative pl-4 pr-4 float-left',
              children: [
                title &&
                  Object(jsx_runtime.jsx)(src.Header, {
                    title: title,
                    alternateTitleDisplay: alternateTitleDisplay
                  }),
                Object(jsx_runtime.jsx)('ul', {
                  className: 'grid grid-cols-2 md:grid-cols-3 gap-x-8',
                  children: children
                })
              ]
            })
          });
        };
      (link_lists_LinkLists.displayName = 'LinkLists'),
        (link_lists_LinkLists.displayName = 'LinkLists');
      var link_lists = link_lists_LinkLists,
        useTranslation =
          (__webpack_require__('./node_modules/core-js/modules/es.symbol.js'),
          __webpack_require__('./node_modules/core-js/modules/es.symbol.description.js'),
          __webpack_require__('./node_modules/core-js/modules/es.object.to-string.js'),
          __webpack_require__('./node_modules/core-js/modules/es.symbol.iterator.js'),
          __webpack_require__('./node_modules/core-js/modules/es.string.iterator.js'),
          __webpack_require__('./node_modules/core-js/modules/es.array.iterator.js'),
          __webpack_require__('./node_modules/core-js/modules/web.dom-collections.iterator.js'),
          __webpack_require__('./node_modules/core-js/modules/es.array.slice.js'),
          __webpack_require__('./node_modules/core-js/modules/es.function.name.js'),
          __webpack_require__('./node_modules/core-js/modules/es.array.from.js'),
          __webpack_require__('./node_modules/core-js/modules/es.object.keys.js'),
          __webpack_require__('./node_modules/core-js/modules/es.array.index-of.js'),
          __webpack_require__('./node_modules/core-js/modules/es.array.map.js'),
          __webpack_require__('./node_modules/core-js/modules/es.array.is-array.js'),
          __webpack_require__('./node_modules/react-i18next/dist/es/useTranslation.js')),
        _excluded = ['key', 'index', 'linkOpenInNewTab', 'children'];
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]), excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      function _slicedToArray(arr, i) {
        return (
          (function _arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr;
          })(arr) ||
          (function _iterableToArrayLimit(arr, i) {
            var _i =
              null == arr
                ? null
                : ('undefined' != typeof Symbol && arr[Symbol.iterator]) || arr['@@iterator'];
            if (null == _i) return;
            var _s,
              _e,
              _arr = [],
              _n = !0,
              _d = !1;
            try {
              for (
                _i = _i.call(arr);
                !(_n = (_s = _i.next()).done) && (_arr.push(_s.value), !i || _arr.length !== i);
                _n = !0
              );
            } catch (err) {
              (_d = !0), (_e = err);
            } finally {
              try {
                _n || null == _i.return || _i.return();
              } finally {
                if (_d) throw _e;
              }
            }
            return _arr;
          })(arr, i) ||
          (function _unsupportedIterableToArray(o, minLen) {
            if (!o) return;
            if ('string' == typeof o) return _arrayLikeToArray(o, minLen);
            var n = Object.prototype.toString.call(o).slice(8, -1);
            'Object' === n && o.constructor && (n = o.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(o);
            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
              return _arrayLikeToArray(o, minLen);
          })(arr, i) ||
          (function _nonIterableRest() {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function _arrayLikeToArray(arr, len) {
        (null == len || len > arr.length) && (len = arr.length);
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      var LinkListContext = Object(react.createContext)(void 0);
      var link_list_Icon = function Icon() {
        return Object(jsx_runtime.jsx)('svg', {
          xmlns: 'http://www.w3.org/2000/svg',
          className: 'leading-none text-xs border border-solid border-gray-300 pr-0 inline-block',
          width: '15',
          height: '15',
          'aria-label': 'expand',
          viewBox: '0 0 20 20',
          fill: 'currentColor',
          children: Object(jsx_runtime.jsx)('path', {
            fillRule: 'evenodd',
            d: 'M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z',
            clipRule: 'evenodd'
          })
        });
      };
      link_list_Icon.displayName = 'Icon';
      var link_list_LinkList = function LinkList(_ref) {
        var children = _ref.children,
          key = _ref.key,
          label = _ref.label,
          displayCutoff = _ref.displayCutoff,
          totalItems = react.Children.count(children),
          isLimited = void 0 !== displayCutoff && totalItems > displayCutoff,
          _useState2 = _slicedToArray(Object(react.useState)(!isLimited), 2),
          expanded = _useState2[0],
          setExpanded = _useState2[1],
          t = Object(useTranslation.a)().t,
          onExpand = Object(react.useCallback)(function () {
            setExpanded(!0);
          }, []),
          value = Object(react.useMemo)(
            function () {
              return { expanded: expanded, displayCutoff: displayCutoff };
            },
            [displayCutoff, expanded]
          );
        return Object(jsx_runtime.jsx)(LinkListContext.Provider, {
          value: value,
          children: Object(jsx_runtime.jsx)(
            'li',
            {
              className: 'mb-4',
              children: Object(jsx_runtime.jsxs)('div', {
                className: 'border-r',
                children: [
                  Object(jsx_runtime.jsx)('h4', {
                    className: 'text-sm font-bold',
                    children: label
                  }),
                  Object(jsx_runtime.jsx)('ul', {
                    className: 'm-0 p-0 list-none',
                    children: react.Children.map(children, function (child, index) {
                      return Object(react.cloneElement)(child, { index: index });
                    })
                  }),
                  !expanded &&
                    Object(jsx_runtime.jsxs)('button', {
                      className:
                        'border-0 text-link cursor-pointer inline-block font-normal text-xs leading-normal p-0 relative m-0 text-left no-underline shadow-none h-auto font-primary hover:text-link-hover focus:outline-blue focus:shadow',
                      onClick: onExpand,
                      children: [
                        Object(jsx_runtime.jsx)(link_list_Icon, {}),
                        Object(jsx_runtime.jsx)('span', { className: 'ml-1', children: t('more') })
                      ]
                    })
                ]
              })
            },
            key
          )
        });
      };
      link_list_LinkList.displayName = 'LinkList';
      var link_list_Link = function Link(_ref2) {
        var key = _ref2.key,
          index = _ref2.index,
          linkOpenInNewTab = _ref2.linkOpenInNewTab,
          children = _ref2.children,
          restProps = _objectWithoutProperties(_ref2, _excluded),
          _useLinkListContext = (function useLinkListContext() {
            var context = Object(react.useContext)(LinkListContext);
            if (!context) throw new Error('No context found for LinkList');
            return context;
          })(),
          expanded = _useLinkListContext.expanded,
          displayCutoff = _useLinkListContext.displayCutoff;
        if (!expanded && void 0 !== displayCutoff && void 0 !== index && index >= displayCutoff)
          return null;
        var linkProps = Object.assign({}, restProps, { className: 'text-sm text-link underline' });
        return (
          linkOpenInNewTab && (linkProps.target = '_blank'),
          Object(jsx_runtime.jsx)(
            'li',
            {
              className: "pl-5 before:content-['\\2022\\20']",
              children: Object(jsx_runtime.jsx)(
                'a',
                Object.assign({}, linkProps, { children: children })
              )
            },
            key
          )
        );
      };
      (link_list_Link.displayName = 'Link'),
        (link_list_LinkList.displayName = 'LinkList'),
        (link_list_LinkList.Link = link_list_Link);
      var link_list = link_list_LinkList,
        LinkLists_stories_Base =
          ((__webpack_exports__.default = { title: 'Example/LinkLists' }),
          function Base() {
            return Object(jsx_runtime.jsxs)(link_lists, {
              title: 'Dolor Nullam Mattis Sem',
              children: [
                Object(jsx_runtime.jsxs)(link_list, {
                  label: 'Category 1',
                  children: [
                    Object(jsx_runtime.jsx)(link_list.Link, {
                      href: '/subcategory-link1',
                      children: 'List subcategory 1'
                    }),
                    Object(jsx_runtime.jsx)(link_list.Link, {
                      href: '/subcategory-link2',
                      children: 'List subcategory 2'
                    }),
                    Object(jsx_runtime.jsx)(link_list.Link, {
                      href: '/subcategory-link3',
                      children: 'List subcategory 3'
                    })
                  ]
                }),
                Object(jsx_runtime.jsxs)(link_list, {
                  label: 'Category 2',
                  children: [
                    Object(jsx_runtime.jsx)(link_list.Link, {
                      href: '/subcategory-link1',
                      children: 'List subcategory 1'
                    }),
                    Object(jsx_runtime.jsx)(link_list.Link, {
                      href: '/subcategory-link2',
                      children: 'List subcategory 2'
                    })
                  ]
                }),
                Object(jsx_runtime.jsxs)(link_list, {
                  label: 'Category 3',
                  children: [
                    Object(jsx_runtime.jsx)(link_list.Link, {
                      href: '/subcategory-link1',
                      children: 'List subcategory 1'
                    }),
                    Object(jsx_runtime.jsx)(link_list.Link, {
                      href: '/subcategory-link2',
                      children: 'List subcategory 2'
                    }),
                    Object(jsx_runtime.jsx)(link_list.Link, {
                      href: '/subcategory-link3',
                      children: 'List subcategory 3'
                    }),
                    Object(jsx_runtime.jsx)(link_list.Link, {
                      href: '/subcategory-link4',
                      children: 'List subcategory 4'
                    })
                  ]
                }),
                Object(jsx_runtime.jsx)(link_list, {
                  label: 'Category 4',
                  children: Object(jsx_runtime.jsx)(link_list.Link, {
                    href: '/subcategory-link1',
                    children: 'List subcategory 1'
                  })
                })
              ]
            });
          });
      LinkLists_stories_Base.displayName = 'Base';
      var LinkLists_stories_WithDisplayCutoff = function WithDisplayCutoff() {
        return Object(jsx_runtime.jsxs)(link_lists, {
          title: 'Dolor Nullam Mattis Sem',
          alternateTitleDisplay: !0,
          children: [
            Object(jsx_runtime.jsxs)(link_list, {
              label: 'Category 1',
              displayCutoff: 2,
              children: [
                Object(jsx_runtime.jsx)(link_list.Link, {
                  href: '/subcategory-link1',
                  children: 'List subcategory 1'
                }),
                Object(jsx_runtime.jsx)(link_list.Link, {
                  href: '/subcategory-link2',
                  children: 'List subcategory 2'
                }),
                Object(jsx_runtime.jsx)(link_list.Link, {
                  href: '/subcategory-link3',
                  children: 'List subcategory 3'
                })
              ]
            }),
            Object(jsx_runtime.jsxs)(link_list, {
              label: 'Category 2',
              displayCutoff: 2,
              children: [
                Object(jsx_runtime.jsx)(link_list.Link, {
                  href: '/subcategory-link1',
                  children: 'List subcategory 1'
                }),
                Object(jsx_runtime.jsx)(link_list.Link, {
                  href: '/subcategory-link2',
                  children: 'List subcategory 2'
                })
              ]
            }),
            Object(jsx_runtime.jsxs)(link_list, {
              label: 'Category 3',
              displayCutoff: 2,
              children: [
                Object(jsx_runtime.jsx)(link_list.Link, {
                  href: '/subcategory-link1',
                  children: 'List subcategory 1'
                }),
                Object(jsx_runtime.jsx)(link_list.Link, {
                  href: '/subcategory-link2',
                  children: 'List subcategory 2'
                }),
                Object(jsx_runtime.jsx)(link_list.Link, {
                  href: '/subcategory-link3',
                  children: 'List subcategory 3'
                }),
                Object(jsx_runtime.jsx)(link_list.Link, {
                  href: '/subcategory-link4',
                  children: 'List subcategory 4'
                })
              ]
            }),
            Object(jsx_runtime.jsx)(link_list, {
              label: 'Category 4',
              displayCutoff: 2,
              children: Object(jsx_runtime.jsx)(link_list.Link, {
                href: '/subcategory-link1',
                children: 'List subcategory 1'
              })
            })
          ]
        });
      };
      (LinkLists_stories_WithDisplayCutoff.displayName = 'WithDisplayCutoff'),
        (LinkLists_stories_Base.parameters = Object.assign(
          {
            storySource: {
              source:
                '() => (\n  <LinkLists title="Dolor Nullam Mattis Sem">\n    <LinkList label="Category 1">\n      <LinkList.Link href="/subcategory-link1">List subcategory 1</LinkList.Link>\n      <LinkList.Link href="/subcategory-link2">List subcategory 2</LinkList.Link>\n      <LinkList.Link href="/subcategory-link3">List subcategory 3</LinkList.Link>\n    </LinkList>\n\n    <LinkList label="Category 2">\n      <LinkList.Link href="/subcategory-link1">List subcategory 1</LinkList.Link>\n      <LinkList.Link href="/subcategory-link2">List subcategory 2</LinkList.Link>\n    </LinkList>\n\n    <LinkList label="Category 3">\n      <LinkList.Link href="/subcategory-link1">List subcategory 1</LinkList.Link>\n      <LinkList.Link href="/subcategory-link2">List subcategory 2</LinkList.Link>\n      <LinkList.Link href="/subcategory-link3">List subcategory 3</LinkList.Link>\n      <LinkList.Link href="/subcategory-link4">List subcategory 4</LinkList.Link>\n    </LinkList>\n\n    <LinkList label="Category 4">\n      <LinkList.Link href="/subcategory-link1">List subcategory 1</LinkList.Link>\n    </LinkList>\n  </LinkLists>\n)'
            }
          },
          LinkLists_stories_Base.parameters
        )),
        (LinkLists_stories_WithDisplayCutoff.parameters = Object.assign(
          {
            storySource: {
              source:
                '() => (\n  <LinkLists title="Dolor Nullam Mattis Sem" alternateTitleDisplay>\n    <LinkList label="Category 1" displayCutoff={2}>\n      <LinkList.Link href="/subcategory-link1">List subcategory 1</LinkList.Link>\n      <LinkList.Link href="/subcategory-link2">List subcategory 2</LinkList.Link>\n      <LinkList.Link href="/subcategory-link3">List subcategory 3</LinkList.Link>\n    </LinkList>\n\n    <LinkList label="Category 2" displayCutoff={2}>\n      <LinkList.Link href="/subcategory-link1">List subcategory 1</LinkList.Link>\n      <LinkList.Link href="/subcategory-link2">List subcategory 2</LinkList.Link>\n    </LinkList>\n\n    <LinkList label="Category 3" displayCutoff={2}>\n      <LinkList.Link href="/subcategory-link1">List subcategory 1</LinkList.Link>\n      <LinkList.Link href="/subcategory-link2">List subcategory 2</LinkList.Link>\n      <LinkList.Link href="/subcategory-link3">List subcategory 3</LinkList.Link>\n      <LinkList.Link href="/subcategory-link4">List subcategory 4</LinkList.Link>\n    </LinkList>\n\n    <LinkList label="Category 4" displayCutoff={2}>\n      <LinkList.Link href="/subcategory-link1">List subcategory 1</LinkList.Link>\n    </LinkList>\n  </LinkLists>\n)'
            }
          },
          LinkLists_stories_WithDisplayCutoff.parameters
        ));
    },
    './storybook-init-framework-entry.js': function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      __webpack_require__('./node_modules/@storybook/react/dist/esm/client/index.js');
    },
    0: function (module, exports, __webpack_require__) {
      __webpack_require__('./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js'),
        __webpack_require__('./node_modules/@storybook/core-client/dist/esm/globals/globals.js'),
        __webpack_require__('./storybook-init-framework-entry.js'),
        __webpack_require__(
          './node_modules/@storybook/addon-docs/dist/esm/frameworks/common/config.js-generated-config-entry.js'
        ),
        __webpack_require__(
          './node_modules/@storybook/addon-docs/dist/esm/frameworks/react/config.js-generated-config-entry.js'
        ),
        __webpack_require__(
          './node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js'
        ),
        __webpack_require__(
          './node_modules/@storybook/addon-links/dist/esm/preset/addDecorator.js-generated-config-entry.js'
        ),
        __webpack_require__(
          './node_modules/@storybook/addon-actions/dist/esm/preset/addDecorator.js-generated-config-entry.js'
        ),
        __webpack_require__(
          './node_modules/@storybook/addon-actions/dist/esm/preset/addArgs.js-generated-config-entry.js'
        ),
        __webpack_require__(
          './node_modules/@storybook/addon-backgrounds/dist/esm/preset/addDecorator.js-generated-config-entry.js'
        ),
        __webpack_require__(
          './node_modules/@storybook/addon-backgrounds/dist/esm/preset/addParameter.js-generated-config-entry.js'
        ),
        __webpack_require__(
          './node_modules/@storybook/addon-measure/dist/esm/preset/addDecorator.js-generated-config-entry.js'
        ),
        __webpack_require__(
          './node_modules/@storybook/addon-outline/dist/esm/preset/addDecorator.js-generated-config-entry.js'
        ),
        __webpack_require__(
          './node_modules/storybook-addon-apollo-client/dist/preset/addDecorator.js-generated-config-entry.js'
        ),
        __webpack_require__('./node_modules/storybook-i18n/preview.js-generated-config-entry.js'),
        __webpack_require__(
          './node_modules/storybook-react-i18next/dist/esm/preset/preview.js-generated-config-entry.js'
        ),
        __webpack_require__('./.storybook/preview.js-generated-config-entry.js'),
        (module.exports = __webpack_require__('./generated-stories-entry.js'));
    },
    1: function (module, exports) {}
  },
  [[0, 5, 6]]
]);
