export const actionTypes = ['Accion', 'Accion Rapida', 'Movimiento', 'Reaccion']

export const actionsT =  {
    action: {
        name: 'Accion', // name of the action
        taken: false, // has the action been taken
    },
    bonusAction: {
        name: 'Accion Rapida', // name of the bonus action
        taken: false, // has the bonus action been taken
    },
    movement: {
        name: 'Movimiento', // name of the movement
        taken: false, // has the movement been taken
    },
}

export const bonusActions = [
    'Posion',
    'Conjuro Rapido',
]

export const actions = [
    {
        name: 'Atacar',
        description: 'Ataca al enemigo con tu arma'
    },
    {
        name: 'Conjurar',
        description: 'Lanza un hechizo'
    },
    {
        name: 'Correrr',
        description: 'Duplica la velocidad de movimiento'
    },
    {
        name: 'Defenderse',
        description: 'Reduce el daño recibido'
    },
    {
        name: 'Retirarse',
        description: 'Evita ataques de oportunidad'
    },
]

export const attacks = [
    {
        name: 'Piedra',
        description: 'Lanza una piedra a la cara de tu enemigo',
        bonus: 0,
        damage: '1d100 + 0',
        type: 'Contundente',
        range: '100 pies'
    }, 
    {
        name: 'Mandoble',
        description: 'Ataca al enemigo con tu Mandoble',
        bonus: 5,
        damage: '2d6 + 3',
        type: 'Cortante',
        range: '5 pies'
    }, 
    {
        name: 'Arco Corto',
        description: 'Ataque a distancia con tu Arco',
        bonus: 4,
        damage: '1d8 + 2',
        type: 'Perforante',
        range: '80 pies'
    }, 
    {
        name: 'Daga',
        description: 'Apuñala atu enemigo o lanzale tu daga',
        bonus: 4,
        damage: '1d4 + 2',
        type: 'Perforante',
        range: '30 pies'
    }
]
export const spells = [
    {
        name: 'Escudo',
        description: 'Un escudo de energía invisible te protege de los ataques',
        castingTime: 'reaccion',
        duration: 1,
        type: 'buff',
        range: 'personal'
    }, 
    {
        name: 'Armadura de Mago',
        description: 'una armadura de fuerza invisible te proteje de los ataques externos',
        castingTime: '1 acción',
        duration: 10,
        effect: 'Armadura= 13 + dex',
        type: 'buff',
        range: 'personal'
    } 
]

export const potions = [
    {
        name: 'Poción de Curación',
        description: 'Recupera 2d4 + 2 puntos de vida',
        effect: '2d4 + 2'
    }
]