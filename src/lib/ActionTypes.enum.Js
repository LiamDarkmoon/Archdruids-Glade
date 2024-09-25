export const actionTypes = ['Accion', 'Accion Rapida', 'Movimiento', 'Reaccion']

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
        name: 'Correr',
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
        bonus: '+0',
        damage: '100',
        type: 'Contundente',
        range: '100 pies'
    }, 
    {
        name: 'Mandoble',
        description: 'Ataca al enemigo con tu Mandoble',
        bonus: '+5',
        damage: '2d6+3',
        type: 'Cortante',
        range: '5 pies'
    }, 
    {
        name: 'Arco Corto',
        description: 'Ataque a distancia con tu Arco',
        bonus: '+4',
        damage: '1d8+2',
        type: 'Perforante',
        range: '80 pies'
    }, 
    {
        name: 'Daga',
        description: 'Apuñala atu enemigo o lanzale tu daga',
        bonus: '+4',
        damage: '1d4+2',
        type: 'Perforante',
        range: '30 pies'
    }
]