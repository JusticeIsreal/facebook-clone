import NextAuth from "next-auth";
import FacebookProvider from "next-auth/providers/facebook";

const callbacks = {
  async signIn(user, account, profile) {
    if (account.provider === "facebook") {
      // You can access the accessToken for the account with this:
      // account.accessToken
      return true;
    }
    // Return false to deny access
    return false;
  },
  async redirect(url, baseUrl) {
    return url.startsWith(baseUrl) ? url : baseUrl;
  },
};

export default NextAuth({
  providers: [
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
      scope: "email",
    }),
  ],
  callbacks,
  secret: process.env.NEXTAUTH_SECRET,
  jwt: {
    secret: process.env.JWT_SECRET,
  },
  pages: {
    signIn: "/auth/signin",
  },
  session: {
    jwt: true,
  },
});
