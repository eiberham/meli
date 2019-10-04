import React from 'react';
import renderer from 'react-test-renderer';
import Loading from './index';

describe('Loading', () => {
    it('matches snapshot', () => {
        const component = renderer.create(<Loading size="massive" />).toJSON();
        expect(component).toMatchSnapshot();
    })
})