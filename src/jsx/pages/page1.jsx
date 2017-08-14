import React, { Component } from 'react';
import ModalExample from '../components/modal-example';

class Page1 extends Component {
  render() {
    return (
      <div>
        <h1>Page 1</h1>
        <p>
          <a href="" data-toggle="modal" data-target="#modal-example">Show Example Modal Component</a>
        </p>
        <ModalExample />
      </div>
    );
  }
}

export default Page1;
