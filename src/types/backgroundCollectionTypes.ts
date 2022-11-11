export interface Iinteractive {
    id: number;
    image: string;
    count: number;
    isSelected: boolean;
}

export interface Ibackground {
    id: number;
    playgroundImage: string;
    barImage: string;
    interactiveItems: Iinteractive[];
}

export interface Iordered extends Iinteractive {
    isSelected: boolean;
}
