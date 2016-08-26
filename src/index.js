import React, { Component } from 'react';
import throttle from 'lodash.throttle';

const RESIZE = 'resize';

export const withWindowState = (BaseComponent) =>
  class extends Component {
    constructor(props, context) {
      super(props, context);
      this.state = {
        win: { height: 0, width: 0 },
        doc: { height: 0, width: 0 },
      };
    }

    onResize = () => {
      const win = window;
      const doc = document;
      const body = doc.getElementsByTagName('body')[0];
      this.setState({
        win: {
          height: win.innerHeight,
          width: win.innerWidth,
        },
        doc: {
          height: body.clientHeight,
          width: body.clientWidth,
        },
      });
    }

    componentDidMount() {
      this.onResize();
      this.onResizeThrottled = throttle(this.onResize, 10);
      window.addEventListener(RESIZE, this.onResizeThrottled);
    }

    componentWillUnmount() {
      window.removeEventListener(RESIZE, this.onResizeThrottled);
    }

    render() {
      return <BaseComponent {...this.state} {...this.props} />;
    }
  };
