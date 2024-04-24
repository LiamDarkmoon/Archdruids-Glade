export interface character {
        id: number,
        lvl: number,
        name: string,
        clas: string,
        race: string,
        background: string,
        alignment: string,
                str: number,
                dex: number,
                con: number,
                int: number,
                wis: number,
                cha: number,
}

export type State = {
        errors?: {
            name?: string[] | undefined;
            str?: string[] | undefined;
            dex?: string[] | undefined;
            con?: string[] | undefined;
            int?: string[] | undefined;
            wis?: string[] | undefined;
            cha?: string[] | undefined;
        };
        message: string | null;
}