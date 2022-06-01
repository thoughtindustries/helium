# `@thoughtindustries/redemption`

> The Redemption component allows users to register for specific courses.

## Import component

```
import { Redemption } from '@thoughtindustries/redemption';
```

## Usage

The redemption component is a functional component which can be implemented as follows:

```
<Redemption currentUser={currentUser} />
```

The redemption component has a `currentUser` prop which is used to determined whether or not a user is logged in. The `currentUser` prop accepts a user object with the following type definition:

```
type CurrentUser = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  address1?: string;
  address2?: string;
  roleKey: string;
  city?: string;
  state?: string;
  zipCode?: string;
  country?: string;
  telephone?: string;
  externalCustomerId?: string;
  lang?: string;
  ref1?: string;
  ref2?: string;
  ref3?: string;
  ref4?: string;
  ref5?: string;
  ref6?: string;
  ref7?: string;
  ref8?: string;
  ref9?: string;
  ref10?: string;
};
```

If the user is logged in, that user will be navigated to the code redemption page where they can redeem codes for courses. If either a user is logged out or a user does not exist then a registration page will render where users have the option to sign in or create a new membership. It is important to note that certain redemption codes allow access to certain courses and they do not provide all access to all courses.
