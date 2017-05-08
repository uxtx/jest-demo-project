import React from 'react';
import { mount } from 'enzyme'
import Stateless from './Stateless';

it('renders without crashing', () => {
  const MyStateless = mount(<Stateless />);
  expect (MyStateless).toBeTruthy();
});
it('passes props and renders as expected', () => {
  const MyStateless = mount(<Stateless user={'steve'}/>);
  expect (MyStateless).toBeTruthy();
  expect(MyStateless.props().user).toBe('steve');
});
