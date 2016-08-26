import { expect } from 'chai';
import React, { Component } from 'react';
import {
  createRenderer,
  renderIntoDocument,
} from 'react-addons-test-utils';
import { withWindowState } from '../src';


class InnerComponent extends Component {
  render() {
    return <div />;
  }
}

function setup(props = {}) {
  const renderer = createRenderer();

  const WrappedComponent = withWindowState(InnerComponent);

  renderer.render(
    <WrappedComponent {...props} />
  );

  const output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer,
  };
}

describe('withWindowState', () => {
  it('should render inner component', () => {
    const { output } = setup();
    expect(output.type).to.equal(InnerComponent);
  });

  it('should all be 0 when component did mount', () => {
    const { output } = setup();
    expect(output.props.win).to.deep.equal({ height: 0, width: 0 });
    expect(output.props.doc).to.deep.equal({ height: 0, width: 0 });
  });

  it('should change state when resize event be triggered', (done) => {
    window.innerHeight = 753;
    window.innerWidth = 1403;
    document.body.clientHeight = 5624;
    document.body.clientWidth = 1403;
    const WrappedComponent = withWindowState(InnerComponent);
    const component = renderIntoDocument(<WrappedComponent />);
    window.addEventListener('resize', () => {
      expect(component.state.win).to.deep.equal({ height: 753, width: 1403 });
      expect(component.state.doc).to.deep.equal({ height: 5624, width: 1403 });
      done();
    });
    const { Event } = window;
    window.dispatchEvent(new Event('resize'));
  });
});
