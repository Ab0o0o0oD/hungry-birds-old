import React from 'react';
import styles from './meny-card.module.css';
import { PrimaryButton } from './PrimaryButton';
import { PlusMinusButton } from './PlusMinusButton';
import { Product } from '../types';
import { useItem } from '../state/ItemContext';

interface MenyCardProps {
<<<<<<< HEAD
  product: Product;
  onClick: (e: any) => void;
}

export const MenyCard: React.FC<MenyCardProps> = ({
  product,
  onClick,
}: MenyCardProps) => {
  const { state } = useItem();
  const isProductInCart = state.cartItems.some(
    (cartItem) => cartItem.product.id === product.id && cartItem.quantity > 0,
  );

  return (
    <div className={styles.menyCard}>
      <div className={styles.cardImgWrapper}>
        <img
          className={styles.productImg}
          src={product.img}
          alt="shawarma rull img"
        />
      </div>
      <div className={styles.cardInfoWrapper}>
        <div className={styles.cardInfo}>
          <h5>{product.title}</h5>
          <p>Innhold: {product.content}</p>
          <p>{product.allergier}</p>
          <p>{product.price} Kr</p>
=======
    title: string
    allergier: string,
    img: string,
    price:string,
    content:string,
}

export const MenyCard: React.FC<MenyCardProps> = ({title, allergier, img, price,content}: MenyCardProps) => {
    return (
        <div className="meny-card">
            <div className="card-img-wrapper">
                <img className="mcard-img" src={img} alt="shawarma rull img"/>
            </div>
            <div className="card-info-wrapper">
                <div className='card-info'>
                    <h5>{title}</h5>
                    <p>Innhold: {content}</p>
                    <p>{allergier}</p>
                    <p>{price}</p>
                </div>

            </div>
                <PrimaryButton/>
>>>>>>> 5eab785 (fix: Added responsive meny style (#1))
        </div>
      </div>
      <div className={styles.buttonsWrapper}>
        {isProductInCart ? (
          <PlusMinusButton product={product} />
        ) : (
          <PrimaryButton
            text={'Legg til'}
            color={'primary'}
            onClick={onClick}
          />
        )}
      </div>
    </div>
  );
};
