import React from 'react';
import ReactDOM from 'react-dom';
import {Provider, connect} from 'react-redux';
import { createStore } from 'redux';

const minus = dispatch => (dispatch({type: 'minus'}))
const plus = dispatch => (dispatch({type: 'plus'}))

const CountApp = ({vala = 0, plus, minus}) => {
  return (
    <div>
      <button onClick={minus}> - </button>
      <span>{vala}</span>
      <button onClick={plus}> + </button>
    </div>
  )
}

const CountReducer = (state = {vala: 0}, action) => {
  switch (action.type) {
    case 'plus': return { vala: ++state.vala }
    case 'minus': return { vala: --state.vala }
    default: return state;
  }
}

const stateMapper = (state) => ({vala: state.vala})
const dispatchMapper = dispatch => ({
  plus: () => plus(dispatch),
  minus: () => minus(dispatch)
})

const Countainer = connect(stateMapper, dispatchMapper)(CountApp);
const countStore = createStore(CountReducer);

ReactDOM.render(
  <Provider store={countStore}>
    <Countainer/>
  </Provider>,
  document.getElementById('root'));
