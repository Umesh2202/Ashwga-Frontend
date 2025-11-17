import { Input } from "@/components/ui/input";
import { Button } from "@/components";

const InputWithButton = (props) => {
  return (
    <div className="flex w-full max-w-dvh items-center gap-2">
      <Input
        className="rounded-none bg-amber-50"
        type="email"
        placeholder="Search"
      />
      <Button text={props.text} />
    </div>
  );
};

export default InputWithButton;
