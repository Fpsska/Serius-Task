export interface Iinteractive {
    id: number;
    image: string;
    count: number | string;
    isSelected: boolean;
}

export interface Ibackground {
    id: number;
    name: string;
    playgroundImage: string;
    barImage: string;
    interactiveItems: Iinteractive[];
}

export interface Iordered extends Iinteractive {
    isSelected: boolean;
    isInitialValue?: boolean;
}
