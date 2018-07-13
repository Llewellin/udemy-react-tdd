import * as React from 'react';
import {shallow} from 'enzyme';

import App from '../App';

describe('App', () => {
    const app = shallow(<App />);

    it('it renders correctly', () => {
        //automatically generate a snapshot
        expect(app).toMatchSnapshot();
    });

    it("initializes the 'state' with an empty list of gifts", () => {
        expect(app.state().gifts).toEqual([]);
    });

    //Test pollution : test result will be effected by other tests

    //BDD:
    //1. avoid test pollution
    //2.
    describe('when clicking the `add-gift` button', () => {
        const id = 1;

        beforeEach(() => {
            app.find('.btn-add').simulate('click');
        });

        afterEach(() => {
            app.setState({gifts: []});
        });

        it('add a new gift to `state`', () => {
            expect(app.state().gifts).toEqual([{id}]);
        });

        it('adds a new gift to the rendered list', () => {
            expect(app.find('.gift-list').children().length).toEqual(1);
        });

        it('creates a Gift component', () => {
            expect(app.find('Gift').exists()).toBe(true);
        });

        describe('the user wants to remove the added gift', () => {
            beforeEach(() => {
                app.instance().removeGift(id);
            });

            it('remove the gift from `state`', () => {
                expect(app.state().gifts).toEqual([]);
            });
        });
    });
});
