const vercelEnv = process.env.VERCEL_ENV

const isProductionBuild = vercelEnv === 'production'
const emitBuild = isProductionBuild

process.exit(emitBuild ? 1 : 0)
