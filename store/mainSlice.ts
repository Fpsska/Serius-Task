import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IquantityItem } from '../src/types/quantityItemTypes';
import { IvalueItem } from '../src/types/valueItemTypes';

import { Isettings } from '../src/types/gameSettingsTypes';

import { Ibackground } from './../src/types/backgroundCollectionTypes';

// /. imports

interface mainSliceTypes {
    quantityItemData: IquantityItem[];
    valueItemData: IvalueItem[];
    gameSettings: Isettings;
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
            barImage: '/images/bar-template_1.png',
            interactiveItems: [
                {
                    id: 1,
                    image: '/svg/candy-item_1.svg',
                    count: 42
                },
                {
                    id: 2,
                    image: '/svg/candy-item_2.svg',
                    count: 46
                },
                {
                    id: 3,
                    image: '/svg/candy-item_3.svg',
                    count: 112
                },
                {
                    id: 4,
                    image: '/svg/candy-item_3.svg',
                    count: 57
                },
                {
                    id: 5,
                    image: '/svg/candy-item_4.svg',
                    count: 64
                }
            ]
        },
        {
            id: 2,
            playgroundImage: '/images/background-template_2.png',
            barImage: '/images/bar-template_2.png',
            interactiveItems: [
                {
                    id: 1,
                    image: '/svg/coin-item_1.svg',
                    count: 22
                },
                {
                    id: 2,
                    image: '/svg/coin-item_2.svg',
                    count: 36
                },
                {
                    id: 3,
                    image: '/svg/coin-item_2.svg',
                    count: 115
                },
                {
                    id: 4,
                    image: '/svg/coin-item_3.svg',
                    count: 42
                },
                {
                    id: 5,
                    image: '/svg/coin-item_3.svg',
                    count: 56
                }
            ]
        },
        {
            id: 3,
            playgroundImage: '/images/background-template_3.png',
            barImage: '/images/bar-template_3.png',
            interactiveItems: [
                {
                    id: 1,
                    image: '/svg/toy-item_1.svg',
                    count: 42
                },
                {
                    id: 2,
                    image: '/svg/toy-item_2.svg',
                    count: 46
                },
                {
                    id: 3,
                    image: '/svg/toy-item_3.svg',
                    count: 112
                },
                {
                    id: 4,
                    image: '/svg/toy-item_4.svg',
                    count: 74
                },
                {
                    id: 5,
                    image: '/svg/toy-item_3.svg',
                    count: 56
                }
            ]
        },
        {
            id: 4,
            playgroundImage: '/images/background-template_4.png',
            barImage: '/images/bar-template_4.png',
            interactiveItems: [
                {
                    id: 1,
                    image: '/svg/flower-item_1.svg',
                    count: 28
                },
                {
                    id: 2,
                    image: '/svg/flower-item_2.svg',
                    count: 36
                },
                {
                    id: 3,
                    image: '/svg/flower-item_4.svg',
                    count: 112
                },
                {
                    id: 4,
                    image: '/svg/flower-item_2.svg',
                    count: 45
                },
                {
                    id: 5,
                    image: '/svg/flower-item_5.svg',
                    count: 56
                }
            ]
        }
    ],
    currentBackgroundCollection: {
        id: 0,
        playgroundImage: '',
        barImage: '',
        interactiveItems: []
    },
    gameSettings: { quantity: '', totalValue: '', mode: '' }
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
        saveGameSettingsData(state, action: PayloadAction<Isettings>) {
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
