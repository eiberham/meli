import React from 'react';
import mockAxios from 'axios';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Search from './index';
import { items } from '../../__mocks__/items';

describe('Search', () => {
    it('matches snapshot', () => {
        const component = renderer.create(<Search />)
        .toJSON();
        expect(component).toMatchSnapshot();
    })

    /* it('send a request to the right api and append the search parameter', () => {
        const wrapper = shallow(<Search />);
        const input = wrapper.find('input')
        input.value = "musculosas";

        mockAxios.get.mockImplementationOnce(() =>
            Promise.resolve({
                data: {
                    results: items
                }
            })
        );

        axios.get.mockResolvedValue(response);

        input.simulate('keyDown', {
            which: 27,
            target: {
              blur() {
                input.simulate('blur');
              },
            },
        });

        expect(mockAxios.get).toHaveBeenCalledWith(`http://localhost:3000/api/items?search=musculosas`)
        expect(mockAxios.get).toHaveBeenCalledTimes(1);
    }) */
})