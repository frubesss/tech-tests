import React from 'react';
import Header from '../Header'
import renderer from 'react-test-renderer'

describe('Header Component', () => {

    it('Snapshot Test', () => {
        const tree = renderer.create(<Header/>).toJSON();
        expect(tree).toMatchSnapshot();
    });

});
