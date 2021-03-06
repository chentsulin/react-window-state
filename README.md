# react-window-state

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Dependency Status][david_img]][david_site]

> Pass updated window width and height as props on resize. Highly inspired by [react-window-mixin](https://github.com/szymonkaliski/react-window-mixins).


## Install

```
$ npm install react-window-state
```


## Usage

```js
import { withWindowState } from 'react-window-state';

const WrappedComponent = withWindowState(BaseComponent);

class App extends Component {
  render() {
    return <WrappedComponent />;
  }
}

class BaseComponent extends Component {
  render() {
    // retrieve updated window, document state from props
    const { win, doc } = this.props;
    return (
      <div>
        <p>window - width: {win.width}, height: {win.height}</p>
        <p>document - width: {doc.width}, height: {doc.height}</p>
      </div>
    );
  }
}
```

## API

### withWindowState(BaseComponent, options)

#### BaseComponent

*Required*

Type: `ReactComponent`

#### options.wait

*Optional*

Type: `number`

Default: `10`

The number of milliseconds to throttle invocations to.

## License

MIT © [C.T. Lin](https://github.com/chentsulin/react-window-state)

[npm-image]: https://badge.fury.io/js/react-window-state.svg
[npm-url]: https://npmjs.org/package/react-window-state
[travis-image]: https://travis-ci.org/chentsulin/react-window-state.svg
[travis-url]: https://travis-ci.org/chentsulin/react-window-state
[coveralls-image]: https://coveralls.io/repos/chentsulin/react-window-state/badge.svg?branch=master&service=github
[coveralls-url]: https://coveralls.io/r/chentsulin/react-window-state?branch=master
[david_img]: https://david-dm.org/chentsulin/react-window-state.svg
[david_site]: https://david-dm.org/chentsulin/react-window-state

