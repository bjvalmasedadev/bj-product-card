import React from 'react';
import renderer from 'react-test-renderer';
import { ProductCard, ProductImage } from '../../src/components';
import { product2 } from '../data/product';

describe('Product Image', () => {
  test('Should render the component with the custom image', () => {
    const wrapper = renderer.create(<ProductImage img="http://img.png" />);

    expect(wrapper).toMatchSnapshot();
  });

  test('Should render with the product image', () => {
    const wrapper = renderer.create(
      <ProductCard product={product2}>{() => <ProductImage />}</ProductCard>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
