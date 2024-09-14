import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import maskIcon from "@/public/images/left_lead.svg";
import profileIcon from "@/public/images/left_lead_color.svg";

import Link from "next/link";
import { NavigationMenuSub } from "@radix-ui/react-navigation-menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import Selection from "../Selection/Selection";
import Image from "next/image";
import analyticsIcon from '@/public/images/input_cell.svg'
import { Button } from "@/components/ui/button";

interface Props {
  headerList: Array<any>;
  params: any;
  dropList: Array<any>;
  walletsType: Array<any>;
  walletSelected: any;
  setWalletSelected: React.Dispatch<React.SetStateAction<any>>;
  walletsQuantity?: any;
  coinsType: any;
  cryptoShortForms: any;
  coinSelected: any;
  setCoinSelected: React.Dispatch<React.SetStateAction<any>>;
}

export default function NavbarLab(props: Props) {
  const {
    headerList,
    params,
    dropList,
    walletsType,
    walletSelected,
    setWalletSelected,
    walletsQuantity,
    coinsType,
    cryptoShortForms,
    coinSelected,
    setCoinSelected,
  } = props;

  return (
    <NavigationMenu className="fixed w-full bg-white max-w-full p-4 flex justify-between text-black/70 text-sm">
      <NavigationMenuList>
        <NavigationMenuItem>
          {headerList?.map((each: any, index: number) => (
            <Link
              href={each?.href}
              legacyBehavior
              passHref
              key={`${each?.name}_${index}`}
            >
              <NavigationMenuLink
                active={params?.endsWith(each?.href)}
                className={`${navigationMenuTriggerStyle()} rounded data-[active]:bg-accent hover:bg-accent/50 data-[active]:font-bold data-[active]:text-black`}
              >
                {each?.name}
              </NavigationMenuLink>
            </Link>
          ))}
        </NavigationMenuItem>
      </NavigationMenuList>
      <NavigationMenuSub className="flex gap-2">
        <Button className="flex items-center bg-accent rounded-xl px-4 relative cursor-pointer hover:bg-accent">
          <Image src={analyticsIcon} alt="increase-icon"/>
          <div className="w-[6px] h-[6px] bg-green-500 rounded-full absolute left-2/3 -translate-x-1/2 top-1/3"/>
        </Button>
        <div className="flex gap-2 items-center bg-accent rounded-xl pl-4 text-inherit hover:bg-accent">
          <Image
            src={cryptoShortForms?.[coinSelected]?.icon}
            alt="mask-icon"
            className="w-6 h-6"
            width={40}
            height={40}
          />
          <Selection
            dropList={coinsType}
            className="w-fit outline-none border-0 py-1"
            type="name"
            selected={coinSelected}
            setSelected={setCoinSelected}
          />
        </div>
        <div className="flex items-center bg-accent rounded-full gap-3 text-inherit hover:bg-accent px-1 pl-4">
          <Image src={maskIcon} alt="mask-icon" />
          <p>
            <span>{walletsQuantity?.[walletSelected]}</span>
            {cryptoShortForms?.[coinSelected]?.name}
          </p>
          <div className="bg-white rounded-full flex items-center pl-4 text-inherit hover:bg-white py-0 h-8">
            <Selection
              dropList={walletsType}
              className="w-fit outline-none border-0 py-1"
              type="key"
              selected={walletSelected}
              setSelected={setWalletSelected}
              icon={<Image src={profileIcon} alt="profile-icon" />}
              truncate
            />
          </div>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger className="rounded-lg bg-accent px-4">
            <FontAwesomeIcon icon={faGear} />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {dropList?.map((each, index) => (
              <DropdownMenuItem key={`${each?.name}_${index}`}>
                {each?.name}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </NavigationMenuSub>
    </NavigationMenu>
  );
}
