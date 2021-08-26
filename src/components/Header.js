import { useState } from "react";
import { XIcon, MenuIcon } from "@heroicons/react/outline";

export default function Header() {
  const [dropdown, setDropdown] = useState(false);

  const handleDropdown = (e) => {
    e.preventDefault();

    setDropdown(!dropdown);
  };

  return (
    <header className="flex items-center justify-between px-5 py-3 shadow-sm bg-white z-50">
      {/* Left */}
      <div className="flex-grow">
        <div className="flex items-center justify-between ">
          <h1 className="text-gray-900 font-bold text-xl cursor-pointer">
            Fsholehan.
          </h1>
          <div onClick={handleDropdown}>
            {!dropdown ? (
              <MenuIcon className="h-6 w-6 inline-flex md:hidden" />
            ) : (
              <XIcon className="h-6 w-6 inline-flex md:hidden" />
            )}
          </div>
        </div>
        <div
          className={`md:hidden mt-4 ${
            dropdown ? "block" : "hidden"
          }  transition duration-200 ease-in-out`}
        >
          <ul className="space-y-4">
            <li>Home</li>
            <li>About</li>
            <li>Project</li>
          </ul>
        </div>
      </div>
      {/* Right */}
      <div className="flex items-center space-x-8">
        <h3 className="link">Home</h3>
        <h3 className="link">About</h3>
        <h3 className="link">Project</h3>
      </div>
    </header>
  );
}
