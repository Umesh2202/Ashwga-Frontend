import { Button } from "@/components/ui/button";

const MyButton = (props) => {
  return (
    <div className={`flex flex-col items-center justify-center`}>
      <Button
        className={`cursor-pointer rounded-none ${props.css} p-5 text-black hover:underline`}
      >
        {props.text}
      </Button>
    </div>
  );
};

export default MyButton;
