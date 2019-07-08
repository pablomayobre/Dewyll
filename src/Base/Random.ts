import { prng, State, xor4096 } from 'seedrandom'
import { sha256 } from 'sha.js'

const salt = 'Dewyll-Random:'

export type RandomGenerator = prng

export const newRandomGenerator = (): [RandomGenerator, string] => {
  // Creating a new seed
  // Hex string from hashing some salt + a randomized float with SHA256
  const seed = new sha256()
    .update(salt + Math.random().toFixed(18))
    .digest('hex')

  // Creating a seeded random generator
  const generator = xor4096(seed, { state: true })

  return [generator, seed] // Seed can be used to identify this match
}

export const deserializeRandomGenerator = (state: State): RandomGenerator => {
  // Recover the generator from state (seed is unneeded)
  return xor4096('', { state })
}
