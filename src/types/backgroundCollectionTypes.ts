export interface Iinteractive {
    id: number;
    image: string;
    count: number;
}

export interface Ibackground {
    id: number;
    playgroundImage: string;
    barImage: string;
    interactiveItems: Iinteractive[];
}
