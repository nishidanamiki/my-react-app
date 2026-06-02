import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>現在のカウント: {count}</p>
      <button onClick={increment}>カウントアップ</button>
    </div>
  );
}
export default Counter;
