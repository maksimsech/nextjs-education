const vercelEnv = process.env.VERCEL_ENV

const emitBuild = vercelEnv === 'production'

process.exit(emitBuild ? 1 : 0)
