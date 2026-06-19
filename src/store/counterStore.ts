import { create } from "zustand";

// ストアの型を定義
interface CounterState {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

// create関数でストアを作成
export const useCounterStore = create<CounterState>((set) => ({
  // ① 初期状態（State）
  count: 0,

  // ② 状態を更新する関数（Action）
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
}));
