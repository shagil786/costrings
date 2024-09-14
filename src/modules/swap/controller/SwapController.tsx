"use client";
import React, {useEffect, useState} from "react";

const SwapController = (props: any) => {
    const {children, ...rest} = props;
    const [loading, setLoading] = useState(true);
    const [sellAmount, setSellAmount] = useState();
    const [sellToken, setSellToken] = useState(0);
    const [receiveAmount, setReceiveAmount] = useState();
    const [receiveToken, setReceiveToken] = useState(1);

    const viewProps = {
        loading,
        sellAmount,
        setSellAmount,
        sellToken,
        setSellToken,
        receiveAmount,
        setReceiveAmount,
        receiveToken,
        setReceiveToken,
    }

    const childWithProps = React.Children.map(children, (child) => {
        if(React.isValidElement(child)) {
            return React.cloneElement(child, {...rest, ...viewProps});
        }

        return child;
    });

    return <>{childWithProps}</>
};

export { SwapController };
