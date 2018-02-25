# enzyme-presentation


1. Install following dependencies:
enzyme react-test-renderer enzyme-adapter-react-16 jest babel-jest babel-preset-env babel-preset-react enzyme-to-json

2. Add config to package.json:
"scripts": {
  "test": "jest",
  "test:watch": "jest --watch",
  "test:coverage": "jest --coverage"
},
"jest": {
  "setupFiles": ["./src/jest-setup.js"],
  "snapshotSerializers": ["enzyme-to-json/serializer"]
}

3. Create setup file specified above:
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });
// Make Enzyme functions available in all test files without importing
global.shallow = shallow;
global.render = render;
global.mount = mount;

4. Further Reading:
https://facebook.github.io/jest/docs/en/tutorial-react.html
https://javascriptplayground.com/introduction-to-react-tests-enzyme/
https://hackernoon.com/testing-react-components-with-jest-and-enzyme-41d592c174f
https://benmccormick.org/2016/09/19/testing-with-jest-snapshots-first-impressions/
