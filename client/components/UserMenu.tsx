"use client";

import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const UserMenu = () => {
  const [on, setOn] = useState(false);

  const router = useRouter();

  return (
    <div className="flex items-center gap-4">
      {on ? (
        <>
          <div
            className="text-sm text-white flex gap-1 hover:underline cursor-pointer"
            onClick={() => {
              setOn(false);
            }}
          >
            agayretli
            <Image
              src={"/chevron-down.svg"}
              width={10}
              height={10}
              alt="down-arrow"
            />
          </div>
          <div className="flex">
            <Image
              src={"/annotation.svg"}
              alt="messages"
              width={30}
              height={30}
            />
            <Image src={"/bell.svg"} alt="notfy" width={30} height={30} />
            <Image src={"/star.svg"} alt="star" width={30} height={30} />
            <Image
              src={"/search-found.svg"}
              alt="search-star"
              width={30}
              height={30}
            />
          </div>
        </>
      ) : (
        <div className="flex text-white text-xs gap-2">
          <div
            className="hover:underline cursor-pointer"
            onClick={() => {
              router.push("/login");
            }}
          >
            Giriş Yap
          </div>
          <div
            onClick={() => {
              setOn(true);
            }}
          >
            |
          </div>
          <div
            className="hover:underline cursor-pointer"
            onClick={() => {
              router.push("/register");
            }}
          >
            Kayıt Ol
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
