import React from 'react';
import ReactDOM from 'react-dom';
import App from '../client/dist/app.js';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

test('Nav should correctly render with the current product', ()=>{
  const div = document.createElement('div');
  // document.body.appendChild(div);
  // ReactDom.render(<App />, div);

  const component = ReactDOM.render(<App />);
  expect(component).toMatchSnapshot();
  //trigger callback
});