import React from "react";
import Image from "next/image";
import actionIcon from "@/public/images/actions.svg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Selection from "@/common/Selection/Selection";
import { coinsType, cryptoShortForms } from "@/public/data";
import CoinExchange from "@/src/common/CoinExchange/CoinExchange";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightArrowLeft } from "@fortawesome/free-solid-svg-icons";

interface Props {
  sellAmount: any;
  setSellAmount: any;
  sellToken: any;
  setSellToken: any;
  receiveAmount: any;
  setReceiveAmount: any;
  receiveToken: any;
  setReceiveToken: any;
}

const SwapSection: React.FC<Props> = (props) => {
  const {
    sellAmount,
    setSellAmount,
    sellToken,
    setSellToken,
    receiveAmount,
    setReceiveAmount,
    receiveToken,
    setReceiveToken,
  } = props;
  return (
    <div
      className="bg-cover bg-center h-full w-full flex justify-center items-center"
      style={{
        backgroundImage: "url(./images/artwork_light.svg)",
      }}
    >
      <div className="w-full max-w-xl p-6 bg-white rounded-2xl shadow-lg">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Swap</h2>
          <Button className="text-gray-400 hover:text-gray-600 bg-white hover:bg-white">
            <Image src={actionIcon} alt="action-icon" />
          </Button>
        </div>
        <CoinExchange
          label="YOU SELL"
          inputName="sellAmount"
          inputValue={sellAmount}
          setInputValue={setSellAmount}
          placeholder="0.0"
          selectValue={sellToken}
          setSelectValue={setSellToken}
          dropList={coinsType}
          imageIcon={
            cryptoShortForms?.[sellToken as keyof typeof cryptoShortForms]?.icon
          }
          balance="7.27"
          type="sell"
        />
        <Button className="absolute -mt-8 py-1 rounded-xl left-1/2 -translate-x-1/2 rotate-90 bg-white hover:bg-white text-inherit border border-[#ECECED]">
          <FontAwesomeIcon
            icon={faArrowRightArrowLeft}
          />
        </Button>
        <CoinExchange
          label="YOU RECEIVE"
          inputName="receiveAmount"
          inputValue={receiveAmount}
          setInputValue={setReceiveAmount}
          placeholder="0.0"
          selectValue={receiveToken}
          setSelectValue={setReceiveToken}
          dropList={coinsType}
          imageIcon={
            cryptoShortForms?.[receiveToken as keyof typeof cryptoShortForms]
              ?.icon
          }
          balance="1500"
          type="receive"
        />

        <button className="w-full bg-blue-550 text-white py-3 rounded-xl font-semibold hover:bg-purple-600 transition duration-300">
          Enter amount to Swap
        </button>
      </div>
    </div>
  );
};

export default SwapSection;
