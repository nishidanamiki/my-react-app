import { useEffect, useState } from "react";

function Timer() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    console.log("タイマー開始");

    const intervalId = setInterval(() => {
      console.log("チクタク");
      setTime((prevTime) => prevTime + 1);
    }, 1000);

    return () => {
      console.log("タイマー停止");
      clearInterval(intervalId);
    };
  }, []);

  return <p>time: {time}</p>;
}

function EffectPractice() {
  const [count, setCount] = useState(0);
  const [showTimer, setShowTimer] = useState(true);

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
      <h2>useEffectの基本練習</h2>

      <p>count: {count}</p>
      <button onClick={() => setCount(count + 1)}>増やす</button>

      <hr />

      <h2>クリーンアップ関数の練習</h2>

      <button onClick={() => setShowTimer(!showTimer)}>
        タイマー表示/非表示
      </button>

      {showTimer && <Timer />}
    </div>
  );
}

export default EffectPractice;
