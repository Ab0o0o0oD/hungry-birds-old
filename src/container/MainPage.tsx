<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 6346829 (fix: Added checkout modal (#15))
import React, { useEffect, useState } from 'react';
import { MenyCard } from '../components/MenyCard';
import styles from './main-page.module.css';
import { Product } from '../types';
import { useItem } from '../state/ItemContext';
import { Cart } from './Cart';
import { CheckoutButton } from '../components/CheckoutButton';
<<<<<<< HEAD
import ReactModal from 'react-modal';
<<<<<<< HEAD
=======
import React from "react";
import {MenyCard} from "../components/MenyCard";
import "./main-page.css";
>>>>>>> 5eab785 (fix: Added responsive meny style (#1))
=======
>>>>>>> 6346829 (fix: Added checkout modal (#15))
=======
import { CheckoutModal } from './CheckoutModal';
>>>>>>> bda5181 (fix: Added checkout modal content (#16))

export const MainPage: React.FC = () => {
<<<<<<< HEAD
  const { state, dispatch } = useItem();
  const [isOpenCheckoutModal, setIsOpenCheckoutModal] =
    useState<boolean>(false);

<<<<<<< HEAD
<<<<<<< HEAD
=======
  // eslint-disable-next-line
  useEffect(() => dispatch({ type: 'updateTotalPrice' }), [state.cartItems]);

  useEffect(() => {
    if (state.cartItems.length === 0 && isOpenCheckoutModal) {
      setIsOpenCheckoutModal(false);
    }
    //eslint-disable-next-line
  }, [state.cartItems]);
>>>>>>> bda5181 (fix: Added checkout modal content (#16))
  return (
    <div className={styles.mainPageContainer}>
      <div className={styles.menyWrapper}>
        <div className={styles.menyItemsWrapper}>
          <div className={styles.menyItems}>
            {products.map((product) => (
              <MenyCard
                key={product.id}
                product={product}
                onClick={() =>
                  dispatch({ type: 'addToCart', product: product })
                }
              />
            ))}
          </div>
        </div>
      </div>
      <div className={styles.cartWrapper}>
        {state.cartItems && <Cart cartItems={state.cartItems} />}
      </div>
      {state.cartItems.length > 0 && (
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 6346829 (fix: Added checkout modal (#15))
        <div className={styles.checkoutButtonSm}>
          <CheckoutButton
            onClick={() => setIsOpenCheckoutModal(!isOpenCheckoutModal)}
          />
        </div>
      )}
      <CheckoutModal
        isOpenCheckoutModal={isOpenCheckoutModal}
        setIsOpenCheckoutModal={setIsOpenCheckoutModal}
      />
    </div>
  );
};

const products: Product[] = [
  {
    id: 1,
    cat: 's',
    title: 'SHAWARMA I RULL',
    content: 'Agurk, chicken',
    price: 120,
<<<<<<< HEAD
    allergier: 'Allergier: gluten',
    img: './assets/shawarmarull.jpg',
  },
  {
    id: 2,
    cat: 's',
    title: 'SHAWARMA TALLARKEN',
    content: 'Agurk, chicken',
    price: 140,
    allergier: 'Allergier: gluten',
    img: './assets/shawrma-arabi.jpeg',
  },
  {
    id: 3,
    cat: 's',
    title: 'HUNGRY BIRDS ',
    content: 'Agurk, chicken',
    price: 165,
    allergier: 'Allergier: gluten',
    img: './assets/hungry-birds.png',
  },
  {
    id: 4,
    cat: 'c',
    title: 'CRISPY CHICKEN RULL',
    content: 'Agurk, chicken',
    price: 100,
    allergier: 'Allergier: gluten',
    img: './assets/cripsy-rull.png',
  },
  {
    id: 5,
    cat: 'c',
    title: 'CRISPY SNACK BOX',
    content: 'Agurk, chicken',
    price: 100,
    allergier: 'Allergier: gluten',
    img: './assets/crispy-snack-box.jpeg',
  },
  {
    id: 6,
    cat: 'c',
    title: 'CRIPSY BOX',
    content: 'Agurk, chicken',
    price: 100,
    allergier: 'Allergier: gluten',
    img: './assets/cripsy-box.jpg',
  },
  {
    id: 7,
    cat: 'c',
    title: 'CRIPSY BURGER',
    content: 'Agurk, chicken',
    price: 100,
    allergier: 'Allergier: gluten',
    img: './assets/crispy-burger.jpg',
  },
  {
    id: 8,
    cat: 'v',
    title: 'FALAFEL RULL',
    content: 'Agurk, chicken',
    price: 100,
    allergier: 'Allergier: gluten',
    img: './assets/falafel-rull.jpeg',
  },
];
=======
}

export const MainPage: React.FC<MainPageProps> = ({}: MainPageProps) => {
=======
>>>>>>> eec5f3c (fix: deploy to netlify (#8))
    return (
        <div>
            <div className="products-cart">
                <div className="products-list" style={{overflowY: "auto"}}>
                    {menyer.map((meny) => (
                            <MenyCard
                                key={meny.id}
                                title={meny.title}
                                allergier={meny.allergier}
                                img={meny.img}
                                price={meny.price}
                                content={meny.content}
                            />
                        )
                    )}
                </div>
                <div className="cart">
                    CART
                </div>
            </div>
=======
import React from 'react';
=======
import React, { useState } from 'react';
>>>>>>> 8bb6725 (feat: Implemented Cart)
=======
import React from 'react';
>>>>>>> 9a9ad78 (feat: Added cart item context provider)
import { MenyCard } from '../components/MenyCard';
import styles from './main-page.module.css';
import { Product } from '../types';
import { useItem } from '../state/ItemContext';
import { Cart } from './Cart';

export const MainPage: React.FC = () => {
  const { state, dispatch } = useItem();

  return (
<<<<<<< HEAD
    <div>
      <div className="products-cart">
        <div className="products-list" style={{ overflowY: 'auto' }}>
          {products.map((product) => (
            <MenyCard
              key={product.id}
              product={product}
              onClick={() => addProduct(product)}
            />
          ))}
>>>>>>> 3f8d105 (fix: Added prettier)
        </div>
        <div className="cart-wrapper">
          {state.cartItems && <Cart cartItems={state.cartItems} />}
=======
    <div className={styles.mainPageContainer}>
      <div className={styles.menyWrapper}>
        <div className={styles.menyItemsWrapper}>
          <div className={styles.menyItems}>
            {products.map((product) => (
              <MenyCard
                key={product.id}
                product={product}
                onClick={() =>
                  dispatch({ type: 'addToCart', product: product })
                }
              />
            ))}
          </div>
>>>>>>> b7360c7 (feat: Use css modules)
        </div>
      </div>
      <div className={styles.cartWrapper}>
        {state.cartItems && <Cart cartItems={state.cartItems} />}
      </div>
      {state.cartItems.length > 0 && (
        <div className={styles.checkoutButtonSm}>
          <button>test</button>
        </div>
=======
        <div className={styles.checkoutButtonSm}>Til betaling</div>
>>>>>>> 1ec328b (feat: Scrollable cart items (#12))
      )}
    </div>
  );
};

<<<<<<< HEAD
const menyer = [
<<<<<<< HEAD
    {
        id: 1,
        cat: "s",
        title: "SHAWARMA I RULL",
        content: "Agurk, chicken",
        price: "100kr",
        allergier: "Allergier: gluten",
        img: './assets/shawarmarull.jpg'
    },
    {
        id: 2,
        cat: "s",
        title: "SHAWARMA TALLARKEN",
        content: "Agurk, chicken",
        price: "100kr",
        allergier: "Allergier: gluten",
        img: './assets/shawrma-arabi.jpeg'
    },
    {
        id: 3,
        cat: "s",
        title: "HUNGRY BIRDS ",
        content: "Agurk, chicken",
        price: "100kr",
        allergier: "Allergier: gluten",
        img: './assets/hungry-birds.png'
    },
    {
        id: 4,
        cat: "c",
        title: "CRISPY CHICKEN RULL",
        content: "Agurk, chicken",
        price: "100kr",
        allergier: "Allergier: gluten",
        img: './assets/cripsy-rull.png'
    },
    {
        id: 5,
        cat: "c",
        title: "CRISPY SNACK BOX",
        content: "Agurk, chicken",
        price: "100kr",
        allergier: "Allergier: gluten",
        img: './assets/crispy-snack-box.jpeg'
    },
    {
        id: 6,
        cat: "c",
        title: "CRIPSY BOX",
        content: "Agurk, chicken",
        price: "100kr",
        allergier: "Allergier: gluten",
        img: './assets/cripsy-box.jpg'
    },
    {
        id: 7,
        cat: "c",
        title: "CRIPSY BURGER",
        content: "Agurk, chicken",
        price: "100kr",
        allergier: "Allergier: gluten",
        img: './assets/crispy-burger.jpg'
    },
    {
        id: 8,
        cat: "v",
        title: "FALAFEL RULL",
        content: "Agurk, chicken",
        price: "100kr",
        allergier: "Allergier: gluten",
        img: './assets/falafel-rull.jpeg'
    }
]
>>>>>>> 5eab785 (fix: Added responsive meny style (#1))
=======
=======
const products: Product[] = [
>>>>>>> 8bb6725 (feat: Implemented Cart)
  {
    id: 1,
    cat: 's',
    title: 'SHAWARMA I RULL',
    content: 'Agurk, chicken',
    price: 100,
=======
>>>>>>> 6346829 (fix: Added checkout modal (#15))
    allergier: 'Allergier: gluten',
    img: './assets/shawarmarull.jpg',
  },
  {
    id: 2,
    cat: 's',
    title: 'SHAWARMA TALLARKEN',
    content: 'Agurk, chicken',
    price: 140,
    allergier: 'Allergier: gluten',
    img: './assets/shawrma-arabi.jpeg',
  },
  {
    id: 3,
    cat: 's',
    title: 'HUNGRY BIRDS ',
    content: 'Agurk, chicken',
    price: 165,
    allergier: 'Allergier: gluten',
    img: './assets/hungry-birds.png',
  },
  {
    id: 4,
    cat: 'c',
    title: 'CRISPY CHICKEN RULL',
    content: 'Agurk, chicken',
    price: 100,
    allergier: 'Allergier: gluten',
    img: './assets/cripsy-rull.png',
  },
  {
    id: 5,
    cat: 'c',
    title: 'CRISPY SNACK BOX',
    content: 'Agurk, chicken',
    price: 100,
    allergier: 'Allergier: gluten',
    img: './assets/crispy-snack-box.jpeg',
  },
  {
    id: 6,
    cat: 'c',
    title: 'CRIPSY BOX',
    content: 'Agurk, chicken',
    price: 100,
    allergier: 'Allergier: gluten',
    img: './assets/cripsy-box.jpg',
  },
  {
    id: 7,
    cat: 'c',
    title: 'CRIPSY BURGER',
    content: 'Agurk, chicken',
    price: 100,
    allergier: 'Allergier: gluten',
    img: './assets/crispy-burger.jpg',
  },
  {
    id: 8,
    cat: 'v',
    title: 'FALAFEL RULL',
    content: 'Agurk, chicken',
    price: 100,
    allergier: 'Allergier: gluten',
    img: './assets/falafel-rull.jpeg',
  },
];
>>>>>>> 3f8d105 (fix: Added prettier)
