import { Input } from "@/components/ui/input";

interface InputFieldProps {
  id?: string;
  background?: string;
  type: string;
  placeholder?: string;
  value?: string | number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({
  background = "white",
  type,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <Input
      className={`rounded-none bg-${background} h-10`}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default InputField;
