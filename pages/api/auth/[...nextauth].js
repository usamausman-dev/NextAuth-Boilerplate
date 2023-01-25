import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions = {

    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),

        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: { label: "Username", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                // Enter Your DB Logic Here 

                const user = {
                    name: "Usama Usman",
                    image: "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png",
                    email: "uusman004@gmail.com"
                }

                if (credentials.username === "Usama" && credentials.password === "mani123") {
                    return user
                }

                else {
                    return null
                }
            }
        })
    ],
}

export default NextAuth(authOptions)