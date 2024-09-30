import pantry from 'pantry-node'

const pantryID = "48d1f59a-c11d-4507-b414-ef75ba74ef2d"
const pantryClient = new pantry(pantryID)
const options = { parseJSON: true } // optional

export function GetMonsters() {
  pantryClient.basket
  .get('characters', options)
  .then((res) => console.log(res))
  /* return contents */
}

