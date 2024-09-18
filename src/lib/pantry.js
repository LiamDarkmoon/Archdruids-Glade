import pantry from 'pantry-node'

const pantryID = "b687669c-4309-4819-9890-88c58002c521"
const pantryClient = new pantry(pantryID)
const options = { parseJSON: true } // optional

export function GetMonsters() {
  pantryClient.basket
  .get('Monsters', options)
  .then((res) => console.log(res))
  /* return contents */
}

