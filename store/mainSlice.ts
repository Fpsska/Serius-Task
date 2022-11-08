import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IquantityItem } from '../src/types/quantityItemTypes';
import { IvalueItem } from '../src/types/valueItemTypes';

import { Ibackground } from './../src/types/backgroundCollectionTypes';

// /. imports

interface mainSliceTypes {
    quantityItemData: IquantityItem[];
    valueItemData: IvalueItem[];
    gameSettings: { [key: string]: string | number };
    backgroundsCollection: Ibackground[];
    currentBackgroundCollection: Ibackground;
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
    currentBackgroundCollection: { id: 0, playgroundImage: '', barImage: '' },
    gameSettings: {}
};

// /. initialState

const mainSlice = createSlice({
    name: 'mainSlice',
    initialState,
    reducers: {
        switchQuantityItemSelectedStatus(
            state,
            action: PayloadAction<{ id: number }>
        ) {
            const { id } = action.payload;
            state.quantityItemData.map(item =>
                item.id === id
                    ? (item.isSelected = true)
                    : (item.isSelected = false)
            );
        },
        switchValueItemSelectedStatus(
            state,
            action: PayloadAction<{ id: number }>
        ) {
            const { id } = action.payload;
            state.valueItemData.map(item =>
                item.id === id
                    ? (item.isSelected = true)
                    : (item.isSelected = false)
            );
        },
        saveGameSettingsData(
            state,
            action: PayloadAction<{
                quantity: string;
                totalValue: string | number;
                mode: string;
            }>
        ) {
            state.gameSettings = action.payload;
        },
        setCurrentBackCollection(state, action: PayloadAction<Ibackground>) {
            state.currentBackgroundCollection = action.payload;
        }
    }
});

export const {
    switchQuantityItemSelectedStatus,
    switchValueItemSelectedStatus,
    saveGameSettingsData,
    setCurrentBackCollection
} = mainSlice.actions;

export default mainSlice.reducer;
