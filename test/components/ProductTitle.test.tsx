import React from 'react';
import renderer from 'react-test-renderer';
import { ProductCard, ProductTitle } from '../../src/components';
import { product1 } from '../data/product';

describe('Product Title', () => {
  test('Should render the component with the custom title', () => {
    const wrapper = renderer.create(
      <ProductTitle title="Custom Product" className="custom-class" />
    );

    expect(wrapper).toMatchSnapshot();
  });

  test('Should render with the product name', () => {
    const wrapper = renderer.create(
      <ProductCard product={product1}>{() => <ProductTitle />}</ProductCard>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
