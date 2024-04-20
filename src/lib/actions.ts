import z, { number } from 'zod';
import { State } from './Types';
import { characters } from "./placeholders";

const characterSchema = z.object({
    name: z.string({required_error: 'Por favor ingresa tu nombre.'})
      .trim()
      .min(4,{message: 'El nombre de usuario debe tener al menos 4 caracteres.'})
      .max(20,{message: 'El nombre de usuario es muy largo.'}),
    clas: z.string({required_error: 'Por favor ingresa la contraseña.'}),
    race: z.string({required_error: 'Por favor elige una raza'}),
    background: z.string({required_error: 'Por favor ingresa tu correo.'}),
    alignment: z.string({required_error: 'Por favor ingresa tu correo.'}),
    stats: z.object({
        str: number({required_error: 'Por favor ingresa el valor'})
        .min(1)
        .max(2),
        dex: number({required_error: 'Por favor ingresa el valor'})
        .min(1)
        .max(2),
        con: number({required_error: 'Por favor ingresa el valor'})
        .min(1)
        .max(2),
        int: number({required_error: 'Por favor ingresa el valor'})
        .min(1)
        .max(2),
        wis: number({required_error: 'Por favor ingresa el valor'})
        .min(1)
        .max(2),
        cha: number({required_error: 'Por favor ingresa el valor'})
        .min(1)
        .max(2)
    }),
  });

  export type Character = z.infer<typeof characterSchema>;

  export const createCharacter = (prevState: State, formData: FormData) => {
        
    const validate = characterSchema.safeParse({
        name: formData.get('name'),
        clas: formData.get('clas'),
        race: formData.get('race'),
        background: formData.get('background'),
        alignment: formData.get('alignment'),
        stats: {
            str: formData.get('str'),
            dex: formData.get('dex'),
            con: formData.get('con'),
            int: formData.get('int'),
            wis: formData.get('wis'),
            cha: formData.get('cha'),
        }
    });

    if (!validate.success) {
        return {
          errors: validate.error.flatten().fieldErrors,
          message: 'campos invalidos no se pudo crear personaje.',
        };
    }

    const character = validate.data;

    characters.push(character);
    
  } 