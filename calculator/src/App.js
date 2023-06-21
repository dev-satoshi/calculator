import React from "react";
import Button from "./components/Button";
import Result from "./components/Result";
import "./App.scss";

const App = () => {
  return (
    <>
      <div className="result">
        <Result result={"計算結果"} />
      </div>

      <div className="button-wrapper">
        <div className="left-column">
          <div className="top">
            <Button text={"AC"} />
            <Button text={"+/-"} />
            <Button text={"%"} />
          </div>
          <div className="upper">
            <Button text={"7"} />
            <Button text={"8"} />
            <Button text={"9"} />
          </div>
          <div className="middle">
            <Button text={"4"} />
            <Button text={"5"} />
            <Button text={"6"} />
          </div>
          <div className="lower">
            <Button text={"1"} />
            <Button text={"2"} />
            <Button text={"3"} />
          </div>
          <div className="bottom">
            <Button text={"0"} />
            <Button text={"."} />
          </div>
        </div>

        <div className="right-column">
          <div className="operator">
            <Button text={"÷"} />
            <Button text={"×"} />
            <Button text={"-"} />
            <Button text={"+"} />
            <Button text={"="} />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
