import React from 'react';
import { connect } from 'react-redux';
import { add, sub } from '../actions';
import '../styles/pages/counterPage.css'

function CounterPage({ add, sub, counter }) {

  return (
    <div className="counter-page">
      <button className="plus" onClick={add}>+</button>
      <span className="counter">Counter {counter}</span>
      <button className="minus" onClick={sub}>-</button>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  add: state => dispatch(add(state)),
  sub: state => dispatch(sub(state))
});

const mapStateToProps = state => ({
  counter: state.counterReducer.counter
});

export default connect(mapStateToProps, mapDispatchToProps)(CounterPage);