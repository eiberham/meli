import React from 'react';
import { items } from '../../__mocks__/items';
import { mount, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import ProductList from './index';

describe('ProductList', () => {
    it('matches snapshot', () => {
        const onItemSelect = jest.fn();
        const component = renderer.create(<ProductList items={items} onItemSelect={onItemSelect} />)
        .toJSON();
        expect(component).toMatchSnapshot();
    })

    it('works like a charm', () => {
        const onItemSelect = jest.fn();
        const component = mount(<ProductList items={items} onItemSelect={onItemSelect} />);
        expect(component.find('.item')).toHaveLength(4);
        component.find('.item').at(0).simulate('click');
        expect(onItemSelect).toHaveBeenCalledTimes(1);
    })
})