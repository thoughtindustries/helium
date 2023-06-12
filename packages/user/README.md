# `@thoughtindustries/user`

> A base component for user login and registration.

## Login

The `Login` component renders a form for learners to enter email address and password to sign in, as well as a link to retrieve password in case the learner forgets their password. Once learner signs in successfully, learner will be redirected to the dashboard page.

### Example code

```tsx
import { Login } from '@thoughtindustries/user';

export function MyComponent() {
  // ...

  return (
    <Login />
  );
}
```

## Registration

The `Registration` component renders a form for learners who are using redemption or registration codes to access the site. Both new and existing users can redeem any codes they have with this component. New users can also complete their registration as part of this process. 

### Example code

```tsx
import { Registration } from '@thoughtindustries/user';

// Example 1 - allow new user to redeem any codes and complete user registration
export function MyComponent1() {
  // ...

  return (
    <Registration />
  );
}

// Example 2 - allow existing user to redeem any codes
export function MyComponent2() {
  // ...
  // Get existing user (available from page context)
  const { currentUser } = usePageContext();
  // Override redirect url
  const redirectUrl = '/learn/dashboard';

  return (
    <Registration currentUser={currentUser} redirectUrl={redirectUrl} />
  );
}
```

## Props

| Name     | Required | Type                          | Description               |
| -------- | -------- | ----------------------------- | ------------------------- |
| currentUser | No | <code>CurrentUser</code>        | An object representing the current user. The component will determine if it's a new or an existing user based on this property. If it's not set, the component will render additional form fields to allow user to complete their registration. |
| redirectUrl     | No | <code>string</code> | The redirect URL after the form submission succeeds. Defaults to `/learn`.       |
