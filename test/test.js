import { expect } from 'chai';
import React, { Component } from 'react';
import {
  createRenderer,
  Simulate,
} from 'react-addons-test-utils';
import windowState from '../src';


class InnerComponent extends Component {
  render() {
    return <div />;
  }
}

function setup() {
  const props = {};

  const renderer = createRenderer();

  const WrappedComponent = windowState(InnerComponent);

  renderer.render(
    <WrappedComponent {...props} />
  );

  const output = renderer.getRenderOutput();

  return {
    props: props,
    output: output,
    renderer: renderer,
  };
}

describe('windowState', () => {
  it('should render inner component', () => {
    const { output } = setup();
    expect(output.type).to.equal('div');
  });

  it('should ', async () => {

  });
});
