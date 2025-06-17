import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

const handler = NextAuth({
   debug: true,
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Usuário', type: 'text' },
        password: { label: 'Senha', type: 'password' },
      },
      async authorize(credentials) {
        const res = await fetch('https://www.unimeduberlandia.coop.br/ApisNovoPortal/apiLoginPortal.php', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            usuario: credentials?.username,
            senha: credentials?.password,
          }),
        });

        const data = await res.json();
        const resposta = data[0];

       

        if (res.ok && !resposta.error) {
          return {
            id: resposta.idCliente,
            name: resposta.nome,
            email: resposta.email,
            codTipoCliente: resposta.codTipoCliente,
          };
        }

        return null;
      },
    }),
  ],
  session: {
    strategy: 'jwt',
    maxAge: 1200, //segundos
  },
  secret: process.env.AUTH_SECRET,
  pages: {
    signIn: '/Login',
  },
  callbacks: {
    async jwt({ token, user }) {
      
     
      if (user) {
        token.codTipoCliente = user.codTipoCliente;
      }
      return token;
    },
    async session({ session, token }) {

      
      session.user = session.user ?? {};
      session.user.codTipoCliente = token.codTipoCliente;
      return session;
    },
  },
});

export { handler as GET, handler as POST };
