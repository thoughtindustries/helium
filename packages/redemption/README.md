# `@thoughtindustries/redemption`

> The Redemption component allows users to redeem a code in exchange for access to specific content.

## Import component

```
import { Redemption } from '@thoughtindustries/redemption';
```

## Usage

The redemption component can be implemented as follows:

```
<Redemption isLoggedIn={true} />
```

If the user is logged in, that user will be navigated to the code redemption page where they can redeem codes for courses. If either a user is logged out or a user does not exist then a registration page will render where users have the option to sign in or create a new account.
