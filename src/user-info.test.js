import React from 'react';
import { mount } from 'enzyme'
import UserInfo from './user-info';

const testUser = {
  name: 'Joe Test',
  interests: ['Being a guinea pig', 'testing stuff']
};

describe('UserInfo component', () => {
  it('throws if missing required props', () => {
    expect(() => { node = mount(<UserInfo/>);}).toThrow();
  });
  it('passes props and renders as expected', () => {
    const node = mount(<UserInfo user={testUser}/>);
    expect (node).toBeTruthy();
    // ZOMG you guys, enzyme natchers are super nifty.
    expect(node.find('h2').html()).toContain('Joe Test');
    // ZOMG you guys, enzyme natchers are super nifty.
    expect(node.find('ul').first().html()).toContain('Being a guinea pig');
  });
})
