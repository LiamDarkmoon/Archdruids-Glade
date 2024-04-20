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
        tempHp?: number,
        proficiency?: number,
        personalityTraits?: string,
        ideals?: string,
        bonds?: string,
        flaws?: string,
        featuresAndTraits?: string,
        equipment?: string, */
}

export type State = {
        errors?: {
            name?: string[] | undefined;
            password?: string[] | undefined;
            confirm?: string[] | undefined;
            email?: string[] | undefined;
        };
        message: string | null;
}