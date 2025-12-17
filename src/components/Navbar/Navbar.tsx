import { Button, InputWithButton, showToast } from "@/components";
import useUserStore from "@/store/useUserStore";
import { useNavigate } from "react-router";

const Navbar = () => {
  const { email, reset } = useUserStore();

  const navigate = useNavigate();

  const handleLogout = () => {
    showToast("Logout Successfully", "success");
    reset();
  };

  return (
    <nav className="sticky top-0 w-full bg-gray-900 z-99">
      <div className="p-3 grid grid-cols-[10%_80%_10%]">
        <div
          className="p-2 flex align-center justify-center text-5xl text-amber-50 cursor-pointer"
          onClick={() => navigate("/")}
        >
          Logo
        </div>
        <div className="p-2 flex justify-center">
          <InputWithButton text="Search" />
        </div>
        {email ? (
          <div className="flex justify-around p-2 gap-3 items-center">
            <Button
              text="Logout"
              css="bg-yellow-500"
              onButtonClick={handleLogout}
            />
          </div>
        ) : (
          <div className="flex justify-around p-2 gap-3 items-center">
            <div>
              <Button
                text="Login"
                css="bg-yellow-500"
                onButtonClick={() => navigate("/login")}
              />
            </div>
            <div>
              <Button
                text="Sign Up"
                css="bg-yellow-500"
                onButtonClick={() => navigate("/signUp")}
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
