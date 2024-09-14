"use client"
import React, { useContext, createContext, useState, useEffect} from "react";

interface CoinExchangeContext {

}

export const ExchangeContext = createContext<CoinExchangeContext | undefined>(undefined);

export const ExchangeProvider = ({children}: { children: React.ReactNode}) => {
    
}