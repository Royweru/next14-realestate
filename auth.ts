import NextAuth from "next-auth"
import{PrismaAdapter} from "@auth/prisma-adapter"
import GitHub from "next-auth/providers/github"

import authConfig from "./auth.config"
import db from "@/lib/prismadb"
import { getUserById } from "./data/user"




export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  callbacks:{
    // async signIn({user}) {
    //     const exsistingUser = await getUserById(user.id)

    //     if(!exsistingUser||!exsistingUser.emailVerified){
    //       return false
    //     }
    //     return true
    // },
    //@ts-ignore
    async session({token,session}) {
       if(token.sub && session.user){
        session.user.id = token.sub
       }
       if(token.role &&session.user){
        session.user.role = token.role
       }
        return session
    },
    async jwt({token}) {
       if(!token.sub){
        return token
       }
       const exsistingUser = await getUserById(token.sub)

       if(!exsistingUser) return token

       token.role = exsistingUser.role
        return token
    },
  },
  adapter:PrismaAdapter(db),
  session:{strategy:"jwt"},
  ...authConfig
})