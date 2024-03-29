import React from 'react';
import styles from './cart-item.module.css';
import { PlusMinusButton } from './PlusMinusButton';
<<<<<<< HEAD
<<<<<<< HEAD
import { Product } from '../types';
import { PrimaryButton } from './PrimaryButton';
import { useItem } from '../state/ItemContext';

interface CartItemProps {
<<<<<<< HEAD
  title: string;
=======
import { CartItem, Product } from '../types';

interface CartItemProps {
  title: string;
  itemsCart: CartItem[];
  setItemsCart: (itemsCart: CartItem[]) => void;
>>>>>>> 8bb6725 (feat: Implemented Cart)
=======
import { Product } from '../types';
import { PrimaryButton } from './PrimaryButton';
import { useItem } from '../state/ItemContext';

interface CartItemProps {
  title: string;
>>>>>>> 9a9ad78 (feat: Added cart item context provider)
=======
>>>>>>> bda5181 (fix: Added checkout modal content (#16))
  product: Product;
}

export const CartItemComponent: React.FC<CartItemProps> = ({
<<<<<<< HEAD
  title,
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> bda5181 (fix: Added checkout modal content (#16))
  product,
}: CartItemProps) => {
  const { dispatch } = useItem();
  return (
    <div className={styles.cartItemWrapper}>
      <div className={styles.description}>
        <h1 className={styles.title}>{product.title}</h1>
        <h2 className={styles.addon}>Addons</h2>
      </div>
      <div className={styles.buttons}>
        <PlusMinusButton product={product} />
        <div className={styles.deleteBtnWrapper}>
          <PrimaryButton
            text={'Slett'}
            color={'secondary'}
            onClick={() =>
              dispatch({ type: 'deleteFromCart', product: product })
            }
          />
        </div>
      </div>
=======
  itemsCart,
  setItemsCart,
=======
>>>>>>> 9a9ad78 (feat: Added cart item context provider)
  product,
}: CartItemProps) => {
  return (
    <div className={styles.cartItemWrapper}>
<<<<<<< HEAD
      <h1 className={styles.title}>{title}</h1>
      <h2>Addons</h2>
<<<<<<< HEAD
      <PlusMinusButton
        itemsCart={itemsCart}
        setItemsCart={setItemsCart}
        product={product}
      />
>>>>>>> 8bb6725 (feat: Implemented Cart)
=======
      <PlusMinusButton product={product} />
>>>>>>> 9a9ad78 (feat: Added cart item context provider)
=======
      <div className={styles.description}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.addon}>Addons</h2>
      </div>
      <div className={styles.buttons}>
        <PlusMinusButton product={product} />
      </div>
>>>>>>> 2a13422 (fix: Added Actions generator and style fix)
    </div>
  );
};
