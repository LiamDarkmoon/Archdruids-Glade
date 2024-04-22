export interface character {
        name: string,
        clas: string,
        race: string,
        background: string,
        alignment: string,
        stats: {
                str: number,
                dex: number,
                con: number,
                int: number,
                wis: number,
                cha: number,
        }
/*         level?: number,
        armorClass?: number,
        initiative?: number,
        speed?: number,
        hp?: number,
        equipment?: string, */
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