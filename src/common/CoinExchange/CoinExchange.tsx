import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Selection from "@/common/Selection/Selection";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface Props {
  label: string;
  inputName: string;
  inputValue: any;
  setInputValue: React.Dispatch<React.SetStateAction<any>>;
  placeholder: string;
  selectValue: any;
  setSelectValue: React.Dispatch<React.SetStateAction<any>>;
  dropList: any;
  imageIcon: any;
  balance: any;
  type: "sell" | "receive";
}

const CoinExchange: React.FC<Props> = (props) => {
  const {
    label,
    inputName,
    inputValue,
    setInputValue,
    placeholder,
    selectValue,
    setSelectValue,
    dropList,
    imageIcon,
    balance,
    type,
  } = props;
  return (
    <div className="mb-4 bg-accent/50 p-4 rounded-xl">
      <Label className="text-sm text-gray-500" htmlFor={inputName}>
        {label}
      </Label>
      <div className="flex items-center mt-1">
        <Input
          name={inputName}
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="w-full text-3xl font-bold bg-transparent outline-none border-0 focus:outline-none"
          placeholder={placeholder}
        />
        <div className="rounded-xl flex items-center pl-4 bg-accent w-32">
          <Selection
            selected={selectValue}
            setSelected={setSelectValue}
            className="bg-transparent text-lg border-0 outline-none focus:outline-none"
            dropList={dropList}
            type="name"
            icon={
              <Image
                src={imageIcon}
                className="w-6 h-6"
                alt="icon"
                width={40}
                height={40}
              />
            }
          />
        </div>
      </div>
      <div className="text-right text-sm text-gray-500 mt-1">
        Balance: {balance}
        {type === "sell" ? (
          <Button className="text-purple-600 font-medium bg-transparent hover:bg-transparent pr-0">
            Use MAX
          </Button>
        ) : undefined}
      </div>
    </div>
  );
};

export default CoinExchange;
