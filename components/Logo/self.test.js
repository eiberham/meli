import React from 'react';
import renderer from 'react-test-renderer';
import Logo from './index';

describe('Logo', () => {
    it('matches snapshot', () => {
        const component = renderer.create(<Logo />).toJSON();
        expect(component).toMatchSnapshot();
    })
})