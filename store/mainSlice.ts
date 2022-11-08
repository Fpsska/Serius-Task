import { createSlice } from '@reduxjs/toolkit';

import { IquantityItem } from '../src/types/quantityItemTypes';
import { IvalueItem } from '../src/types/valueItemTypes';

import { Ibackground } from './../src/types/backgroundCollectionTypes';

// /. imports

interface mainSliceTypes {
    quantityItemData: IquantityItem[];
    valueItemData: IvalueItem[];
    gameSettings: { [key: string]: string | number };
    backgroundsCollection: Ibackground[];
}

// /. interfaces

const initialState: mainSliceTypes = {
    quantityItemData: [
        {
            id: 1,
            value: '2',
            name: 'item-quantity',
            isSelected: true
        },
        {
            id: 2,
            value: '3',
            name: 'item-quantity',
            isSelected: false
        },
        {
            id: 3,
            value: '4',
            name: 'item-quantity',
            isSelected: false
        },
        {
            id: 4,
            value: '5',
            name: 'item-quantity',
            isSelected: false
        }
    ],
    valueItemData: [
        {
            id: 1,
            value: 'A',
            name: 'item-value',
            isSelected: true
        },
        {
            id: 2,
            value: 9,
            name: 'item-value',
            isSelected: false
        },
        {
            id: 3,
            value: 19,
            name: 'item-value',
            isSelected: false
        },
        {
            id: 4,
            value: 50,
            name: 'item-value',
            isSelected: false
        },
        {
            id: 5,
            value: 99,
            name: 'item-value',
            isSelected: false
        },
        {
            id: 6,
            value: 999,
            name: 'item-value',
            isSelected: false
        }
    ],
    backgroundsCollection: [
        {
            id: 1,
            playgroundImage: '/images/background-template_1.png',
            barImage: '/images/bar-template_1.png'
        },
        {
            id: 2,
            playgroundImage: '/images/background-template_2.png',
            barImage: '/images/bar-template_2.png'
        },
        {
            id: 3,
            playgroundImage: '/images/background-template_3.png',
            barImage: '/images/bar-template_3.png'
        },
        {
            id: 4,
            playgroundImage: '/images/background-template_4.png',
            barImage: '/images/bar-template_4.png'
        }
    ],
    gameSettings: {}
};

// /. initialState

const mainSlice = createSlice({
    name: 'mainSlice',
    initialState,
    reducers: {}
});

// export const { } = mainSlice.actions;

export default mainSlice.reducer;
