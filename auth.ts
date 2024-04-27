import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import GoogleProvider from "@auth/core/providers/google"
import { z } from 'zod';
import { sql } from '@vercel/postgres';
import bcrypt from 'bcrypt';
import { PrismaAdapter } from "@auth/prisma-adapter"
import prisma from './app/lib/db';

async function getUser(email: string): Promise<any> {
    try {
        const user = await prisma.user.findUnique({
            where: {
              email: email,
            },
          });
          console.log(user)
          return user;
    } catch (error) {
      throw new Error('Error al obtener el usuario');
    }
  }
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
        async authorize(credentials) {
          const parsedCredentials = z
            .object({ email: z.string().email(), password: z.string().min(6) })
            .safeParse(credentials);

            if (parsedCredentials.success) {
                const { email, password } = parsedCredentials.data;
                console.log(email, password);
                const user = await getUser(email);
                console.log(user);
                if (!user) return null;
                const passwordsMatch = await bcrypt.compare(password, user.password);
                console.log(passwordsMatch);

                console.log(user);
                if (passwordsMatch) return user;
            }
          return null;
        },
      }),
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      }),
  ],
});