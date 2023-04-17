import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import GithubProvider from "next-auth/providers/github";
import TwitterProvider from "next-auth/providers/twitter";
import Auth0Provider from "next-auth/providers/auth0";
import Google from "next-auth/providers/google";
// import AppleProvider from "next-auth/providers/apple"
// import EmailProvider from "next-auth/providers/email"

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options

let clientId: string;
let clientSecret: string;

// ローカル環境の場合
if (process.env.NEXT_PUBLIC_NODE_ENV === "vercel_development") {
    console.log("ローカル");
    clientId = process.env.GOOGLE_ID_DEVELOPMENT!;
    clientSecret = process.env.GOOGLE_SECRET_DEVELOPMENT!;
} else if (process.env.NEXT_PUBLIC_NODE_ENV === "vercel_production") {
    console.log("本番");
    clientId = process.env.GOOGLE_ID_PRODUCTION!;
    clientSecret = process.env.GOOGLE_SECRET_PRODUCTION!;
}

// ローカル環境
export const authOptions: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: clientId!,
            clientSecret: clientSecret!,
        }),
    ],
    theme: {
        colorScheme: "light",
    },
    callbacks: {
        async jwt({ token }) {
            token.userRole = "admin";
            return token;
        },
    },
    secret: "Nm/ZlOOMNvI19eRNYv8HdyJqFJwbdyD8UxjmY2HQJmU=",
};

export default NextAuth(authOptions);
