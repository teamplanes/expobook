# ExpoBook 📚

Expobook allows you to present and develop react-native UI components in a standalone dev environment within an expo app.

### How to setup

Install expobook.

```sh
$ npm i expobook
```

Create your expobook entry file.

```sh
$ touch expobook.js
```

Add components to expobook.

```js
// ./expobook.js
import React from 'react';
import createExpobook from 'expobook';
import MyButton from './components/button';

const expobook = createExpobook();

expobook.add('My Button', () => <MyButton>Hello</MyButton>);

expobook.add('Another Button', () => <MyButton>Goodbye</MyButton>);

export default expobook.build();
```

Run expobook:

```sh
$ ./node_modules/.bin/expobook
```

OR better yet Add `"expobook": "./node_modules/.bin/expobook"` to `"scripts"` in your package.json and just run `npm run expobook`.

### TODO

* Enable custom `exp` cli config pass through
* Fix paths so that `__expobook__` becomes `.expobook`
