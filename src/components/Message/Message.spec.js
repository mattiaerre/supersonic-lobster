import React from 'react';
import renderer from 'react-test-renderer';
import Message from './Message';

describe('<Message />', () => {
  it('renders correctly', () => {
    const component = renderer.create(
      <Message message="Hello from Jest" />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
