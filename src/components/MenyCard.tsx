import React from 'react';
import './meny-card.css';
import { PrimaryButton } from './PrimaryButton';

interface MenyCardProps {
  title: string;
  allergier: string;
  img: string;
  price: string;
  content: string;
}

export const MenyCard: React.FC<MenyCardProps> = ({
  title,
  allergier,
  img,
  price,
  content,
}: MenyCardProps) => {
  return (
    <div className="meny-card">
      <div className="card-img-wrapper">
        <img className="mcard-img" src={img} alt="shawarma rull img" />
      </div>
      <div className="card-info-wrapper">
        <div className="card-info">
          <h5>{title}</h5>
          <p>Innhold: {content}</p>
          <p>{allergier}</p>
          <p>{price}</p>
        </div>
      </div>
      <PrimaryButton />
    </div>
  );
};
