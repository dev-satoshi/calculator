import React from "react";
import { connect } from "react-redux";
import {
  onNumberClick,
  onPlusClick,
  onMinusClick,
  onMultiplyClick,
  onDivideClick,
  onEqualClick,
  onClearClick,
} from "./redux/actions";
import Button from "./components/Button";
import Result from "./components/Result";
import "./App.scss";

const App = (props) => {
  const {
    calculator,
    onNumberClick,
    onPlusClick,
    onMinusClick,
    onMultiplyClick,
    onDivideClick,
    onEqualClick,
    onClearClick,
  } = props;
  return (
    <>
      <div className="result">
        <Result
          result={
            calculator.showingResult
              ? calculator.resultValue
              : calculator.inputValue
          }
        />
      </div>

      <div className="button-wrapper">
        <div className="left-column">
          <div className="top">
            <Button text={"AC"} onClick={() => onClearClick()} />
            <Button text={"+/-"} />
            <Button text={"%"} />
          </div>
          <div className="upper">
            <Button text={"7"} onClick={() => onNumberClick(7)} />
            <Button text={"8"} onClick={() => onNumberClick(8)} />
            <Button text={"9"} onClick={() => onNumberClick(9)} />
          </div>
          <div className="middle">
            <Button text={"4"} onClick={() => onNumberClick(4)} />
            <Button text={"5"} onClick={() => onNumberClick(5)} />
            <Button text={"6"} onClick={() => onNumberClick(6)} />
          </div>
          <div className="lower">
            <Button text={"1"} onClick={() => onNumberClick(1)} />
            <Button text={"2"} onClick={() => onNumberClick(2)} />
            <Button text={"3"} onClick={() => onNumberClick(3)} />
          </div>
          <div className="bottom">
            <Button text={"0"} onClick={() => onNumberClick(0)} />
            <Button text={"."} />
          </div>
        </div>

        <div className="right-column">
          <div className="operator">
            <Button text={"÷"} onClick={() => onDivideClick()} />
            <Button text={"×"} onClick={() => onMultiplyClick()} />
            <Button text={"-"} onClick={() => onMinusClick()} />
            <Button text={"+"} onClick={() => onPlusClick()} />
            <Button text={"="} onClick={() => onEqualClick()} />
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    calculator: state.calculator,
  };
};

export default connect(mapStateToProps, {
  onNumberClick,
  onPlusClick,
  onMinusClick,
  onMultiplyClick,
  onDivideClick,
  onEqualClick,
  onClearClick,
})(App);
