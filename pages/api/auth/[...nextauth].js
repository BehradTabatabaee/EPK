import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import { db } from '@/prisma/client'
export const authOptions = {
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: "نام کاربری", type: "text", placeholder: "نام کاربری" },
        password: { label: "رمز", type: "password" },
      },
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied
        let user = await db.user.findFirst({
            where:{
                user_name : credentials.username,
                password : credentials.password
            }
        })

        if (user) {
          // Any object returned will be saved in `user` property of the JWT
          return {name : user.name};
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null;

          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      },
    }),
  ],
};
export default NextAuth(authOptions);
