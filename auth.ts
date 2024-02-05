import NextAuth from "next-auth"
import{PrismaAdapter} from "@auth/prisma-adapter"
import GitHub from "next-auth/providers/github"

import authConfig from "./auth.config"
import db from "@/lib/prismadb"

export const {
  handlers: { GET, POST },
  auth,
} = NextAuth({
  adapter:PrismaAdapter(db),
  session:{strategy:"jwt"},
  ...authConfig
})