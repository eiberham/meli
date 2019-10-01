import React from 'react'
import { render } from 'enzyme';
import renderer from 'react-test-renderer';
import Breadcrumb from './index';

describe('Breadcrumb', () => {
    const links = ['Root', 'Item', 'Subitem'];

    it('renders without crashing', () => {
        const component = render(<Breadcrumb links={links} />);
        expect(component.find('.breadcrumb')).toHaveLength(1);
    })

    it('matches snapshot', () => {
        const component = renderer.create(<Breadcrumb links={links} />)
        .toJSON();
        expect(component).toMatchSnapshot();
    })
})