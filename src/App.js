import React, { Component } from 'react';
import Transition from 'react-transition-group/Transition';

import './App.css';
import Modal from './components/Modal/Modal';
import Backdrop from './components/Backdrop/Backdrop';
import List from './components/List/List';

class App extends Component {
  state = {
    modalIsOpen: false,
    showBlock: false,
  };

  showModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  render() {
    const { modalIsOpen, showBlock } = this.state;
    return (
      <div className='App'>
        <h1>React Animations</h1>
        <button
          onClick={() =>
            this.setState((prevState) => ({ showBlock: !prevState.showBlock }))
          }
        >
          Toggle
        </button>
        <br />
        <Transition in={showBlock} timeout={300} mountOnEnter unmountOnExit>
          {(state) => (
            <div
              style={{
                backgroundColor: 'red',
                width: 100,
                height: 100,
                margin: 'auto',
                opacity: state === 'entered' ? 1 : 0,
                transition: 'opacity 300ms ease-out',
              }}
            ></div>
          )}
        </Transition>
        <Transition in={modalIsOpen} timeout={300} mountOnEnter unmountOnExit>
          {(state) => <Modal show={state} closed={this.closeModal} />}
        </Transition>

        {modalIsOpen && <Backdrop show={modalIsOpen} />}
        <button className='Button' onClick={this.showModal}>
          Open Modal
        </button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
