import Link from "next/link";
import React from "react";

const MenuItem = ({ title, address, Icon }) => {
  return (
    <div>
      <Link href={address} className="hover:text-amber-500">
        <Icon className='sm:hidden text-2xl'/>
        <p className="uppercase hidden sm:inline">{title}</p>
      </Link>
    </div>
  );
};

export default MenuItem;
