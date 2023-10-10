import React, { CSSProperties, createContext } from 'react';
import useProducts from '../hooks/useProducts';
import {
  InitialValue,
  OnChangeArgs,
  Product,
  ProductCardHandlers,
  ProductContextProps,
} from '../interfaces/interfaces';
import styles from '../styles/styles.module.css';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
  // children?: ReactElement | ReactElement[];
  className?: string;
  initialValue?: InitialValue;
  product: Product;
  style?: CSSProperties;
  value?: number;
  children: (args: ProductCardHandlers) => JSX.Element;
  onChange?: (args: OnChangeArgs) => void;
}

export const ProductCard = ({
  product,
  children,
  className,
  style,
  onChange,
  value,
  initialValue,
}: Props) => {
  const {
    counter,
    increaseBy,
    maxCount,
    isMaxCountReach,
    reset,
  } = useProducts({ onChange, product, value, initialValue });

  return (
    <Provider
      value={{
        counter,
        maxCount,
        product,
        increaseBy,
      }}
    >
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children({
          count: counter,
          isMaxCountReach,
          maxCount,
          product,
          increaseBy,
          reset,
        })}
      </div>
    </Provider>
  );
};
