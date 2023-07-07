<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
import styles from './primary-button.module.css';

interface PrimaryButtonProps {
  text: string;
  onClick: (e: any) => void;
  color: 'primary' | 'secondary';
}
export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  text,
  onClick,
  color,
}) => {
  return (
    <div className={styles.btnWrapper}>
      <button
        className={`${styles.btn} ${styles[color]}`}
        onClick={(e) => onClick(e)}
      >
        {text}
      </button>
    </div>
  );
};
=======
import React from "react";
import './primary-button.css'

export const PrimaryButton : React.FC = ()=>{
    return (
        <div className="primary-btn-wrapper">
            <button className="primary-btn">Legg til</button>
        </div>
    )
}
>>>>>>> 5eab785 (fix: Added responsive meny style (#1))
=======
import React from 'react';
import './primary-button.css';

export const PrimaryButton: React.FC = () => {
  return (
    <div className="primary-btn-wrapper">
      <button className="primary-btn">Legg til</button>
    </div>
  );
};
>>>>>>> 3f8d105 (fix: Added prettier)
