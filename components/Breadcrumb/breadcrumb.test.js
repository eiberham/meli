import React from 'react'
import { mount } from 'enzyme'
import Breadcrumb from './index';

describe('Breadcrumb', () => {
    it('renders without crashing', () => {
        const component = mount(<Breadcrumb />);
        expect(component.find('.breadcrumb')).toHaveLength(1);
    })
})