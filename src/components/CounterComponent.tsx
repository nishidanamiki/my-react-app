import React from "react";
import useCounter from "../hooks/useCounter";

function CounterComponent() {
  // カスタムフックを呼び出し、必要な値と関数を取り出す
  const { count, increment, decrement, reset } = useCounter(10); // 初期値を10に設定

  return (
    <div>
      <h2>Counter</h2>
      <p>Current Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default CounterComponent;
