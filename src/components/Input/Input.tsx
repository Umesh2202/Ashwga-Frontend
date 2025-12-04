import { Input } from "@/components/ui/input";

interface InputFieldProps {
  id?: string;
  background?: string;
  type: string;
  placeholder?: string;
  value?: string | number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  background = "white",
  type,
  placeholder,
  value,
  onChange,
  disabled = false,
}) => {
  return (
    <Input
      className={`rounded-none bg-${background} h-10`}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
    />
  );
};

export default InputField;
