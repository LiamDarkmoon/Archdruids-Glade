import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import GoogleProvider from "@auth/core/providers/google"

export const { handlers, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      }),
  ],
});