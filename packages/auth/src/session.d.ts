import { DefaultSession } from 'next-auth'

export declare module 'next-auth' {
  // eslint-disable-next-line no-unused-vars
  export interface Session {
    user: {
        id: string,
        email: string,
    } & DefaultSession['user']
  }
}
