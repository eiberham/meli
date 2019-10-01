import React from 'react';
import renderer from 'react-test-renderer';
import Layout from './index';

describe('Layout', () => {
    it('matches snapshot', () => {
        const component = renderer.create(<Layout />).toJSON();
        expect(component).toMatchSnapshot();
    })
})