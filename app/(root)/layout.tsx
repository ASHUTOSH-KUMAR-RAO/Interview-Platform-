import Image from "next/image";
import Link from "next/link";
import React, { ReactNode } from "react";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="root-layout">
      <nav>
      <Link href="/" className="flex items-center gap-2"> 
      <Image src="/logo.svg" alt="logo" height={30} width={38}/>
      <h1 className="text-primary-100 text-lg font-semibold">PrepWise</h1>
      </Link>
      </nav>
      {children}
    </div>
  );
};

export default RootLayout;
