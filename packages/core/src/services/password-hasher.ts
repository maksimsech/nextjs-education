import { webcrypto } from 'node:crypto'


export async function hashPassword(password: string) {
    // from: https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/digest
    const encodedPassword = new TextEncoder().encode(password)
    const passwordHash = await webcrypto.subtle.digest('SHA-256', encodedPassword)

    return Array.from(new Uint8Array(passwordHash))
        .map(b => b.toString(16).padStart(2, '0'))
        .join('')
}
