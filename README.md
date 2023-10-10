# BJ-Product-Card

This is a test package for npm

### Barbaro Javier

## Ejemplo

```
import {ProductCard, ProductImage, ProductTitle, ProductButtons} from 'bj-product-card'
```

```
  <ProductCard
      product={product}
      initialValue={{
        count: 4,
        maxCount: 10,
      }}
    >
      {({ reset, increaseBy, count, maxCount, isMaxCountReach }) => (
        <>
          <ProductImage />
          <ProductTitle />
          <ProductButtons />
        </>
      )}
  </ProductCard>
```
