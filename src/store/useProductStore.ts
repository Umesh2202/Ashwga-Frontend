// useStore.ts
import { create } from 'zustand';

// 1. Define the State Interface (data structure)
interface CounterState {
  count: number;
}

// 2. Define the Actions Interface (functions)
// The actions will have access to the `set` function from Zustand
interface CounterActions {
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

// 3. Combine the State and Actions into one Store Interface
// This ensures the create function returns an object containing all these properties
type CounterStore = CounterState & CounterActions;

// Initial state object for easy resetting
const initialState: CounterState = {
  count: 0,
};

// 4. Create the Zustand Store
const useProductStore = create<CounterStore>((set) => ({
  // --- Initial State ---
  ...initialState, // Spread the initial state

  // --- Actions ---

  // Action to increment the count
  // TypeScript correctly infers 'state' as CounterState
  increment: () => set((state) => ({ count: state.count + 1 })),

  // Action to decrement the count
  decrement: () => set((state) => ({ count: state.count - 1 })),

  // Action to reset the entire state using the initial state object
  reset: () => set(initialState),
}));

export default useProductStore;