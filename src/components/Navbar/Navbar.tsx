import { Button, InputWithButton } from "@/components";

const Navbar = () => {
  return (
    <nav className="sticky top-0 w-full bg-gray-900">
      <div className="p-3 grid grid-cols-[10%_80%_10%]">
        <div className="p-2 flex align-center justify-center text-5xl text-amber-50">
          Logo
        </div>
        <div className="p-2 flex justify-center">
          <InputWithButton text="Search" />
        </div>
        <div className="flex justify-around p-2 gap-3 items-center">
          <div>
            <Button text="Login" css="bg-yellow-500" />
          </div>
          <div>
            <Button text="Sign Up" css="bg-yellow-500" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
