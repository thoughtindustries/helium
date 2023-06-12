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

The `Registration` component renders a form for learners to register for your site and gain access to the learner dashboard.
