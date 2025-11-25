import { Button } from "@/components/ui/button";
import React from "react";

interface MyButtonProps {
  fontSize?: string;
  css: string;
  text: string;
  onButtonClick?: () => void;
  type?: "button" | "submit" | "reset" | undefined;
}

const MyButton: React.FC<MyButtonProps> = ({
  fontSize = "",
  css,
  text,
  onButtonClick = undefined,
  type = undefined,
}) => {
  return (
    <div>
      <Button
        type={type}
        onClick={onButtonClick}
        className={`cursor-pointer rounded-none ${css} ${fontSize} p-5 text-black hover:underline flex flex-col items-center justify-center`}
      >
        {text}
      </Button>
    </div>
  );
};

export default MyButton;
