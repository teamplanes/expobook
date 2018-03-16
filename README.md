# ExpoBook

### POA
- User installs and adds items to expobook something like this:
```js
import { addComponent } from 'expobook';
import Button from './components/button';

addComponent('My Button', () => (
  <Button>Hello</Button>
));
```
- The user will need an expobook entry file, called something like expobook.js, in the root of their project.
  - This could just have all the component declerations with `addComponent` or import other files that do that.
- To run the app they will run `expobook run` or similar, this will run an expo app in the normal way.

*Nice to haves*
- Being able to build and deploy
- Being able to customise expo's app.json when using expobook
- Adding suboptions like storybook
- Allow non-expo apps to run this
  - We would ideally use the User's apps expo dependency, but for this we'd need expobook to have it's own

*Core challenge*
- The CLI will need to run the same expo dependency but just change the entry point of the app to expobook
- Development mode
- Creating the library for adding and naming components
