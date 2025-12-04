import { Button, Input, Spinner } from "@/components";
import { useAddUserMutation } from "@/services/queries/user.query";
import useUserStore from "@/store/useUserStore";
import { useState } from "react";
import { useNavigate } from "react-router";

type SetterFunction = React.Dispatch<React.SetStateAction<string | number>>;

const Login = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const inputBackground = "neutral-100";
  const fieldTextSize = "xl";

  const { mutateAsync: addUser, isPending } = useAddUserMutation();

  const handleOnChange = (setter: SetterFunction, value: string | number) => {
    setter(value);
  };

  const handleOnSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await addUser({ firstName, lastName, email, password });
      useUserStore
        .getState()
        .setUserDetails({ firstName, lastName, email, password });
      navigate("/");
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  const inputFields = [
    {
      id: "firstName",
      label: "First Name",
      type: "text",
      value: firstName,
      setter: setFirstName,
    },
    {
      id: "lastName",
      label: "Last Name",
      type: "text",
      value: lastName,
      setter: setLastName,
    },
    {
      id: "email",
      label: "Email",
      type: "email",
      value: email,
      setter: setEmail,
    },
    {
      id: "password",
      label: "Password",
      type: "password",
      value: password,
      setter: setPassword,
    },
  ];

  return (
    <div className="flex flex-col items-center pt-10 pb-10">
      <span className="text-5xl font-semibold">
        Please Add Required Details of User
      </span>
      <form className="w-1/2" onSubmit={handleOnSubmit}>
        <div className="flex flex-col gap-6 mt-8">
          {inputFields.map((field) => (
            <div key={field.id}>
              <div className={`text-${fieldTextSize}`}>{field.label}</div>
              <div>
                <Input
                  type={field.type}
                  placeholder={field.label}
                  background={inputBackground}
                  value={field.value}
                  disabled={isPending}
                  onChange={(e) =>
                    handleOnChange(
                      field.setter as SetterFunction,
                      e.target.value
                    )
                  }
                />
              </div>
            </div>
          ))}
          <div>
            <Button
              type="submit"
              text={
                isPending ? (
                  <div className="flex items-center gap-2 w-12 justify-center">
                    <Spinner />
                  </div>
                ) : (
                  "Login"
                )
              }
              css="bg-yellow-500"
              fontSize="text-xl"
              disabled={isPending}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
