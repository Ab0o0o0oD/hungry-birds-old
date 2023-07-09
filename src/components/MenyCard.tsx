import React from 'react';
import './meny-card.css';
import { PrimaryButton } from './PrimaryButton';
import { PlusMinusButton } from './PlusMinusButton';
import { Product } from '../types';
import { useItem } from '../state/ItemContext';

interface MenyCardProps {
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
    <div className="meny-card">
      <div className="card-img-wrapper">
        <img
          className="product-img"
          src={product.img}
          alt="shawarma rull img"
        />
      </div>
      <div className="card-info-wrapper">
        <div className="card-info">
          <h5>{product.title}</h5>
          <p>Innhold: {product.content}</p>
          <p>{product.allergier}</p>
          <p>{product.price} Kr</p>
        </div>
      </div>
      {isProductInCart ? (
        <PlusMinusButton product={product} />
      ) : (
        <PrimaryButton text={'Legg til'} onClick={onClick} />
      )}
    </div>
  );
};
