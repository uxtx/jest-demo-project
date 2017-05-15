import React from 'react';
import { shallow } from 'enzyme'
import InterestBox from './interest-box';

describe('InterestBox', () => {
  // and now for some fun with spies.

  // no need for an extra lib here, jest has you covered.
  // it's basically sugar around jasmine spies
  it('should be able to render the InputBox if properly configured', () => {
    // Boom. And thats all there is to instantiating a jest spy in most cases.
    const onInputSpy = jest.fn();
    const node = shallow(<InterestBox onInputSave={onInputSpy} />);
    expect(node).toBeTruthy();
    // you can check how many times your spy has been called
    expect(onInputSpy.mock.calls.length).toBe(0);
  });
  it('should be able to handle input changes and submit', () => {
    const onInputSpy = jest.fn();
    const node = shallow(<InterestBox onInputSave={onInputSpy} />);
    expect(onInputSpy.mock.calls.length).toBe(0);

    // make references to our text and submit nodes.
    const textNode = node.find('input').at(0);
    const submitNode = node.find('input').at(1);

    const testInterest = 'Long walks on the beach'

    // enzyme simulation is awesome guys.
    textNode.simulate('change', {target: {value: testInterest}});
    textNode.simulate('blur');

    expect(node.state().interest).toBe(testInterest)

    // simulate submission
    submitNode.simulate('click');
    // hey look, our spy was triggered when we submitted!
    expect(onInputSpy.mock.calls.length).toBe(1);
    // annd we get all passed arguments from our mocked function. Hawt.
    expect(onInputSpy.mock.calls[0][0]).toBe(testInterest)
  });
  it('throws if missing required props', () => {
    expect(() => { node = shallow(<InterestBox/>);}).toThrow();
  });
});
