import React from 'react';
import renderer from 'react-test-renderer';
import NewReleases from '../components/pages/NewReleases';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, waitFor } from '@testing-library/react';
import axios from 'axios';

jest.mock('axios');

describe('NewRealeases Component',()=>{
    it('renders correctly', () => {
        const tree = renderer.create(<NewReleases />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});

