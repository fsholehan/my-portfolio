import { useEffect, useState } from "react";
import { XIcon, MenuIcon } from "@heroicons/react/outline";
import { SunIcon, MoonIcon } from "@heroicons/react/solid";

export default function Header() {
  const [dropdown, setDropdown] = useState(false);

  const handleDropdown = (e) => {
    e.preventDefault();

    setDropdown(!dropdown);
  };

  const selectTheme = (value) => {
    localStorage.setItem("theme", value);

    const html = document.querySelector("html");
    html.classList.add(localStorage.getItem("theme"));
    if (value === "dark") {
      html.classList.remove("light");
    } else {
      html.classList.remove("dark");
    }
  };

  useEffect(() => {
    document.querySelector("html").classList.add(localStorage.getItem("theme"));
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.removeItem("theme");
  }, []);

  return (
    <header className="flex items-center justify-between px-5 py-3 shadow-sm bg-white dark:bg-gray-800 z-50">
      {/* Left */}
      <div className="flex-grow">
        <div className="flex items-center justify-between ">
          <h1 className="text-gray-900 dark:text-white font-bold text-xl cursor-pointer">
            Fsholehan.
          </h1>
          <div className="flex items-center">
            <div className="flex items-center sm:hidden">
              <button onClick={() => selectTheme("light")}>
                <SunIcon className="h-5 text-white dark:text-yellow-300" />
              </button>

              <button onClick={() => selectTheme("dark")}>
                <MoonIcon className="h-5 text-yellow-300 dark:text-gray-800" />
              </button>
            </div>
            <div onClick={handleDropdown}>
              {!dropdown ? (
                <MenuIcon className="h-6 w-6 inline-flex md:hidden dark:text-white" />
              ) : (
                <XIcon className="h-6 w-6 inline-flex md:hidden dark:text-white" />
              )}
            </div>
          </div>
        </div>
        <div
          className={`md:hidden mt-4 ${
            dropdown ? "block" : "hidden"
          }  transition duration-200 ease-in-out`}
        >
          <ul className="space-y-4">
            <li className="dark:text-gray-50">Home</li>
            <li className="dark:text-gray-50">About</li>
            <li className="dark:text-gray-50">Project</li>
          </ul>
        </div>
      </div>
      {/* Right */}
      <div className="hidden md:flex mr-5 items-center">
        <button onClick={() => selectTheme("light")}>
          <SunIcon className="h-5 text-white dark:text-yellow-300" />
        </button>

        <button onClick={() => selectTheme("dark")}>
          <MoonIcon className="h-5 text-yellow-300 dark:text-gray-800" />
        </button>
      </div>
      <div className="flex items-center space-x-8">
        <h3 className="link">Home</h3>
        <h3 className="link">About</h3>
        <h3 className="link">Project</h3>
      </div>
    </header>
  );
}
