import { useDeleteOrderMutation } from "@/services/queries";
import { useProductStore } from "@/store";
import React from "react";

interface CounterProps {
  onButtonClick: () => void;
  productId: number;
}

const Counter: React.FC<CounterProps> = ({ onButtonClick, productId }) => {
  const { count, decrement } = useProductStore();

  const { mutateAsync: deleteOrder } = useDeleteOrderMutation();

  return (
    <div>
      <div className="grid grid-cols-3 gap-4 items-center justify-items-center border w-1/2">
        <div
          className="border-r p-2 w-full flex justify-center text-2xl cursor-pointer"
          onClick={() => {
            deleteOrder({ userId: 1, productId });
            decrement();
          }}
        >
          <i className="fa-solid fa-minus"></i>
        </div>

        <div className="font-bold text-2xl">{count}</div>

        <div
          className="border-l p-2 w-full flex justify-center text-2xl cursor-pointer"
          onClick={() => {
            onButtonClick();
          }}
        >
          <i className="fa-solid fa-plus"></i>
        </div>
      </div>
    </div>
  );
};

export default Counter;
