import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  // =====================HOOKS==================

  // =====================FUNCTIONS==============

  // =====================JSX====================
  return (
    <header className="flex h-14 items-center justify-between bg-slate-950 px-4 text-white lg:h-20">
      <div className="flex items-center gap-4 lg:gap-8">
        <Link to="/">
          <img src="/netflix.png" alt="" className="w-16 sm:w-24" />
        </Link>
        <button className="cursor-pointer lg:text-xl">Phim</button>
        <button href="#" className="cursor-pointer lg:text-xl">
          Truyền hình
        </button>
      </div>
      <div>
        <Link to ="/search"><FontAwesomeIcon icon={faMagnifyingGlass} className="cursor-pointer" /></Link>
      </div>
    </header>
  );
};

export default Header;
