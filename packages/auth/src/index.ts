export * from './options'
// @ts-expect-error Nextjs screams on this error.
// It might be better to build this separately tbh. Nextjs is such problem sometimes.
export * from './session.d.ts'
export { getServerSession } from 'next-auth/next'
