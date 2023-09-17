import { BsBasket } from 'react-icons/bs';
import React from 'react';
import styles from './checkout-button.module.css';

interface CheckoutButtonProps {
  totalPrice: number;
  cartItemsNumber: number;
  onClick: () => void;
}

export const CheckoutButton: React.FC<CheckoutButtonProps> = ({
  totalPrice,
  cartItemsNumber,
  onClick,
}: CheckoutButtonProps) => {
  return (
    <div className={styles.checkoutBtnWrapper} onClick={onClick}>
      <div className={styles.cartIconWrapper}>
        <BsBasket size={25} />
        <span className={styles.orderNumbers}>{cartItemsNumber}</span>
      </div>
      <div>Til betaling</div>
      <div>{totalPrice} kr</div>
    </div>
  );
};
