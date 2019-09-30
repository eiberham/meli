import React from 'react';
import mockAxios from 'axios';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Search from './index';

describe('Search', () => {
    it('matches snapshot', () => {
        const component = renderer.create(<Search />)
        .toJSON();
        expect(component).toMatchSnapshot();
    })

    it('send a request to the right api and append the search parameter', () => {
        const wrapper = shallow(<Search />);
        const input = wrapper.find('input')
        /* input.instance().value = "musculosas"; */
        input.value = "musculosas";

        /* jest.mock('axios') */

        mockAxios.get.mockImplementationOnce(() =>
            Promise.resolve({
                data: {
                    results: ["cute.jpg"]
                }
            })
        );

        /* axios.get.mockImplementation(async () => response) */

        axios.get.mockResolvedValue(response);

        /* input.trigger('keyup.enter') */
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
    })
})