import Image from "next/image";
import Link from "next/link";
import React from "react";

function Header() {
  const myLoader = () => {
    return `https://links.papareact.com/yvf`;
  };
  return (
    <nav>
      <div className="flex p-10">
        <Link href="/">
          <Image
            loader={myLoader}
            src="https://links.papareact.com/yvf"
            alt=""
            width={176}
            height={0}
          />
        </Link>

        <div className="hidden items-center space-x-5 md:inline-flex">
          <h3 className="">About</h3>
          <h3 className="">Contact</h3>
          <h1 className="">Follow</h1>
        </div>
      </div>
    </nav>
  );
}

export default Header;
