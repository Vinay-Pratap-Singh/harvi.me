import React from "react";

const Navbar = () => {
  return (
    <nav className="sticky top-0 flex items-center justify-between mx-[5%] text-white font-mono h-[15vh]">
      {/* creating the name logo */}
      <div
        className="h-[55px] w-[45px] bg-[#64ffda] flex items-center justify-center"
        style={{
          clipPath:
            "polygon(50% 0, 0 30%, 0 70%, 50% 100%, 100% 70%, 100% 30%)",
        }}
      >
        <div
          className="h-[50px] w-[42px] flex items-center justify-center text-2xl"
          style={{
            clipPath:
              "polygon(50% 0, 0 30%, 0 70%, 50% 100%, 100% 70%, 100% 30%)",
          }}
        >
          <a className="font-bold" href="#homepage">
            V
          </a>
        </div>
      </div>

      {/* creating the navigation menu */}
      <ul className="flex space-x-8 text-gray-200">
        <li>
          <a href="#homepage" className="hover:text-[#64ffda] transition-all ease-in-out">
            <span className="text-[#64ffda] mr-1 text-sm">01.</span> Home
          </a>
        </li>

        <li>
          <a href="#education" className="hover:text-[#64ffda] transition-all ease-in-out">
            <span className="text-[#64ffda] mr-1 text-sm">02.</span> Education
          </a>
        </li>

        <li>
          <a href="#skills" className="hover:text-[#64ffda] transition-all ease-in-out">
            <span className="text-[#64ffda] mr-1 text-sm">03.</span> Skills
          </a>
        </li>

        <li>
          <a href="#projects" className="hover:text-[#64ffda] transition-all ease-in-out">
            <span className="text-[#64ffda] mr-1 text-sm">04.</span> Projects
          </a>
        </li>

        <li>
          <a href="#contact" className="hover:text-[#64ffda] transition-all ease-in-out">
            <span className="text-[#64ffda] mr-1 text-sm">05.</span> Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
