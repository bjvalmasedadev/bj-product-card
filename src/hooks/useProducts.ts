import { useEffect, useRef, useState } from "react";
import { InitialValue, OnChangeArgs, Product } from "../interfaces/interfaces";

interface useProductArgs {
  product: Product;
  onChange?: (args: OnChangeArgs) => void;
  value?: number;
  initialValue?: InitialValue;
}

export const useProducts = ({ onChange, product, value = 0, initialValue }: useProductArgs) => {
  const [counter, setCounter] = useState<number>(initialValue?.count || value);
  const isMounted = useRef(false);

  const increaseBy = (value: number) => {
    let newValue = Math.max(counter + value, 0);
    if (initialValue?.maxCount) {
      newValue = Math.min(newValue, initialValue.maxCount);
    }

    setCounter(newValue);

    onChange && onChange({ count: newValue, product });
  };

  const reset = () => {
    setCounter(initialValue?.count || value);
  };

  useEffect(() => {
    isMounted.current = true;
  }, []);

  useEffect(() => {
    if (isMounted.current) return;
    setCounter(value);
  }, [value]);

  return {
    counter,
    isMaxCountReach: !!initialValue?.maxCount && initialValue.maxCount === counter,
    maxCount: initialValue?.maxCount,
    increaseBy,
    reset,
  };
};

export default useProducts;
