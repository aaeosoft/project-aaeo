import Link from "next/link";
import React from "react";
import SearchBar from "./SearchBar";
import Image from "next/image";
import UserMenu from "./UserMenu";

const Navbar = () => {
  return (
    <div className="bg-slate-800 py-3 min-w-max">
      <div className="w-[1115px] flex items-center mx-auto">
        <Link href={"/"} className="w-[20%]">
          <Image
            className="rounded-md"
            src="/Logo.png"
            alt="logo"
            width={144}
            height={96}
          />
        </Link>
        <div className="w-[40%]">
          <SearchBar />
        </div>
        <div className="w-[40%] flex gap-3 items-center justify-end">
          <UserMenu />
          <button title="" className="button text-sm">
            <Link href={'create-ad'}>Ücretsiz İlan Ver</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
