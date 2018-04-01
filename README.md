# ExpoBook

### Example

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
import createExpobook from 'expobook';
import MyButton from './components/button';

const expobook = createExpobook();

expobook.add('My Button', () => <MyButton>Hello</MyButton>);

expobook.add('Another Button', () => <MyButton>Goodbye</MyButton>);

export default expobook.build();
```
