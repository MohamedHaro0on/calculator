import React from 'react'
import ClassNames from "./Button.module.scss";
function Button({orange , wide , name , clickHandler}) {
    const AppliedClasses = [ClassNames.Button] ;
    if (orange){
        AppliedClasses.push(ClassNames.Orange) ;
    }
    else{
        AppliedClasses.push(ClassNames.Normal)
    }
    if (wide){
        AppliedClasses.push(ClassNames.Wide) ;
    }
    else{
        AppliedClasses.push(ClassNames.Normal)
    }
    return (
    <button className = {AppliedClasses.join(' ').trim()} onClick = {()=>clickHandler(name)}> {name}</button>
    )
}

export default Button ;