import React from "react";
import MenuItem from "@/components/MenuItem";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
      <div className="flex gap-4">
        <MenuItem title="home" address="/" Icon={AiFillHome} />
        <MenuItem title="about" address="/about" Icon={BsFillInfoCircleFill} />
      </div>
      <Link href='/' className="flex gap-3 items-center">
        <span className="text-2xl font-bold bg-amber-500 py-1 px-2 rounded-lg">
          IMDP
        </span>
        <span className="hidden sm:inline text-xl">Clone</span>
      </Link>
    </div>
  );
};

export default Header;
