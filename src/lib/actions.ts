import z, { number } from 'zod';
import { State } from './Types';
import { characters } from "./placeholders";
import { prisma } from './db';

const characterSchema = z.object({
    name: z.string({required_error: 'Por favor ingresa tu nombre.'})
      .trim()
      .min(4,{message: 'El nombre de usuario debe tener al menos 4 caracteres.'})
      .max(20,{message: 'El nombre de usuario es muy largo.'}),
        str: number({required_error: 'Por favor ingresa el valor'})
        .min(8, { message: 'El valor debe ser mayor de 8.' })
        .max(20,{message: 'El valor debe ser menor de 20.'}),
        dex: number({required_error: 'Por favor ingresa el valor'})
        .min(8, { message: 'El valor debe ser mayor de 8.' })
        .max(20,{message: 'El valor debe ser menor de 20.'}),
        con: number({required_error: 'Por favor ingresa el valor'})
        .min(8, { message: 'El valor debe ser mayor de 8.' })
        .max(20,{message: 'El valor debe ser menor de 20.'}),
        int: number({required_error: 'Por favor ingresa el valor'})
        .min(8, { message: 'El valor debe ser mayor de 8.' })
        .max(20,{message: 'El valor debe ser menor de 20.'}),
        wis: number({required_error: 'Por favor ingresa el valor'})
        .min(8, { message: 'El valor debe ser mayor de 8.' })
        .max(20,{message: 'El valor debe ser menor de 20.'}),
        cha: number({required_error: 'Por favor ingresa el valor'})
        .min(8, { message: 'El valor debe ser mayor de 8.' })
        .max(20,{message: 'El valor debe ser menor de 20.'}),
  });

  export async function createCharacter(prevState: State | undefined, formData: FormData){
    console.log('charisma',Number(formData.get('cha')))
    
    const validate = characterSchema.safeParse({
        name: formData.get('name'),
        str: Number(formData.get('str')),
        dex: Number(formData.get('dex')),
        con: Number(formData.get('con')),
        int: Number(formData.get('int')),
        wis: Number(formData.get('wis')),
        cha: Number(formData.get('cha')),
    });
    console.log(validate.success)

    if (!validate.success) {
        return {
          errors: validate.error.flatten().fieldErrors,
          message: 'campos invalidos no se pudo crear personaje.',
        };
    }
    const character = validate.data;

   /*  const newCharacter = await prisma.user.create({
        data: {
            character.name,
            character.str,
            character.dex,
            character.con,
            character.int,
            character.wis,
            character.cha,
     }
    }) */
  } 