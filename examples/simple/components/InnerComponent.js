import React, { Component, PropTypes } from 'react';


class InnerComponent extends Component {
  static propTypes = {
    win: PropTypes.shape({
      height: PropTypes.number.isRequired,
      width: PropTypes.number.isRequired,
    }).isRequired,
    doc: PropTypes.shape({
      height: PropTypes.number.isRequired,
      width: PropTypes.number.isRequired,
    }).isRequired,
  };

  render() {
    const { win, doc } = this.props;
    return (
      <div>
        <div>
          <h2>window</h2>
          <p>width: {win.width}</p>
          <p>height: {win.height}</p>
        </div>
        <div>
          <h2>document</h2>
          <p>width: {doc.width}</p>
          <p>height: {doc.height}</p>
        </div>
      </div>
    );
  }
}


export default InnerComponent;
