import { useProductStore } from "@/store";
import React from "react";

interface CounterProps {
  initialCount?: number;
}

const Counter: React.FC<CounterProps> = () => {
  const { count, increment, decrement } = useProductStore();

  return (
    <div>
      <div className="grid grid-cols-3 gap-4 items-center justify-items-center border w-1/2">
        <div
          onClick={decrement}
          className="border-r p-2 w-full flex justify-center text-2xl cursor-pointer"
        >
          <i className="fa-solid fa-minus"></i>
        </div>

        <div className="font-bold text-2xl">{count}</div>

        <div
          onClick={increment}
          className="border-l p-2 w-full flex justify-center text-2xl cursor-pointer"
        >
          <i className="fa-solid fa-plus"></i>
        </div>
      </div>
    </div>
  );
};

export default Counter;
