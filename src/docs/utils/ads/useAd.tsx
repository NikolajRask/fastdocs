import React from "react";
import Shipfast from "./ads/Shipfast";

export default function useAd(type: string): React.ReactNode {
    if (type == 'card') {
        return (
            <Shipfast/>
        )
    }
    
    return <></>
}