import React, { Component } from "react";

import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";
import { connect } from "react-redux";
import * as actionTypes from "../../store/actions";

import "./Counter.css";

class Counter extends Component {
  state = {
    counter: 0,
  };

  counterChangedHandler = (action, value) => {
    switch (action) {
      case "inc":
        this.setState((prevState) => {
          return { counter: prevState.counter + 1 };
        });
        break;
      case "dec":
        this.setState((prevState) => {
          return { counter: prevState.counter - 1 };
        });
        break;
      case "add":
        this.setState((prevState) => {
          return { counter: prevState.counter + value };
        });
        break;
      case "sub":
        this.setState((prevState) => {
          return { counter: prevState.counter - value };
        });
        break;
    }
  };

  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl label="Aumentar" clicked={this.props.onIncrementCounter} />
        <CounterControl label="Decrementar" clicked={this.props.onDecrementCounter} />
        <CounterControl label="Aumentar 5" clicked={this.props.onAddCounter} />
        <CounterControl label="Decrementar 5" clicked={this.props.onSustractCounter} />
        <hr />
        <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Resultados</button>
        <ul>
          {this.props.storeResults.map((result) => (
            <li className="resultClass" key={result.id} onClick={() => this.props.onDeleteResult(result.id)}>
              {result.value}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ctr: state.ctr.counter,
    storeResults: state.res.results,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementCounter: () => dispatch({ type: actionTypes.INCREMENT }),
    onDecrementCounter: () => dispatch({ type: actionTypes.DECREMENT }),
    onAddCounter: () => dispatch({ type: actionTypes.ADD, value: 5 }),
    onSustractCounter: () => dispatch({ type: actionTypes.SUBSTRACT, value: 5 }),
    onStoreResult: (result) => dispatch({ type: actionTypes.STORE_RESULT, result: result }),
    onDeleteResult: (id) => dispatch({ type: actionTypes.DELETE_RESULT, resultElId: id }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
