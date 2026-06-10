import { useEffect, useState } from "react";

function EffectPractice() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("最初だけ実行");
  }, []);

  useEffect(() => {
    console.log("countが変わった:", count);
  }, [count]);

  useEffect(() => {
    document.title = `count: ${count}`;
  }, [count]);

  return (
    <div>
      <p>count: {count}</p>
      <button onClick={() => setCount(count + 1)}>増やす</button>
    </div>
  );
}

export default EffectPractice;
