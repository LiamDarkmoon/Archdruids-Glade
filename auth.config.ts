import type { NextAuthConfig } from 'next-auth';
 
export const authConfig = {
  pages: {
    signIn: '/auth/login',
    newUser: '/auth/register',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnLogin = nextUrl.pathname === '/auth/login';
      
      // If the user is not logged in, redirect to the login page
        if (isLoggedIn) {
          if(isOnLogin){
            return Response.redirect(new URL('/', nextUrl));
          }
          return true;
        } return false;
    },
  },
  providers: [], 
} satisfies NextAuthConfig;
