import { Input } from "@/components/ui/input";
import { Button } from "@/components";

const InputWithButton = (props) => {
  return (
    <div className="flex w-full max-w-dvh items-center gap-2">
      <Input
        className="rounded-none bg-white"
        type="email"
        placeholder="Search"
      />
      <Button text={props.text} css="bg-yellow-500" />
    </div>
  );
};

export default InputWithButton;
