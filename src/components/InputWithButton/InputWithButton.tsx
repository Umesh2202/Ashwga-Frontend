import { Button, Input } from "@/components";

interface InputWithButtonProps {
  text: string;
}

const InputWithButton: React.FC<InputWithButtonProps> = (props) => {
  return (
    <div className="flex w-full max-w-dvh items-center gap-2">
      <Input type="search" placeholder="Search" />
      <Button text={props.text} css="bg-yellow-500" />
    </div>
  );
};

export default InputWithButton;
