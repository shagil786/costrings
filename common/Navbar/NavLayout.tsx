"use client";
import React, { useState } from "react";
import { pathsToHide } from "../../hooks/NavPaths";
import Navbar from "./Navbar";
import { useNavigationVisibility } from "@/hooks/NavCheck";
import { navs as headerList, navCols, walletsType, walletsQuantity, coinsType, cryptoShortForms } from "@/public/data";

const NavLayout = ({ children }: { children: React.ReactNode }) => {
  const { isVisible, pathname: params } = useNavigationVisibility(pathsToHide);
  const [coinSelected, setCoinSelected] = useState<any>(0);
  const [walletSelected, setWalletSelected] = useState<any>(0);
  if (isVisible) {
    return (
      <main className="w-full h-full flex flex-col gap-8 row-start-2 items-center sm:items-start">
        {children}
      </main>
    );
  }

  return (
    <>
      <Navbar
        headerList={headerList}
        params={params}
        dropList={navCols}
        walletsType={walletsType}
        walletSelected={walletSelected}
        setWalletSelected={setWalletSelected}
        walletsQuantity={walletsQuantity}
        coinsType={coinsType}
        cryptoShortForms={cryptoShortForms}
        coinSelected={coinSelected}
        setCoinSelected={setCoinSelected}
      />
      <main className="w-full h-full flex flex-col gap-8 row-start-2 items-center sm:items-start pt-20">
        {children}
      </main>
    </>
  );
};

export default NavLayout;
