import React from 'react';
import { items } from '../../__mocks__/items';
import renderer from 'react-test-renderer';
import ProductDetail from './index';

describe('ProductDetail', () => {
    it('matches snapshot', () => {
        const product = items[0];
        const component = renderer.create(<ProductDetail item={product} />)
        .toJSON();
        expect(component).toMatchSnapshot();
    })
})