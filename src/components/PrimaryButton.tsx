import React from "react";
import './primary-button.css'

export const PrimaryButton : React.FC = ()=>{
    return (
        <div className="primary-btn-wrapper">
            <button className="primary-btn">Legg til</button>
        </div>
    )
}