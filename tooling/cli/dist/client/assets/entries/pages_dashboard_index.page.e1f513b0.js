import {
  d as I,
  e as ee,
  f as te,
  L as F,
  g as re,
  h as ne,
  i as se,
  j as ae,
  k as ie,
  l as le,
  m as oe,
  n as ce,
  o as de,
  p as me,
  D as Z,
  q as W,
  r as H,
  c as S,
  s as he,
  t as G,
  v as ue,
  w as pe,
  x as be,
  y as fe,
  z as g,
  S as xe,
  N as ve,
  F as ge
} from '../chunks/chunk-a6493120.js';
import { B as we } from '../chunks/chunk-e21543bf.js';
import { r as p, j as e, F as u, a as n } from '../chunks/chunk-5011acf0.js';
import { t as C } from '../chunks/chunk-47f58d9c.js';
import { N as Q } from '../chunks/chunk-16adb97c.js';
import { l as $ } from '../chunks/chunk-8d1d4039.js';
import { C as Y } from '../chunks/chunk-d9a61b28.js';
import { F as Ne } from '../chunks/chunk-b3280e9c.js';
var b = (t => (
  (t.Current = 'current'),
  (t.Events = 'events'),
  (t.LearningPath = 'learningPath'),
  (t.Completed = 'completed'),
  (t.Archived = 'archived'),
  (t.Bookmark = 'bookmark'),
  (t.Certificate = 'certificate'),
  (t.Waitlist = 'waitlist'),
  t
))(b || {});
const X = p.exports.createContext(void 0);
function E() {
  const t = p.exports.useContext(X);
  if (!t) throw new Error('No context found for LearnerAccess');
  return t;
}
const ye = () => {
    I();
    const {
        data: t,
        loading: r,
        error: o,
        refetch: a,
        networkStatus: l
      } = ee({ variables: {}, fetchPolicy: 'network-only', notifyOnNetworkStatusChange: !0 }),
      [s] = te(),
      { refetchContentGroups: h, resetActiveTab: m } = E(),
      x = p.exports.useCallback(
        async d => {
          var i;
          await s({ variables: { id: d } });
          const { data: y } = await a();
          y && !((i = y.UserWaitlist) != null && i.length) && m(), await h();
        },
        [h, a, m]
      ),
      c = l === Q.refetch;
    return r || c
      ? e(F, {})
      : o
      ? e(u, { children: o.message })
      : !t || !t.UserWaitlist
      ? e(u, {})
      : e('div', {
          className: 'py-5',
          children: t.UserWaitlist.map(d =>
            e(
              'div',
              {
                className: 'odd:bg-slate-100 text-black-light py-3 px-4 bg-white-mid rounded',
                children: e('div', {
                  className: 'flex flex-col w-full',
                  children: n('div', {
                    className: 'flex flex-row',
                    children: [
                      e('div', {
                        className: 'flex flex-row basis-4/12',
                        children: e('div', {
                          className: 'flex items-center p-6 text-sm font-semibold font-primary',
                          children: d.title
                        })
                      }),
                      n('div', {
                        className: 'flex flex-row basis-8/12 justify-between',
                        children: [
                          e('div', {
                            className: 'flex items-center text-sm font-semibold',
                            children: d.contentTypeLabel
                          }),
                          e('div', {
                            className: 'flex items-center',
                            children: e('button', {
                              onClick: () => x(d.id),
                              className:
                                'bg-active-blue text-accent-contrast bg-accent rounded-sm cursor-pointer inline-block font-normal text-xs m-0 py-[0.15rem] px-4 relative text-center no-underline ease-in-out border-active-blue font-sans transition duration-200 leading-5',
                              children: C('dashboard.unenroll-waitlist')
                            })
                          })
                        ]
                      })
                    ]
                  })
                })
              },
              d.id
            )
          )
        });
  },
  ke = { position: 'absolute', top: '-30px', right: '-19px', width: '30px', height: '30px' },
  Ce = () =>
    e('i', {
      className: 'icon-upload',
      style: { display: 'inline-block', position: 'relative' },
      children: n('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '-10 -20 150 50',
        style: ke,
        children: [
          e('path', {
            style: { fill: '#311ac9', fillOpacity: 1, stroke: 'none' },
            d: 'M 20.832031 70.351562 L 20.832031 55.765625 C 20.832031 53.464844 18.964844 51.601562 16.667969 51.601562 C 14.367188 51.601562 12.5 53.464844 12.5 55.765625 L 12.5 70.351562 C 12.5 74.953125 16.230469 78.683594 20.832031 78.683594 L 79.167969 78.683594 C 83.769531 78.683594 87.5 74.953125 87.5 70.351562 L 87.5 55.765625 C 87.5 53.464844 85.632812 51.601562 83.332031 51.601562 C 81.035156 51.601562 79.167969 53.464844 79.167969 55.765625 L 79.167969 70.351562 Z M 20.832031 70.351562 '
          }),
          e('path', {
            style: { stroke: 'none', fillRule: 'evenodd', fill: '#fff', fillOpacity: 1 },
            d: 'M20.832 70.352V55.766a4.166 4.166 0 0 0-8.332 0v14.586a8.332 8.332 0 0 0 8.332 8.332h58.336a8.332 8.332 0 0 0 8.332-8.332V55.766a4.166 4.166 0 0 0-8.332 0v14.586ZM61.277 34.07l-8.332-8.332a4.168 4.168 0 0 0-5.89 0l-8.332 8.332a4.168 4.168 0 0 0 0 5.89 4.161 4.161 0 0 0 5.89 0L50 34.575l5.387 5.387a4.161 4.161 0 0 0 5.89 0 4.168 4.168 0 0 0 0-5.89Zm0 0'
          }),
          e('path', {
            style: { stroke: 'none', fillRule: 'evenodd', fill: '#fff', fillOpacity: 1 },
            d: 'M45.832 30.766v29.168A4.17 4.17 0 0 0 50 64.102a4.17 4.17 0 0 0 4.168-4.168V30.766c0-2.301-1.867-4.164-4.168-4.164a4.166 4.166 0 0 0-4.168 4.164Zm0 0'
          })
        ]
      })
    }),
  Le = () =>
    e('i', {
      className: 'icon-alert',
      'aria-label': 'alert',
      style: { display: 'inline-block', position: 'relative' },
      children: e('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '30 -15 5 90',
        width: 45,
        height: 45,
        children: e('path', {
          style: { stroke: 'none', fillRule: 'nonzero', fill: '#311ac9', fillOpacity: 1 },
          d: 'm32 6.438-1.75 3L6.25 51l-1.688 3h54.876l-1.688-3-24-41.563Zm0 8L52.5 50h-41ZM30 28v12h4V28Zm0 14v4h4v-4Zm0 0'
        })
      })
    }),
  O = () =>
    e('i', {
      className: 'icon-edit',
      style: { display: 'inline-block', position: 'relative', top: '2px' },
      children: e('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 26 26',
        width: 16,
        height: 16,
        children: e('path', {
          d: 'M20.094.25a2.247 2.247 0 0 0-1.625.656l-1 1.031 6.593 6.625 1-1.03a2.32 2.32 0 0 0 0-3.282L21.75.937A2.364 2.364 0 0 0 20.094.25Zm-3.75 2.594-1.563 1.5 6.875 6.875L23.25 9.75ZM13.78 5.438 2.97 16.155a.979.979 0 0 0-.5.625L.156 24.625a.98.98 0 0 0 .242.977.98.98 0 0 0 .977.242l7.844-2.313a.979.979 0 0 0 .781-.656l10.656-10.563-1.468-1.468L8.25 21.813l-4.406 1.28-.938-.937 1.344-4.593L15.094 6.75Zm2.375 2.406-10.968 11 1.593.343.219 1.47 11-10.97Z'
        })
      })
    }),
  Ae = () =>
    e('i', {
      className: 'trash-file',
      style: { display: 'inline-block', position: 'relative', top: '4px' },
      children: e('svg', {
        viewBox: '1 -15 20 46',
        xmlns: 'http://www.w3.org/2000/svg',
        width: 32,
        height: 32,
        children: e('path', {
          style: { stroke: 'none', fillRule: 'nonzero', fill: '#cbcbcb', fillOpacity: 1 },
          d: 'M12.992 2A3.008 3.008 0 0 0 10 4.992V6H4v2h2v17c0 1.648 1.352 3 3 3h12c1.648 0 3-1.352 3-3V8h2V6h-6V4.992A3.008 3.008 0 0 0 17.008 2Zm0 2h4.016c.562 0 .992.43.992.992V6h-6V4.992c0-.562.43-.992.992-.992ZM8 8h14v17c0 .563-.438 1-1 1H9c-.563 0-1-.438-1-1Zm2 2v14h2V10Zm4 0v14h2V10Zm4 0v14h2V10Zm0 0'
        })
      })
    }),
  Be = () =>
    e('i', {
      className: 'trash-repeat',
      style: { display: 'inline-block', position: 'relative' },
      children: n('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: 34,
        height: 34,
        viewBox: '-11 0 70 80',
        children: [
          e('path', {
            style: { fill: '#405667', fillOpacity: 1, stroke: 'none' },
            d: 'M0 0h64v64H0z'
          }),
          e('path', {
            style: { stroke: 'none', fillRule: 'nonzero', fill: '#fff', fillOpacity: 1 },
            d: 'M8.145 19.715a13.326 13.326 0 0 0-4.243 2.86 13.276 13.276 0 0 0-2.855 4.238A13.25 13.25 0 0 0 0 32c0 1.797.352 3.543 1.047 5.188a13.276 13.276 0 0 0 2.855 4.238 13.352 13.352 0 0 0 4.239 2.86c.171.07.347.105.52.105.519 0 1.015-.305 1.226-.817a1.334 1.334 0 0 0-.707-1.746 10.657 10.657 0 0 1-3.395-2.285 10.749 10.749 0 0 1-2.285-3.39A10.623 10.623 0 0 1 2.668 32a10.59 10.59 0 0 1 3.121-7.543c.984-.98 2.125-1.75 3.39-2.285a10.575 10.575 0 0 1 4.153-.84h32.781l-5.722 5.723c-.52.52-.52 1.367 0 1.886a1.34 1.34 0 0 0 1.887.004l7.995-8a1.329 1.329 0 0 0 .293-1.453 1.27 1.27 0 0 0-.293-.433l-7.996-7.997a1.332 1.332 0 1 0-1.887 1.883l5.723 5.723H13.332c-1.797 0-3.547.352-5.187 1.047Zm0 0'
          }),
          e('path', {
            style: { stroke: 'none', fillRule: 'nonzero', fill: '#fff', fillOpacity: 1 },
            d: 'M60.098 22.574a13.352 13.352 0 0 0-4.239-2.86 1.33 1.33 0 0 0-1.746.712c-.285.68.032 1.46.707 1.746 1.27.535 2.41 1.305 3.395 2.285.976.98 1.746 2.121 2.285 3.39.555 1.317.832 2.712.832 4.153 0 1.441-.277 2.836-.836 4.152a10.683 10.683 0 0 1-2.285 3.391c-.98.98-2.121 1.75-3.39 2.285-1.317.559-2.716.84-4.153.84H17.887l5.722-5.723c.52-.52.52-1.367 0-1.886a1.337 1.337 0 0 0-1.886 0l-7.996 7.996a1.388 1.388 0 0 0-.293.437 1.309 1.309 0 0 0 0 1.016c.066.168.168.312.293.437l7.996 7.996a1.337 1.337 0 0 0 1.887.004c.519-.52.519-1.367 0-1.886l-5.723-5.727h32.781c1.797 0 3.547-.352 5.187-1.047a13.31 13.31 0 0 0 4.239-2.86 13.233 13.233 0 0 0 2.855-4.237C63.65 35.542 64 33.797 64 32a13.283 13.283 0 0 0-3.902-9.426Zm0 0'
          })
        ]
      })
    }),
  Ue = ({ mutationCallback: t, setShowPopup: r, text: o, customPosition: a }) => {
    const l =
      a +
      'next-topic-tooltip absolute bg-white rounded text-sm p-4 shadow-sm w-[400px] z-[99999] text-black-light';
    return e('div', {
      className: l,
      children: n('div', {
        className: 'm-0 max-w-none w-auto flex',
        children: [
          e('div', { className: 'float-left px-0 relative', children: e(Le, {}) }),
          n('div', {
            className: 'float-right px-0 relative',
            children: [
              e('p', {
                className: 'gray-mid leading-8 mb-4',
                children: e('span', {
                  className: 'text-active-blue inline-block text-center w-full text-2xl',
                  children: o
                })
              }),
              n('div', {
                className: 'm-0 max-w-none w-auto flex justify-evenly',
                children: [
                  e('button', {
                    onClick: () => r(!1),
                    className:
                      'bg-white-mid h-8 border-solid border rounded-sm cursor-pointer inline-block font-normal text-xs m-0 py-[0.15rem] px-4 relative text-center no-underline ease-in-out border-gray-light font-sans transition duration-200 leading-5',
                    'data-ember-action': '8974',
                    children: e('span', { children: 'Cancel' })
                  }),
                  e('button', {
                    onClick: () => {
                      t(), r(!1);
                    },
                    className:
                      'bg-active-blue text-accent-contrast bg-accent rounded-sm cursor-pointer inline-block font-normal text-xs ml-2 h-8 mb-0 py-[0.15rem] px-4 relative text-center no-underline ease-in-out border-active-blue font-sans transition duration-200 leading-5',
                    'data-ember-action': '8975',
                    children: e('span', { children: 'Continue' })
                  })
                ]
              })
            ]
          })
        ]
      })
    });
  },
  De = ({ item: t, onReinstateSuccessAsync: r }) => {
    const [o, a] = p.exports.useState(!1),
      l = C('dashboard.archive-warning'),
      s = 'right-2 top-[120%]',
      [h] = re({ variables: { id: t.resource } }),
      [m] = ne({ variables: { id: t.resource } }),
      x = async () => {
        let c;
        return t.resourceType === 'learningPath' ? (c = m) : (c = h), c().then(r);
      };
    return n(u, {
      children: [
        e('button', {
          onClick: () => a(!0),
          className:
            'bg-active-blue relative text-accent-contrast bg-accent rounded-sm cursor-pointer inline-block font-normal text-xs mb-4 py-[0.15rem] px-4 text-center no-underline ease-in-out border-active-blue font-sans transition duration-200 leading-5',
          children: C('archive.reinstate')
        }),
        o && e(Ue, { mutationCallback: x, setShowPopup: a, text: l, customPosition: s })
      ]
    });
  },
  Se = () => {
    const {
        data: t,
        loading: r,
        error: o,
        refetch: a,
        networkStatus: l
      } = se({ variables: {}, fetchPolicy: 'network-only', notifyOnNetworkStatusChange: !0 }),
      s = l === Q.refetch,
      { refetchContentGroups: h, resetActiveTab: m } = E(),
      x = p.exports.useCallback(async () => {
        var d;
        const { data: c } = await a();
        c && !((d = c.UserArchives) != null && d.length) && m(), await h();
      }, [h, a, m]);
    return r || s
      ? e(F, {})
      : o
      ? e(u, { children: o.message })
      : !t || !t.UserArchives
      ? e(u, {})
      : n('div', {
          className: 'py-6',
          children: [
            t.UserArchives.map(c =>
              e(
                'div',
                {
                  className:
                    'odd:bg-slate-100 text-black-light py-3 px-4 bg-white-mid rounded border-blue-700',
                  children: e('div', {
                    className: 'flex flex-col w-full',
                    children: n('div', {
                      className: 'flex flex-row',
                      children: [
                        e('div', {
                          className: 'flex flex-row basis-4/12',
                          children: e('div', {
                            className: 'flex items-center p-6 text-sm font-semibold font-primary',
                            children: c.name
                          })
                        }),
                        n('div', {
                          className: 'flex flex-row basis-8/12 justify-between',
                          children: [
                            e('div', {
                              className: 'flex items-center text-sm font-semibold',
                              children: c.resourceType
                            }),
                            n('div', {
                              className: 'col-start-12 col-span-2 text-center my-1.5 relative',
                              children: [
                                c.reinstatable && e(De, { item: c, onReinstateSuccessAsync: x }),
                                n('small', {
                                  className: 'block text-gray-mid text-xs z-[-1] relative',
                                  children: [
                                    C('dashboard.archived'),
                                    ' ',
                                    c.archivedAt && ae(c.archivedAt, void 0, 'MMM D, YYYY')
                                  ]
                                })
                              ]
                            })
                          ]
                        })
                      ]
                    })
                  })
                },
                c.id
              )
            ),
            e('hr', {})
          ]
        });
  },
  Fe = () => {
    const { t } = I(),
      {
        data: r,
        loading: o,
        error: a,
        refetch: l
      } = ie({
        variables: {},
        fetchPolicy: 'network-only',
        onCompleted: i => {
          var f;
          ((f = i.UserBookmarks) == null ? void 0 : f.length) && !s && h(i.UserBookmarks[0].id);
        }
      }),
      [s, h] = p.exports.useState(void 0),
      [m, x] = p.exports.useState(r == null ? void 0 : r.UserBookmarks);
    m != (r == null ? void 0 : r.UserBookmarks) && x(r == null ? void 0 : r.UserBookmarks);
    const c = ({ folder: i, refetchBookmarkFolders: f }) => {
        const [v, w] = p.exports.useState(!1),
          [U, L] = p.exports.useState(i.name),
          [A, B] = p.exports.useState(!1),
          [P] = le(),
          [M] = oe(),
          V = () => {
            M({ variables: { id: i.id } }).then(() => {
              f(), w(!v);
            });
          };
        return n(u, {
          children: [
            v &&
              n('div', {
                className: 'bookmark-folder__edit-name flex',
                children: [
                  e('div', {
                    className: 'ember-view input--large',
                    children: n('div', {
                      className: 'ember-view new-form-label',
                      children: [
                        e('script', { type: 'text/x-placeholder' }),
                        n('label', {
                          className: 'form__label',
                          'data-bindattr-4061': '4061',
                          children: [
                            e('div', {
                              className: 'form__label__container',
                              'data-bindattr-4062': '4062'
                            }),
                            e('div', {
                              className: 'form__input__container',
                              'data-bindattr-4065': '4065',
                              children: e('input', {
                                onChange: k => L(k.target.value),
                                className:
                                  'h-10 leading-5 text-sm w-full focus:outline-none py-1 px-2 bg-white rounded-none border-solid border box-border inline-block mx-0 mt-0 mb-4 p-2 text-black transition shadow-sm border-gray-light',
                                type: 'text',
                                value: U
                              })
                            })
                          ]
                        })
                      ]
                    })
                  }),
                  e('button', {
                    onClick: () => {
                      P({ variables: { id: i.id, name: U } }).then(() => {
                        f(), w(!v);
                      });
                    },
                    className:
                      'bg-active-blue text-accent-contrast rounded-sm cursor-pointer inline-block font-normal text-xs ml-2 h-10 mb-0 py-[0.15rem] px-4 relative text-center no-underline ease-in-out border-active-blue font-sans transition duration-200 leading-5',
                    children: e('span', { children: t('dashboard.bookmark-save') })
                  }),
                  e('button', {
                    onClick: () => {
                      w(!v), L(i.name);
                    },
                    className:
                      'hover:text-hover bg-transparent rounded-sm cursor-pointer inline-block font-normal text-sm mx-0 mt-0 mb-4 py-2 px-4 relative shadow-none text-center no-underline',
                    children: e('span', { children: t('bookmark.cancel') })
                  })
                ]
              }),
            !v &&
              n('div', {
                className: 'bookmark-folder bg-slate-100 pb-4',
                children: [
                  e('span', {
                    className: 'bookmark-folder-name text-gray-mid text-base px-3',
                    children: U
                  }),
                  n('span', {
                    children: [
                      n('button', {
                        onClick: () => w(!v),
                        className: 'btn btn--link btn--inherit-font btn--no-margin',
                        children: [' ', e(O, {})]
                      }),
                      n('div', {
                        onClick: () => B(!A),
                        className: 'inline-block ',
                        children: [
                          !A &&
                            e('button', {
                              className: 'btn btn--bare-icon btn--small',
                              children: e(Ae, {})
                            }),
                          A &&
                            n('span', {
                              className: 'confirm-action__confirm',
                              children: [
                                t('bookmark.delete-confirmation'),
                                e('button', {
                                  className: 'hover:text-hover',
                                  onClick: () => {
                                    B(!1);
                                  },
                                  children: e('span', { children: t('no') })
                                }),
                                '/',
                                e('button', {
                                  className: 'hover:text-hover',
                                  onClick: () => {
                                    B(!1), confirm(t('bookmark.delete-folder-confirmation')) && V();
                                  },
                                  children: e('span', { children: t('yes') })
                                })
                              ]
                            })
                        ]
                      })
                    ]
                  })
                ]
              })
          ]
        });
      },
      d = ({ folderId: i }) => {
        const { data: f, refetch: v } = ce({ variables: { id: i }, fetchPolicy: 'network-only' });
        return !f || !f.UserBookmarksByFolder
          ? null
          : e(u, {
              children: f.UserBookmarksByFolder.map(w =>
                e(y, { bookmark: w, folderId: i, refetchBookmark: v }, w.id)
              )
            });
      },
      y = ({ bookmark: i, folderId: f, refetchBookmark: v }) => {
        var _, R;
        const [w, U] = p.exports.useState(!1),
          [L, A] = p.exports.useState(!1),
          [B, P] = p.exports.useState(i.note || ''),
          [M] = de(),
          [V] = me(),
          N = () => {
            V({ variables: { id: i.id } }).then(() => {
              v();
            });
          },
          k = () => {
            M({ variables: { id: i.id, note: B, bookmarkFolder: f } }).then(() => {
              v(), A(!L);
            });
          },
          D =
            (R = (_ = i == null ? void 0 : i.course) == null ? void 0 : _.courseGroup) == null
              ? void 0
              : R.kind;
        let j = '';
        return (
          D != null &&
            (['courseGroup', 'microCourse', 'webinarCourse', 'inPersonEventCourse'].includes(D)
              ? (j = `/learn/topic/${i.topicId}/redirect`)
              : (j = `/learn/${D.toLowerCase()}/bookmark.course.slug`)),
          n(
            'div',
            {
              className: `odd:bg-slate-100 text-black-light py-3 px-4 bg-white-mid rounded  ${
                w ? 'border-l-4 border-blue-700 pb-4' : ''
              }`,
              children: [
                e('div', {
                  className: 'flex flex-col w-full',
                  children: n('div', {
                    className: 'flex flex-row',
                    children: [
                      e('div', {
                        className: 'flex flex-row basis-4/12',
                        children: e('div', {
                          className: 'flex items-center p-6 text-sm font-semibold font-primary',
                          children: i.course.title
                        })
                      }),
                      n('div', {
                        className: 'flex flex-row basis-8/12 justify-between',
                        children: [
                          e('div', {
                            className: 'flex items-center text-sm px-2 w-48',
                            children: i.note
                          }),
                          e('a', {
                            href: j,
                            className: 'flex items-center text-sm font-semibold text-blue-700',
                            children: e('div', { className: '', children: t('bookmark.view') })
                          }),
                          e('button', {
                            className: 'flex items-center pr-6',
                            onClick: () => U(!w),
                            children: w
                              ? e('div', { className: 'h-2', children: Z })
                              : e('div', { className: 'h-2', children: W })
                          })
                        ]
                      })
                    ]
                  })
                }),
                w &&
                  n('div', {
                    className: 'flex flex-row justify-between',
                    children: [
                      L &&
                        n('div', {
                          className: 'flex items-center p-6 text-sm font-semibold font-primary',
                          children: [
                            e('input', {
                              className:
                                'h-7 focus:outline-none text-xs py-1 px-2 bg-white rounded-none border-solid border box-border inline-block mx-0 mt-0 mb-4 p-2 text-black w-auto transition shadow-sm border-gray-light',
                              type: 'text',
                              onChange: K => P(K.target.value),
                              value: B
                            }),
                            e('button', {
                              onClick: k,
                              className:
                                'text-white transition ease-in-out duration-200 border-gray-light border-solid border cursor-pointer inline-block font-normal text-sm mt-0 mr-0 mb-4 -ml-px pt-1.5 pb-2 px-4 relative text-center no-underline rounded-r-lg bg-[#405667] border-[#405667] hover:border-[#2c3c48] hover:bg-[#2c3c48] leading-3',
                              children: t('dashboard.bookmark-save')
                            }),
                            e('button', {
                              onClick: () => {
                                A(!1), P(i.note || '');
                              },
                              className: 'btn btn--bare btn--small',
                              children: e('span', {
                                className:
                                  'hover:text-hover bg-transparent rounded-sm cursor-pointer inline-block font-normal text-sm mx-0 mt-0 mb-4 py-2 px-4 relative shadow-none text-center no-underline',
                                children: t('bookmark.cancel')
                              })
                            }),
                            e('p', {})
                          ]
                        }),
                      !L &&
                        n('p', {
                          className: 'flex items-center px-6 text-sm font-primary leading-6 mb-2',
                          children: [
                            i.note + ' ',
                            e('button', {
                              onClick: () => A(!0),
                              className:
                                'px-2 btn btn--link btn--inherit-font btn--no-margin hover:text-hover',
                              children: e(O, {})
                            })
                          ]
                        }),
                      e('div', {
                        className: 'pr-2',
                        children: e('button', {
                          onClick: () => {
                            confirm(t('bookmark.delete-confirmation')) && N();
                          },
                          className:
                            'text-white text-xs shadow-none hover:text-hover bg-black px-4 py-2 rounded',
                          children: e('span', { children: t('bookmark.remove') })
                        })
                      })
                    ]
                  })
              ]
            },
            i.id
          )
        );
      };
    return o
      ? e(F, {})
      : a
      ? e(u, { children: a.message })
      : !r || !r.UserBookmarks
      ? e(u, {})
      : e('div', {
          className: 'mx-0 my-4 relative',
          children: e('div', {
            className: 'row-span-2',
            children: e('div', {
              className: 'flex flex-col pl-4',
              children:
                s &&
                (m == null
                  ? void 0
                  : m
                      .filter(i => i.id === s)
                      .map(i =>
                        n(
                          'section',
                          {
                            children: [
                              e(c, { folder: i, refetchBookmarkFolders: l }),
                              e(d, { folderId: i.id })
                            ]
                          },
                          i.id
                        )
                      ))
            })
          })
        });
  },
  Pe = e('svg', {
    width: '18',
    height: '14',
    viewBox: '0 0 18 14',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    children: e('path', {
      d: 'M1 13H17M1 1H17H1ZM1 7H17H1Z',
      stroke: '#6B7280',
      strokeWidth: '2',
      strokeLinecap: 'round',
      strokeLinejoin: 'round'
    })
  }),
  Me = n('svg', {
    width: '18',
    height: '18',
    viewBox: '0 0 18 18',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    children: [
      e('path', {
        d: 'M1.58579 1.58579C1.21071 1.96086 1 2.46957 1 3V5C1 5.53043 1.21071 6.03914 1.58579 6.41421C1.96086 6.78929 2.46957 7 3 7H5C5.53043 7 6.03914 6.78929 6.41421 6.41421C6.78929 6.03914 7 5.53043 7 5V3C7 2.46957 6.78929 1.96086 6.41421 1.58579C6.03914 1.21071 5.53043 1 5 1H3C2.46957 1 1.96086 1.21071 1.58579 1.58579Z',
        stroke: '#6B7280',
        strokeWidth: '2',
        strokeLinecap: 'round',
        strokeLinejoin: 'round'
      }),
      e('path', {
        d: 'M11.5858 1.58579C11.2107 1.96086 11 2.46957 11 3V5C11 5.53043 11.2107 6.03914 11.5858 6.41421C11.9609 6.78929 12.4696 7 13 7H15C15.5304 7 16.0391 6.78929 16.4142 6.41421C16.7893 6.03914 17 5.53043 17 5V3C17 2.46957 16.7893 1.96086 16.4142 1.58579C16.0391 1.21071 15.5304 1 15 1H13C12.4696 1 11.9609 1.21071 11.5858 1.58579Z',
        stroke: '#6B7280',
        strokeWidth: '2',
        strokeLinecap: 'round',
        strokeLinejoin: 'round'
      }),
      e('path', {
        d: 'M1.58579 11.5858C1.21071 11.9609 1 12.4696 1 13V15C1 15.5304 1.21071 16.0391 1.58579 16.4142C1.96086 16.7893 2.46957 17 3 17H5C5.53043 17 6.03914 16.7893 6.41421 16.4142C6.78929 16.0391 7 15.5304 7 15V13C7 12.4696 6.78929 11.9609 6.41421 11.5858C6.03914 11.2107 5.53043 11 5 11H3C2.46957 11 1.96086 11.2107 1.58579 11.5858Z',
        stroke: '#6B7280',
        strokeWidth: '2',
        strokeLinecap: 'round',
        strokeLinejoin: 'round'
      }),
      e('path', {
        d: 'M11.5858 11.5858C11.2107 11.9609 11 12.4696 11 13V15C11 15.5304 11.2107 16.0391 11.5858 16.4142C11.9609 16.7893 12.4696 17 13 17H15C15.5304 17 16.0391 16.7893 16.4142 16.4142C16.7893 16.0391 17 15.5304 17 15V13C17 12.4696 16.7893 11.9609 16.4142 11.5858C16.0391 11.2107 15.5304 11 15 11H13C12.4696 11 11.9609 11.2107 11.5858 11.5858Z',
        stroke: '#6B7280',
        strokeWidth: '2',
        strokeLinecap: 'round',
        strokeLinejoin: 'round'
      })
    ]
  }),
  J = ({ item: t }) => {
    const { appearance: r } = Y(),
      o = r != null && r.logoAsset ? (r == null ? void 0 : r.logoAsset) : $;
    return n('div', {
      className: 'm-8',
      children: [
        e('div', {
          className: 'flex justify-center border rounded-t-md',
          children: e('div', { children: e('img', { src: o, className: 'p-12 max-w-12' }) })
        }),
        n('div', {
          className: 'p-8 border rounded-b-md space-y-4',
          children: [
            e('div', { className: 'text-lg font-semibold', children: t.title }),
            e('div', {
              className: 'text-gray-500 text-sm font-semibold',
              children: t.displayDate
                ? n('div', {
                    className: 'flex flex-row',
                    children: [
                      e('div', { children: t.contentTypeLabel }),
                      e('div', { children: '|' }),
                      e('div', { children: t.displayDate })
                    ]
                  })
                : e('div', { children: t.contentTypeLabel })
            }),
            e('div', { className: t.description ? 'py-4' : '', children: t.description }),
            e('hr', { className: '' }),
            e('a', {
              href: t.href,
              className: 'flex justify-end text-blue-700',
              children: e('div', { className: '', children: t.callToAction })
            })
          ]
        })
      ]
    });
  },
  Ve = ({ item: t }) => {
    var o;
    const { data: r } = H({ variables: { id: t.id }, fetchPolicy: 'network-only' });
    return n(u, {
      children: [
        e('hr', { className: 'bg-gray-500' }),
        n('div', {
          className: S(
            'flex flex-col bg-slate-50 space-y-6 border-l-4 border-blue-700',
            t.description ? 'p-6' : 'px-6 pt-6'
          ),
          children: [
            e('div', {
              className: 'flex flex-row',
              children: e('div', {
                className: 'py-1 px-3 rounded-full bg-green-200',
                children: e('div', {
                  className: 'text-sm font-semibold',
                  children: t.contentTypeLabel
                })
              })
            }),
            e('div', {
              className: 'flex flex-row justify-between gap-4',
              children:
                (o = r == null ? void 0 : r.UserCourseCompletionProgress) == null
                  ? void 0
                  : o.map(a => {
                      var l, s, h;
                      return (
                        (a == null ? void 0 : a.type) !== 'coursePercentViewed' &&
                        e('div', {
                          className: 'flex flex-grow pl-6 py-6 bg-white rounded-md',
                          children: n('div', {
                            className: 'flex flex-col',
                            children: [
                              e('div', {
                                className: 'text-sm text-gray-500',
                                children:
                                  (l = a == null ? void 0 : a.type) == null
                                    ? void 0
                                    : l.replace(/([A-Z]+)/g, ' $1').replace(/([A-Z][a-z])/g, ' $1')
                              }),
                              e('div', {
                                className: 'text-3xl font-bold pt-2',
                                children:
                                  a.required && a.completed
                                    ? n(u, {
                                        children: [
                                          (s = a.completed) == null ? void 0 : s.length,
                                          '/',
                                          (h = a.required) == null ? void 0 : h.length
                                        ]
                                      })
                                    : 'N/A'
                              })
                            ]
                          })
                        })
                      );
                    })
            }),
            t.description &&
              e('div', { className: 'text-sm font-semibold', children: t.description })
          ]
        })
      ]
    });
  },
  Ie = ({ item: t }) => {
    var m;
    const [r, o] = p.exports.useState(!1),
      { appearance: a } = Y(),
      l = a != null && a.logoAsset ? (a == null ? void 0 : a.logoAsset) : $,
      { data: s } = H({ variables: { id: t.id }, fetchPolicy: 'network-only' }),
      h = t.asset ? t.asset : l;
    return n(u, {
      children: [
        e('div', {
          className: S('flex flex-col w-full', r && 'border-1-4 border-blue-700'),
          children: n('div', {
            className: 'flex flex-row basis-8/12',
            children: [
              n('div', {
                className: 'flex flex-row basis-8/12',
                children: [
                  e('div', {
                    className: 'py-4 pl-6 basis-4/12',
                    children: e('div', {
                      className: 'flex justify-center',
                      children: e('img', {
                        src: h,
                        className: S('rounded-md', !t.asset && 'md:h-20 lg:h-32 py-4')
                      })
                    })
                  }),
                  e('div', {
                    className: 'flex items-center px-6 text-sm font-semibold font-primary',
                    children: t.title
                  })
                ]
              }),
              n('div', {
                className: 'flex flex-row basis-4/12 justify-between',
                children: [
                  e('div', {
                    className:
                      'flex items-center pr-6 text-sm font-semibold font-primary text-gray-500',
                    children:
                      (m = s == null ? void 0 : s.UserCourseCompletionProgress) == null
                        ? void 0
                        : m.map((x, c) =>
                            e(
                              'div',
                              {
                                children:
                                  x.type === 'coursePercentViewed' && x.percent + '% Completed'
                              },
                              c
                            )
                          )
                  }),
                  e('a', {
                    href: t.href,
                    className: 'flex items-center text-sm font-semibold text-blue-700',
                    children: e('div', { className: '', children: t.callToAction })
                  }),
                  e('button', {
                    className: 'flex items-center pr-6',
                    onClick: () => o(!r),
                    children: r
                      ? e('div', { className: 'h-2', children: Z })
                      : e('div', { className: 'h-2', children: W })
                  })
                ]
              })
            ]
          })
        }),
        r && e(Ve, { item: t })
      ]
    });
  },
  T = ({ query: t, kind: r, sortColumn: o, sortDirection: a }) => {
    const [l, s] = p.exports.useState(!0),
      h = () => {
        window.innerWidth < 640 && s(!0);
      };
    p.exports.useEffect(() => {
      window.addEventListener('resize', h);
    }, []);
    const {
        data: m,
        loading: x,
        error: c
      } = he({
        variables: { query: t, kind: r, sortColumn: o, sortDirection: a },
        fetchPolicy: 'network-only'
      }),
      { i18n: d } = I(),
      y = ({ item: f }) => e(Ie, { item: f }),
      i = ({ item: f }) => e(J, { item: f });
    return x
      ? e(F, {})
      : c
      ? e(u, { children: c.message })
      : !m || !m.UserContentItems
      ? e(u, {})
      : n(u, {
          children: [
            n('div', {
              className: 'hidden sm:flex justify-end p-3',
              children: [
                e('button', {
                  className: S(
                    'flex border rounded-l-md w-9 h-9 place-content-center items-center',
                    !l && 'bg-blue-600'
                  ),
                  onClick: () => s(!1),
                  children: e('div', { children: Pe })
                }),
                e('button', {
                  className: S(
                    'flex border rounded-r-md w-9 h-9 place-content-center items-center',
                    l && 'bg-blue-600'
                  ),
                  onClick: () => s(!0),
                  children: e('div', { children: Me })
                })
              ]
            }),
            n('div', {
              className: S(
                l
                  ? 'grid gap-5 self-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                  : 'sm:flex flex-col w-full hidden'
              ),
              children: [
                !l &&
                  n('div', {
                    className: 'flex flex-row bg-slate-50 px-6 py-3 rounded-t-md',
                    children: [
                      e('div', {
                        className: 'text-sm font-semibold basis-8/12',
                        children: 'Title'
                      }),
                      e('div', {
                        className: 'text-sm font-semibold basis-4/12',
                        children: 'Progress'
                      })
                    ]
                  }),
                m.UserContentItems.map(f => {
                  const v = G(d, f);
                  return v.isCompleted
                    ? null
                    : e(u, {
                        children: l
                          ? e(i, { item: v }, f.id)
                          : e(
                              'div',
                              {
                                className: 'odd:bg-slate-50 even:bg-white',
                                children: e(y, { item: v }, f.id)
                              },
                              f.id
                            )
                      });
                })
              ]
            })
          ]
        });
  },
  Te = ({ item: t }) => {
    const { i18n: r } = I(),
      o = t.contentItem,
      a = G(r, o);
    return e(J, { item: a });
  },
  je = ({ setShowForm: t }) =>
    e('div', {
      className: 'my-0 mx-auto max-w-full w-full',
      children: e('div', {
        className: 'px-4',
        children: n('button', {
          onClick: () => t(r => !r),
          className:
            'rounded-sm cursor-pointer inline-block font-normal text-sm mx-0 mt-0 mb-4 py-2 px-5 relative text-center no-underline bg-grey-light duration-200 transition ease-in-out bg-active-blue border-active-blue text-accent-contrast leading-5',
          children: [
            e(Ce, {}),
            e('span', { className: 'ml-4', children: C('external-certificate.upload') })
          ]
        })
      })
    }),
  Ze = ({ setShowForm: t }) => {
    var c;
    const [r, o] = p.exports.useState(!1),
      [a, l] = p.exports.useState(''),
      { data: s } = pe({ variables: {} }),
      h =
        (c = s == null ? void 0 : s.UserCertificateFields) == null
          ? void 0
          : c.map(d => ({ certificateFieldId: d.id, ...d })),
      [m] = be({ variables: { asset: a, certificateUploadFields: h } }),
      x = d => {
        var v;
        const y = d.target.files[0],
          i = new FileReader();
        o(!0), y && i.readAsDataURL(y);
        const f = (v = i == null ? void 0 : i.result) == null ? void 0 : v.toString();
        i.onload = () => {
          l(f || '');
        };
      };
    return e('div', {
      className: 'border-solid p-4 text-black-light border-gray-light border-b last:border-b-0',
      children: n('form', {
        className: '',
        children: [
          e('p', {
            className: 'font-normal mb-4 leading-[1.45rem]',
            children:
              !r && e('span', { id: 'i18n-323', children: C('external-certificate.instructions') })
          }),
          n('div', {
            className: 'flex justify-evenly',
            children: [
              e('div', {
                className: 'w-full',
                children: e('div', {
                  className: 'row',
                  children: e('div', {
                    className: 'float-left px-4 relative',
                    children: e('div', {
                      className: 'ember-view input__container',
                      children: r
                        ? n(u, {
                            children: [
                              e('img', {
                                className: 'ember-view',
                                src: a,
                                alt: 'External Certificate'
                              }),
                              n('button', {
                                onClick: () => o(!1),
                                className:
                                  'flex items-center justify-end h-auto border-[#405667] text-[#405667] text-right bg-none rounded-none border-solid border-t-4 clear-both font-bold p-0 shadow-none w-full',
                                children: [C('remove') + ' ' + C('wysiwyg.image'), e(Be, {})]
                              })
                            ]
                          })
                        : e('input', {
                            className:
                              'border-none btn btn--expand btn--bare rounded-sm text-xs box-border cursor-pointer block h-10 mx-0 mt-0 mb-4 py-1 px-4 w-full',
                            type: 'file',
                            name: 'file',
                            'aria-label': 'file',
                            onChange: d => {
                              x(d);
                            }
                          })
                    })
                  })
                })
              }),
              n('div', {
                className: 'w-full flex flex-col text-base py-3 px-4 text-gray-mid',
                children: [
                  e('div', {
                    className: 'row',
                    children: n('div', {
                      className: 'float-left px-4 relative w-full',
                      children: [
                        n('div', {
                          className: 'ember-view',
                          children: [
                            e('label', { children: C('certificate.issued-date') }),
                            e('div', {
                              className: 'ember-view input__wrapper input__wrapper--clear',
                              children: e('input', {
                                className:
                                  'focus:outline-none h-10 mb-4 text-base py-2 px-4 w-full bg-white rounded-none border-solid border box-border block mx-0 mt-0 p-2 text-black cursor-pointer',
                                type: 'text',
                                onBlur: d => (d.target.type = 'text'),
                                onFocus: d => (d.target.type = 'date')
                              })
                            })
                          ]
                        }),
                        n('div', {
                          className: 'ember-view',
                          children: [
                            e('label', { children: C('certificate.expiration-date') }),
                            e('div', {
                              className: 'mb-4',
                              children: e('input', {
                                className:
                                  'focus:outline-none h-10 mb-4 text-base py-2 px-4 w-full bg-white rounded-none border-solid border box-border block mx-0 mt-0 p-2 text-black cursor-pointer',
                                type: 'text',
                                onBlur: d => (d.target.type = 'text'),
                                onFocus: d => (d.target.type = 'date')
                              })
                            })
                          ]
                        })
                      ]
                    })
                  }),
                  e('div', {
                    className: 'flex justify-end px-4',
                    children: n('div', {
                      className: 'flex',
                      children: [
                        e('button', {
                          onClick: () => {
                            t(d => !d), o(!1);
                          },
                          'data-ember-action': '28579',
                          className:
                            'bg-white text-xs box-border cursor-pointer block h-10 mx-0 mt-0 mb-4 py-1 px-4 text-black w-full',
                          children: C('external-certificate.cancel')
                        }),
                        e('button', {
                          onClick: () => m(),
                          className:
                            'bg-active-blue rounded-sm text-xs box-border cursor-pointer block h-10 mx-0 mt-0 mb-4 py-1 px-4 text-white w-full',
                          children: C('external-certificate.submit')
                        })
                      ]
                    })
                  })
                ]
              })
            ]
          })
        ]
      })
    });
  },
  We = ({ query: t, displayExpiredCertificateInformation: r }) => {
    var x;
    const [o, a] = p.exports.useState(!1),
      {
        data: l,
        loading: s,
        error: h
      } = ue({
        variables: { query: t, includeExpiredCertificates: r },
        fetchPolicy: 'network-only'
      }),
      { companyEnableExternalCertificateUploads: m } = E();
    return s
      ? e(F, {})
      : h
      ? e(u, { children: h.message })
      : o
      ? e(Ze, { setShowForm: a })
      : n(u, {
          children: [
            e('div', {
              className: 'grid gap-5 self-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
              children:
                (x = l == null ? void 0 : l.UserCertificates) == null
                  ? void 0
                  : x.map(c => e(Te, { item: c }, c.id))
            }),
            !!m && e(je, { setShowForm: a })
          ]
        });
  },
  Ee = (t, r, o, a) => {
    const l = [],
      s = t.reduce((h, { kind: m, count: x }) => ((h[m] = x), h), {});
    return (
      (s.contentItems || r) && l.push({ key: b.Current, count: s.contentItems || 0 }),
      (s.eventItems || r) && l.push({ key: b.Events, count: s.eventItems || 0 }),
      (s.learningPaths || r) && l.push({ key: b.LearningPath, count: s.learningPaths || 0 }),
      (s.completedItems || r) && l.push({ key: b.Completed, count: s.completedItems || 0 }),
      (s.archivedContentItems || r) &&
        l.push({ key: b.Archived, count: s.archivedContentItems || 0 }),
      s.bookmarkFolders && l.push({ key: b.Bookmark, count: s.bookmarkFolders }),
      (s.certificates || o || r) && l.push({ key: b.Certificate, count: s.certificates || 0 }),
      a && s.waitlistedCourses && l.push({ key: b.Waitlist, count: s.waitlistedCourses }),
      l
    );
  },
  z = {
    [b.Current]: 'dashboard.current',
    [b.Events]: 'dashboard.events',
    [b.LearningPath]: 'learning-path',
    [b.Completed]: 'dashboard.completed',
    [b.Archived]: 'dashboard.archived',
    [b.Bookmark]: 'dashboard.bookmark',
    [b.Certificate]: 'dashboard.certificates',
    [b.Waitlist]: 'dashboard.waitlisted'
  },
  q = ({
    displayExpiredCertificateInformation: t,
    query: r,
    userHasManagerInterfaceAccess: o,
    companyEnableExternalCertificateUploads: a,
    companyHasWaitlistingFeature: l
  }) => {
    const [s, h] = p.exports.useState(void 0),
      [m, x] = p.exports.useState([]),
      [c, d] = p.exports.useState(!1),
      [y, i] = p.exports.useState(!1),
      {
        loading: f,
        error: v,
        refetch: w
      } = fe({
        variables: { query: r, includeExpiredCertificates: t },
        onCompleted: N => {
          const k = Ee(N.UserContentGroups || [], o, a, l);
          s && !k.find(({ key: D }) => D === s) ? h(void 0) : !s && k.length && h(k[0].key), x(k);
        }
      }),
      U = () => {
        d(window.innerWidth < 640);
      };
    p.exports.useEffect(() => {
      window.addEventListener('resize', U);
    }, []);
    const { t: L } = I(),
      A = p.exports.useCallback(() => h(m.length ? m[0].key : void 0), [m]);
    if (f) return e(F, {});
    if (v) return e(u, { children: v.message });
    const B = N => {
        h(N);
      },
      M = e(u, {
        children: c
          ? e(
              () =>
                n(u, {
                  children: [
                    n('button', {
                      className:
                        'flex justify-between rounded-md py-3 pl-4 pr-3 border w-full text-md font-medium',
                      onClick: () => i(!y),
                      children: [
                        s,
                        y
                          ? e('div', { className: 'pt-2', children: Z })
                          : e('div', { className: 'pt-2', children: W })
                      ]
                    }),
                    y &&
                      e('div', {
                        className: 'border mt-2 rounded-md',
                        children: m.map(({ key: N }, k) =>
                          e(u, {
                            children: e('div', {
                              className: 'flex my-auto space-x-6 mx-auto md:block',
                              children: e('ul', {
                                className:
                                  'items-center justify-between p-5 space-y-3 md:space-y-0 md:flex md:space-x-6 w-full',
                                children: e(
                                  'li',
                                  {
                                    children: e('button', {
                                      onClick: () => {
                                        B(N);
                                      },
                                      className: N === s ? 'font-bold underline' : '',
                                      children: e('span', { children: L(z[N]) })
                                    })
                                  },
                                  k
                                )
                              })
                            })
                          })
                        )
                      })
                  ]
                }),
              {}
            )
          : e('ul', {
              className: 'items-center pt-4 md:space-y-0 sm:flex sm:space-x-6 w-full',
              role: 'tablist',
              children: m.map(({ key: N }, k) =>
                e(u, {
                  children: e(
                    'li',
                    {
                      children: e('button', {
                        onClick: () => {
                          B(N);
                        },
                        className: N === s ? 'py-3 font-semibold border-b border-blue-500' : '',
                        children: e('span', { children: L(z[N]) })
                      })
                    },
                    k
                  )
                })
              )
            })
      }),
      V = () => {
        switch (s) {
          case b.Current:
            return e(T, {
              query: r,
              kind: (g.CourseGroup, g.Article, g.Video, g.ShareableContentObject, g.XApiObject)
            });
          case b.Events:
            return e(T, {
              query: r,
              kind: (g.Webinar, g.Webinar, g.InPersonEvent, g.InPersonEventCourse),
              sortColumn: xe.DisplayDate
            });
          case b.LearningPath:
            return e(T, { query: r, kind: g.LearningPath });
          case b.Completed:
            return e(T, {
              query: r,
              kind:
                (g.LearningPath,
                g.CourseGroup,
                g.Article,
                g.Video,
                g.ShareableContentObject,
                g.XApiObject,
                g.Webinar,
                g.Webinar,
                g.InPersonEvent,
                g.InPersonEventCourse)
            });
          case b.Archived:
            return e(Se, {});
          case b.Bookmark:
            return e(Fe, {});
          case b.Waitlist:
            return e(ye, {});
          case b.Certificate:
            return e(We, { query: r, displayExpiredCertificateInformation: t });
          default:
            return e(u, {});
        }
      };
    return e(X.Provider, {
      value: {
        refetchContentGroups: w,
        resetActiveTab: A,
        companyEnableExternalCertificateUploads: a
      },
      children: n('div', {
        className: 'pt-16 px-10 pb-20',
        children: [
          e('div', { className: 'text-2xl font-bold font-header', children: 'Activity' }),
          e('div', {
            className: 'max-w-none w-auto text-slate-700 text-black-light text-sm',
            children: n('div', {
              className: '',
              children: [M, !c && e('hr', { className: '' }), V()]
            })
          })
        ]
      })
    });
  };
q.displayName = 'LearnerAccessWidget';
const Ye = { title: 'Dashboard Page', description: 'The dashboard page' };
function Xe() {
  return e(u, {
    children: n('div', {
      className: 'font-primary',
      children: [
        e(ve, {}),
        e(we, {
          heading: 'My Dashboard',
          subtext:
            'Your Dashboard is your game-changing collaborative space where you can view all your learning in one place.'
        }),
        e(q, { companyHasWaitlistingFeature: !0 }),
        e(Ne, {
          onAddedToQueue: function (t) {
            throw new Error('Function not implemented.');
          },
          numberOfContentItems: 3
        }),
        e(ge, {})
      ]
    })
  });
}
export { Xe as Page, Ye as documentProps };
