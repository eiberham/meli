import React from 'react';
import { items } from '../../__mocks__/items';
import { mount, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import ProductItem from './index';

describe('ProductItem', () => {
    it('matches snapshot', () => {
        const onProductSelect = jest.fn();
        const product = items[0];
        const component = renderer.create(<ProductItem product={product} onProductSelect={onProductSelect} />)
        .toJSON();
        expect(component).toMatchSnapshot();
    })
})