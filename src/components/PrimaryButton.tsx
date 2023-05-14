import React from "react";
import './primary-button.css'

interface PrimaryButtonProps{

}

export const PrimaryButton : React.FC<PrimaryButtonProps> = ({}:PrimaryButtonProps)=>{
    return (
            <button className="btn">Legg til</button>
    )
}