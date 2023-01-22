import React from "react";

const SocialMedia = () => {
  return (
    <ul className="text-gray-100 fixed left-[6%] top-[35%] text-2xl space-y-4">
      <li className="hover:text-[#64ffda]">
        <a
          href="https://github.com/Vinay-Pratap-Singh"
          className="tooltip tooltip-right tooltip-accent"
          data-tip="Github"
        >
          <i class="fa-brands fa-github"></i>
        </a>
      </li>

      <li className="hover:text-[#64ffda]">
        <a
          href="https://www.linkedin.com/in/vinay-pratap-singh-4b265a212/"
          className="tooltip tooltip-right tooltip-accent"
          data-tip="Linkedin"
        >
          <i class="fa-brands fa-linkedin-in"></i>
        </a>
      </li>

      <li className="hover:text-[#64ffda]">
        <a
          href="https://leetcode.com/itsharvihere/"
          className="tooltip tooltip-right tooltip-accent"
          data-tip="Leetcode"
        >
          <i class="fa-solid fa-code"></i>
        </a>
      </li>

      <li className="hover:text-[#64ffda]">
        <a
          href="https://www.instagram.com/itsmevinayhere/"
          className="tooltip tooltip-right tooltip-accent"
          data-tip="Instagram"
        >
          <i class="fa-brands fa-instagram"></i>
        </a>
      </li>

      <li className="hover:text-[#64ffda]">
        <a
          href="https://twitter.com/harvi2001"
          className="tooltip tooltip-right tooltip-accent"
          data-tip="Twitter"
        >
          <i class="fa-brands fa-twitter"></i>
        </a>
      </li>
    </ul>
  );
};

export default SocialMedia;
