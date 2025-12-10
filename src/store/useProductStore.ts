import { create } from 'zustand';

interface CounterState {
  count: number;
}

interface CounterActions {
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

type CounterStore = CounterState & CounterActions;

const initialState: CounterState = {
  count: 0,
};

const useProductStore = create<CounterStore>((set) => ({
  ...initialState,

  increment: () => set((state) => ({ count: state.count + 1 })),

  decrement: () => set((state) => ({ count: state.count - 1 })),

  reset: () => set(initialState),
}));

export default useProductStore;