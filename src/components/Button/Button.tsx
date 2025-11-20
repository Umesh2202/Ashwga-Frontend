import { Button } from "@/components/ui/button";
import React from "react"; // Import React if not already implicitly available

interface MyButtonProps {
  fontSize: string;
  css: string;
  text: string;
  onButtonClick: () => void; // Added for completeness, as it's in the interface
}

const MyButton: React.FC<MyButtonProps> = ({
  fontSize = "",
  css,
  text,
  onButtonClick, // Use this for the button's onClick handler
}) => {
  return (
    <div>
      <Button
        onClick={onButtonClick} // Execute the function passed from the parent
        className={`cursor-pointer rounded-none ${css} ${fontSize} p-5 text-black hover:underline flex flex-col items-center justify-center`}
      >
        {text}
      </Button>
    </div>
  );
};

export default MyButton;
