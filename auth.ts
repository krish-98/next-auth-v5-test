import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'example@mail.com',
        },
        password: {
          label: 'Password',
          type: 'password',
          placeholder: '*******',
        },
      },
      authorize: async (credentials) => {
        let user = null

        user = {
          id: '1',
          email: 'murali@gmail.com',
          password: '123456',
        }

        console.log('credentials', credentials)
        console.log('user', user)

        if (!user) {
          console.log('Invalid Credetials')
          return null
        }

        return user
      },
    }),
  ],
})
