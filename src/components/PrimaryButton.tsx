import React from 'react';
import './primary-button.css';
interface PrimaryButtonProps {
  onClick: (e: any) => void;
}
export const PrimaryButton: React.FC<PrimaryButtonProps> = ({ onClick }) => {
  return (
    <div className="primary-btn-wrapper">
      <button className="primary-btn" onClick={(e) => onClick(e)}>
        Legg til
      </button>
    </div>
  );
};
