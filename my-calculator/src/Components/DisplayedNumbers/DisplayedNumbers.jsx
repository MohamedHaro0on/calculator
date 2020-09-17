import React from "react";

import ClassNames from "./DispledNumber.module.scss";

function Display({value}) {
    console.log("The Value Passed" , value) ;
    return ( 
        <div className={ClassNames.DisplayedNumbers}>
            <div>{value}</div>
        </div>
    );
}

export default Display ; 