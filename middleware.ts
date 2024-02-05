
import authConfig from "./auth.config";

import NextAuth from "next-auth";
import {
    DEFAULT_LOGIN_REDIRECT,
    apiAuthPrefix,
    authRoutes,
    publicRoutes
}from "@/routes"
const {auth}  = NextAuth(authConfig)
export default auth((req)=>{
    const {nextUrl} = req
    const isLoggedIn = !!req

    const isApiAuthRoute =nextUrl.pathname.startsWith(apiAuthPrefix)
    const isPublicRoute = publicRoutes.includes(nextUrl.pathname)
    const isAuthRoutes = authRoutes.includes(nextUrl.pathname)

    if(isApiAuthRoute){
        return null
    }

    if(isAuthRoutes){
        if(isLoggedIn){
            return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT,nextUrl))
        }
        return null
    }

  if(!isLoggedIn && !isPublicRoute){
    return Response.redirect(new URL("/auth/sign-in",nextUrl))
  }
  return null
})
export const config = {
    matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
  };