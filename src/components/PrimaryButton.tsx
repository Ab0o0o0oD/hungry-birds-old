import React from 'react';
import './primary-button.css';
interface PrimaryButtonProps {
  text: string;
  onClick: (e: any) => void;
}
export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  text,
  onClick,
}) => {
  return (
    <div className="primary-btn-wrapper">
      <button className="primary-btn" onClick={(e) => onClick(e)}>
        {text}
      </button>
    </div>
  );
};
