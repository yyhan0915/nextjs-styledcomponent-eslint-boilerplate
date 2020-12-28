import { shallow } from 'enzyme';
import React from 'react';
import List from '../List';

describe('BottomNavigation should', () => {
    const wrapper = shallow(<List items={[{ id: 1, name: 'asd' }]} />);

    it('rendered without Crash', () => {
        expect(wrapper).toMatchSnapshot();
    });
});
