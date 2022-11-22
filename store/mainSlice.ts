import { createSlice, PayloadAction, current } from '@reduxjs/toolkit';

import { getRandomElementsOfRange } from '../src/helpers/getRandomElementsOfRange';

import { IquantityItem } from '../src/types/quantityItemTypes';
import { IvalueItem } from '../src/types/valueItemTypes';

import { Isettings } from '../src/types/gameSettingsTypes';

import {
    Ibackground,
    Iordered
} from './../src/types/backgroundCollectionTypes';

// /. imports

interface mainSliceTypes {
    quantityItemData: IquantityItem[];
    valueItemData: IvalueItem[];
    gameSettings: Isettings;
    backgroundsCollection: Ibackground[];
    currentBackgroundCollection: Ibackground;
    orderedData: Iordered[];
    refOrderedData: Iordered[];
    countersArray: number[];
    lettersArray: string[];
    isModalVisible: boolean;
    isGameStarted: boolean;
}

// /. interfaces  candy

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
            value: 'А',
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
            name: 'candy',
            playgroundImage: '/images/background-template_1.png',
            barImage: '/images/bar-template_1.png',
            interactiveItems: [
                {
                    id: 1,
                    image: '/svg/candy-item_1.svg',
                    count: 42,
                    isSelected: true
                },
                {
                    id: 2,
                    image: '/svg/candy-item_2.svg',
                    count: 46,
                    isSelected: true
                },
                {
                    id: 3,
                    image: '/svg/candy-item_3.svg',
                    count: 112,
                    isSelected: true
                },
                {
                    id: 4,
                    image: '/svg/candy-item_3.svg',
                    count: 57,
                    isSelected: true
                },
                {
                    id: 5,
                    image: '/svg/candy-item_4.svg',
                    count: 64,
                    isSelected: true
                }
            ]
        },
        {
            id: 2,
            name: 'coin',
            playgroundImage: '/images/background-template_2.png',
            barImage: '/images/bar-template_2.png',
            interactiveItems: [
                {
                    id: 1,
                    image: '/svg/coin-item_1.svg',
                    count: 22,
                    isSelected: true
                },
                {
                    id: 2,
                    image: '/svg/coin-item_2.svg',
                    count: 36,
                    isSelected: true
                },
                {
                    id: 3,
                    image: '/svg/coin-item_2.svg',
                    count: 115,
                    isSelected: true
                },
                {
                    id: 4,
                    image: '/svg/coin-item_3.svg',
                    count: 42,
                    isSelected: true
                },
                {
                    id: 5,
                    image: '/svg/coin-item_3.svg',
                    count: 56,
                    isSelected: true
                }
            ]
        },
        {
            id: 3,
            name: 'toy',
            playgroundImage: '/images/background-template_3.png',
            barImage: '/images/bar-template_3.png',
            interactiveItems: [
                {
                    id: 1,
                    image: '/svg/toy-item_1.svg',
                    count: 42,
                    isSelected: true
                },
                {
                    id: 2,
                    image: '/svg/toy-item_2.svg',
                    count: 46,
                    isSelected: true
                },
                {
                    id: 3,
                    image: '/svg/toy-item_3.svg',
                    count: 112,
                    isSelected: true
                },
                {
                    id: 4,
                    image: '/svg/toy-item_4.svg',
                    count: 74,
                    isSelected: true
                },
                {
                    id: 5,
                    image: '/svg/toy-item_3.svg',
                    count: 56,
                    isSelected: true
                }
            ]
        },
        {
            id: 4,
            name: 'flower',
            playgroundImage: '/images/background-template_4.png',
            barImage: '/images/bar-template_4.png',
            interactiveItems: [
                {
                    id: 1,
                    image: '/svg/flower-item_1.svg',
                    count: 28,
                    isSelected: true
                },
                {
                    id: 2,
                    image: '/svg/flower-item_2.svg',
                    count: 36,
                    isSelected: true
                },
                {
                    id: 3,
                    image: '/svg/flower-item_4.svg',
                    count: 112,
                    isSelected: true
                },
                {
                    id: 4,
                    image: '/svg/flower-item_2.svg',
                    count: 45,
                    isSelected: true
                },
                {
                    id: 5,
                    image: '/svg/flower-item_5.svg',
                    count: 56,
                    isSelected: true
                }
            ]
        }
    ],
    currentBackgroundCollection: {
        id: 0,
        name: '',
        playgroundImage: '',
        barImage: '',
        interactiveItems: []
    },
    orderedData: [
        { id: 1, image: '', count: 0, isSelected: false },
        { id: 2, image: '', count: 0, isSelected: false },
        { id: 3, image: '', count: 0, isSelected: false },
        { id: 4, image: '', count: 0, isSelected: false },
        { id: 5, image: '', count: 0, isSelected: false },
        { id: 6, image: '', count: 0, isSelected: false }
    ],
    refOrderedData: [],
    countersArray: [],
    lettersArray: [],
    gameSettings: { quantity: 0, totalValue: 0, mode: '' },
    isModalVisible: false,
    isGameStarted: false
};

// /. initialState

const mainSlice = createSlice({
    name: 'mainSlice',
    initialState,
    reducers: {
        switchQuantityItemSelectedStatus(
            state,
            action: PayloadAction<{
                id: number;
            }>
        ) {
            const { id } = action.payload;
            // /. payload
            state.quantityItemData.map(item =>
                item.id === id
                    ? (item.isSelected = true)
                    : (item.isSelected = false)
            );
        },
        switchValueItemSelectedStatus(
            state,
            action: PayloadAction<{
                id: number;
            }>
        ) {
            const { id } = action.payload;
            // /. payload
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
        },
        setPlaygroundData(
            state,
            action: PayloadAction<{
                quantityItemsLimit: number;
                itemsValueLimit: number | string;
                mode: string;
            }>
        ) {
            const { quantityItemsLimit, itemsValueLimit, mode } =
                action.payload;
            // /. payload
            state.currentBackgroundCollection.interactiveItems.map(
                (item, index) =>
                    index > quantityItemsLimit - 1
                        ? (item.isSelected = false)
                        : (item.isSelected = true)
            );

            const isAscendingMode = mode === 'ascending';

            if (typeof itemsValueLimit === 'string') {
                const lettersArr = getRandomElementsOfRange(
                    ['А', 'Я'],
                    quantityItemsLimit + 1
                );
                state.lettersArray = lettersArr;
                // // // // SAME LOGIC  // // // //
                for (
                    let i = 0;
                    i <
                    state.currentBackgroundCollection.interactiveItems.length;
                    i++
                ) {
                    const filteredArr = isAscendingMode
                        ? lettersArr.filter(item => item !== 'А')
                        : lettersArr.filter(item => item !== 'Я');
                    const char = filteredArr[i];
                    const playgroundItem =
                        state.currentBackgroundCollection.interactiveItems[i];
                    playgroundItem.count = char;
                }
                // // // //
            } else {
                const numbersArr = getRandomElementsOfRange(
                    itemsValueLimit,
                    quantityItemsLimit + 1
                    // add additional element for correct render counters for interactive items including deleted value (for min/max initial item)
                );
                state.countersArray = numbersArr;
                // // // // SAME LOGIC  // // // //
                for (
                    let i = 0;
                    i <
                    state.currentBackgroundCollection.interactiveItems.length;
                    i++
                ) {
                    const filteredArr = isAscendingMode
                        ? numbersArr.filter(
                            item => item !== Math.min(...numbersArr)
                        )
                        : numbersArr.filter(
                            item => item !== Math.max(...numbersArr)
                        );
                    const number = filteredArr[i];
                    const playgroundItem =
                        state.currentBackgroundCollection.interactiveItems[i];
                    playgroundItem.count = number;
                }
                // // // //
            }
        },
        setInitialItemOfOrderedData(
            state,
            action: PayloadAction<{
                mode: string;
            }>
        ) {
            const { mode } = action.payload;
            // /. payload
            const isAscendingMode = mode === 'ascending';

            const initialItem = isAscendingMode
                ? state.orderedData[0]
                : state.orderedData[state.orderedData.length - 1];

            initialItem.isSelected = true;
            initialItem.isInitialValue = true;

            if (typeof state.gameSettings.totalValue === 'string') {
                const minVal = 'А';
                const maxVal = 'Я';
                initialItem.count = isAscendingMode ? minVal : maxVal;
            } else {
                const minVal = Math.min(...state.countersArray);
                const maxVal = Math.max(...state.countersArray);
                initialItem.count = isAscendingMode ? minVal : maxVal;
            }

            switch (state.currentBackgroundCollection.name) {
                case 'candy':
                    initialItem.image = '/svg/candy-item_2.svg';
                    break;
                case 'coin':
                    initialItem.image = '/svg/coin-item_1.svg';
                    break;
                case 'flower':
                    initialItem.image = '/svg/flower-item_1.svg';
                    break;
                case 'toy':
                    initialItem.image = '/svg/toy-item_5.svg';
                    break;
            }
        },
        removeInitialStatusOfOrderedDataItem(state) {
            const initialItem = state.orderedData.find(
                item => item.isInitialValue
            );
            if (initialItem) {
                initialItem.isInitialValue = false;
            }
        },
        addCurrentItemToOrderedData(
            state,
            action: PayloadAction<{
                itemID: number;
                barID: number;
            }>
        ) {
            const { itemID, barID } = action.payload;
            // /. payload
            const targetItem =
                state.currentBackgroundCollection.interactiveItems.find(
                    item => item.id === itemID
                );
            const barItemSlot = state.orderedData.find(
                item => item.id === barID
            );
            if (targetItem && barItemSlot) {
                if (
                    targetItem.isSelected &&
                    !barItemSlot.isSelected &&
                    !barItemSlot.isInitialValue
                ) {
                    barItemSlot.image = targetItem.image;
                    barItemSlot.count = targetItem.count;
                    barItemSlot.isSelected = true; // show bar item
                    targetItem.isSelected = false; // hide playground item
                }
            }
        },
        addCurrentItemToPlayground(
            state,
            action: PayloadAction<{
                playgroundID: number;
                itemID: number;
            }>
        ) {
            const { playgroundID, itemID } = action.payload;
            // /. payload
            const playgroundItemSlot =
                state.currentBackgroundCollection.interactiveItems.find(
                    item => item.id === playgroundID
                );
            const targetItem = state.orderedData.find(
                item => item.id === itemID
            );
            if (
                playgroundItemSlot &&
                targetItem &&
                !targetItem.isInitialValue
            ) {
                if (!playgroundItemSlot.isSelected && targetItem.isSelected) {
                    playgroundItemSlot.image = targetItem.image;
                    playgroundItemSlot.count = targetItem.count;
                    playgroundItemSlot.isSelected = true; // show playground item
                    targetItem.isSelected = false; // hide bar item
                }
            }
        },
        switchModalVisibleStatus(state, action: PayloadAction<boolean>) {
            state.isModalVisible = action.payload;
        },
        switchGameStartedStatus(state, action: PayloadAction<boolean>) {
            state.isGameStarted = action.payload;
        },
        resetOrderedData(state) {
            state.orderedData.map(item => {
                item.image = '';
                item.count = 0;
                item.isSelected = false;
            });
        },
        setReferenceOrderedData(
            state,
            action: PayloadAction<{
                mode: string;
            }>
        ) {
            const { mode } = action.payload;
            // /. payload
            const refArr = JSON.parse(
                JSON.stringify(state.currentBackgroundCollection)
            );
            // console.log('refArr:', refArr.interactiveItems);
            // console.log(
            //     current(state.currentBackgroundCollection.interactiveItems)
            // );
            switch (mode) {
                case 'ascending': // 1...10
                    state.refOrderedData = refArr.interactiveItems.sort(
                        (a: any, b: any) => (a.count > b.count ? 1 : -1)
                    );
                    // console.log('refOrderedData ASC:', state.refOrderedData);
                    break;
                case 'descending': // 10...1
                    state.refOrderedData = refArr.interactiveItems
                        .sort((a: any, b: any) => (a.count < b.count ? 1 : -1))
                        .reverse();
                    // console.log('refOrderedData DESC:', state.refOrderedData);
                    break;
            }
        }
    }
});

export const {
    switchQuantityItemSelectedStatus,
    switchValueItemSelectedStatus,
    saveGameSettingsData,
    setPlaygroundData,
    setCurrentBackCollection,
    setInitialItemOfOrderedData,
    removeInitialStatusOfOrderedDataItem,
    addCurrentItemToOrderedData,
    addCurrentItemToPlayground,
    switchModalVisibleStatus,
    switchGameStartedStatus,
    resetOrderedData,
    setReferenceOrderedData
} = mainSlice.actions;

export default mainSlice.reducer;
