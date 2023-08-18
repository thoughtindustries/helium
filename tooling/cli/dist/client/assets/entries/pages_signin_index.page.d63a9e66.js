import { r as t, a, j as e } from '../chunks/chunk-5011acf0.js';
import { g as d, a as c, L as u } from '../chunks/chunk-8d1d4039.js';
import '../chunks/chunk-d9a61b28.js';
const g = d`
  mutation LoginMutation($email: String!, $password: String!) {
    Login(email: $email, password: $password)
  }
`,
  m = () => {
    const [s, o] = t.exports.useState(''),
      [l, n] = t.exports.useState(''),
      [i] = c(g);
    return a('div', {
      className: 'flex flex-col items-center py-12 px-8 space-y-4',
      children: [
        e(u, { size: 'large' }),
        e('div', {
          className: 'text-3xl font-bold font-secondary',
          children: 'Sign into your account'
        }),
        a('div', {
          className: 'p-8 bg-white rounded-md space-y-6 font-primary sm:w-96',
          children: [
            a('form', {
              onSubmit: async r => {
                r.preventDefault(),
                  await i({ variables: { email: s, password: l } })
                    .then(() => {
                      window.location.href = '/learn/';
                    })
                    .catch(f => {
                      console.log('Handle Login Mutation Error Here');
                    });
              },
              className: 'space-y-6',
              children: [
                a('div', {
                  children: [
                    e('label', {
                      className: 'text-sm font-semibold text-left',
                      children: 'Email address'
                    }),
                    e('input', {
                      type: 'email',
                      id: 'Email',
                      className:
                        'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500',
                      required: !0,
                      onChange: r => o(r.target.value)
                    })
                  ]
                }),
                a('div', {
                  children: [
                    e('label', {
                      className: 'text-sm font-semibold text-left',
                      children: 'Password'
                    }),
                    e('input', {
                      type: 'password',
                      id: 'Password',
                      className:
                        'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500',
                      required: !0,
                      onChange: r => n(r.target.value)
                    })
                  ]
                }),
                e('button', {
                  type: 'submit',
                  className: 'h-12 p-2.5 px-4 bg-indigo-800 hover:bg-blue-500 rounded-md w-full',
                  children: e('div', {
                    className: 'text-sm font-semibold text-white',
                    children: 'Sign in'
                  })
                })
              ]
            }),
            e('div', {
              className: 'flex justify-center',
              children: e('a', {
                href: '/learn/forget',
                className:
                  'items-center px-8 w-full text-indigo-800 hover:text-blue-500 text-center font-semibold justify-center',
                children: 'Forgot Password'
              })
            })
          ]
        })
      ]
    });
  };
function y() {
  return e('div', { className: 'bg-gray-100 min-h-screen', children: e(m, {}) });
}
export { y as Page };
