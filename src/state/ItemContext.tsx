import React, { useReducer } from 'react';
import { CartItem, Product } from '../types';

type Action =
  | { type: 'increment'; product: Product }
  | { type: 'decrement'; product: Product }
  | { type: 'add'; product: Product };
type Dispatch = (action: Action) => void;
type State = { cartItems: CartItem[] };
type ItemProviderProps = { children: React.ReactNode };

const ItemStateContext = React.createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined);

export const itemsReducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'add': {
      return {
        cartItems: [
          ...state.cartItems,
          {
            product: action.product,
            quantity: 1,
          },
        ],
      };
    }
    case 'increment': {
      return {
        cartItems: state.cartItems?.map((cartItem: CartItem) =>
          cartItem.product.id === action.product.id
            ? {
                ...cartItem,
                ...{
                  product: action.product,
                  quantity: cartItem.quantity + 1,
                },
              }
            : cartItem,
        ),
      };
    }
    case 'decrement': {
      return {
        cartItems: state.cartItems?.map((cartItem: CartItem) =>
          cartItem.product.id === action.product.id
            ? {
                ...cartItem,
                ...{
                  product: action.product,
                  quantity: cartItem.quantity - 1,
                },
              }
            : cartItem,
        ),
      };
    }
  }
};

export const ItemProvider = ({ children }: ItemProviderProps) => {
  const [state, dispatch] = useReducer(itemsReducer, { cartItems: [] });
  const value = React.useMemo(() => ({ state, dispatch }), [state, dispatch]);
  // NOTE: you *might* need to memoize this value
  // Learn more in http://kcd.im/optimize-context
  return (
    <ItemStateContext.Provider value={value}>
      {children}
    </ItemStateContext.Provider>
  );
};

export const useItem = () => {
  const context = React.useContext(ItemStateContext);
  if (context === undefined) {
    throw new Error('useCount must be used within a CountProvider');
  }
  return context;
};
