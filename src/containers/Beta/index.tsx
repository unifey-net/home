import React from "react"
import BetaInfo from "./BetaInfo"
import BetaSignup from "./BetaSignup"

export default () => {
    return <div className="flex flex-col items-center">
        <BetaInfo/>
        <BetaSignup/>
    </div>
}