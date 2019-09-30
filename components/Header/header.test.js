import React from 'react';
import renderer from 'react-test-renderer';
import Header from './index';

describe('Header', () => {
    it('matches snapshot', () => {
        const component = renderer.create(<Header />)
        .toJSON();
        expect(component).toMatchSnapshot();
    })
})