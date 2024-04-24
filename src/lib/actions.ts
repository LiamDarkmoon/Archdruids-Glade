'use server'
import z, { number } from 'zod';
import { State } from './Types';
import prisma  from './db';

const characterSchema = z.object({
    name: z.string({required_error: 'Por favor ingresa un nombre.'})
    .trim()
    .min(4,{message: 'El nombre debe tener al menos 4 caracteres.'})
    .max(30,{message: 'El nombre de usuario es muy largo.'}),
    race: z.string(),
    clas: z.string(),
    background: z.string(),
    alignment: z.string(),
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

    const validate = characterSchema.safeParse({
        name: formData.get('name'),
        race: formData.get('race'),
        clas: formData.get('clas'),
        background: formData.get('background'),
        alignment: formData.get('alignment'),
        str: Number(formData.get('str')),
        dex: Number(formData.get('dex')),
        con: Number(formData.get('con')),
        int: Number(formData.get('int')),
        wis: Number(formData.get('wis')),
        cha: Number(formData.get('cha')),
    });

    if (!validate.success) {
        return {
          errors: validate.error.flatten().fieldErrors,
          message: 'Asegurate de completar todos los campos.',
        };
    }
    const { name, race, clas, background, alignment, str, dex, con, int, wis, cha } = validate.data;

    try {
      const newCharacter = await prisma.character.create({
          data: {
              lvl: 1,
              name: name,
              race: race,
              clas: clas,
              background: background,
              alignment: alignment,
              str: str,
              dex: dex,
              con: con,
              int: int,
              wis: wis,
              cha: cha,
          },
      })

      return {
        message: 'Personaje creado con exito',
        newCharacter: newCharacter,
      }
    } catch (error) {
      return { 
        message: 'error en la base de datos no se pudo crear el personaje',
      }
    }

}