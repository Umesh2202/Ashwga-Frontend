// const Button = (props) => {
//   const buttonElement = <button>{props.text}</button>;
//   return buttonElement;
// };

// export default Button;

import { Button } from "@/components/ui/button";

const MyButton = (props) => {
  return (
    <div className={`flex flex-col items-center justify-center`}>
      <Button
        className={`rounded-none bg-yellow-500 p-5 
  transition-colors 
  duration-100 
  ease-in-out 
  hover:bg-amber-600`}
      >
        {props.text}
      </Button>
    </div>
  );
};

export default MyButton;
