import React from "react";
import './meny-card.css'
import {PrimaryButton} from "./PrimaryButton";

interface MenyCardProps {
    title: string
    allergier: string,
    img: string
}

export const MenyCard: React.FC<MenyCardProps> = ({title, allergier, img}: MenyCardProps) => {
    return (
        <div className="meny-card">
            <div className="card-img-wrapper">
                <img className="card-img" src={img} alt="shawarma rull img"/>
            </div>
            <div className="card-info-wrapper">
                <div className='card-info'>
                    <h3>{title}</h3>
                    <p>{allergier}</p>
                </div>

                <PrimaryButton/>
            </div>
        </div>
    )
}