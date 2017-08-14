import React, { Component } from 'react';

class ModalExample extends Component {
  render() {
    return (
      <div
        id="modal-example"
        className="modal fade"
        role="dialog"
        aria-labelledby="modal-example"
        aria-hidden="true">

        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
              <h3>Modal Header</h3>
            </div>
            <div className="modal-body">
              <h4>Example Modal</h4>
              <p>`src/jsx/components/modal-example-jsx`</p>
            </div>
            <div className="modal-footer">
              <p>Footer</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ModalExample;
