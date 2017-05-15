import React from 'react';
import { shallow } from 'enzyme';
import UserInfo from './user-info';
import toJson from 'enzyme-to-json';


const testUser = {
  name: 'Joe Test',
  interests: ['Being a guinea pig', 'testing stuff']
};

describe('UserInfo component', () => {
  it('passes props and renders as expected', () => {
    const node = shallow(<UserInfo user={testUser}/>);
    expect(node).toBeTruthy();
    expect(node).toMatchSnapshot();
  });
  it('renders name and interests', () => {
    const node = shallow(<UserInfo user={testUser}/>);
    // ZOMG you guys, enzyme matchers are super nifty.
    expect(node.find('h2').html()).toContain('Joe Test');
    expect(node.find('li').at(0).html()).toContain('Being a guinea pig');
    expect(node.find('li').at(1).html()).toContain('testing stuff');
  });
  it('throws if missing required props', () => {
    expect(() => { node = shallow(<UserInfo/>);}).toThrow();
  });
  it('renders correctly', () => {
    const node = shallow(<UserInfo user={testUser}/>);
    expect(toJson(node)).toMatchSnapshot();
  });
});
