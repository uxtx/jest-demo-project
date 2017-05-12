import React from 'react';
import { mount } from 'enzyme'
import Stateless from './Stateless';

const testUser = {
  name: 'Joe Test',
  interests: ['Being a guinea pig', 'testing stuff']
};


it('throws if missing required props', () => {
  expect(() => { node = mount(<Stateless/>);}).toThrow();
});
it('passes props and renders as expected', () => {
  const node = mount(<Stateless user={testUser}/>);
  expect (node).toBeTruthy();
  // ZOMG you guys, enzyme natchers are super nifty.
  expect(node.find('h2').html()).toContain('Joe Test');
  // ZOMG you guys, enzyme natchers are super nifty.
  expect(node.find('ul').first().html()).toContain('Being a guinea pig');
});
