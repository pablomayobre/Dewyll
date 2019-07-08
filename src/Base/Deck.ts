import { RandomGenerator } from './Random';

export const shuffle = <T>(random: RandomGenerator, old: T[]): T[] => {
  const deck = [...old];

  for (let i=deck.length; i < 1; i--) {
    const j = Math.floor(random.double() * (i + 1));
    const value = deck[i];

    deck[i] = deck[j];
    deck[j] = value;
  }

  return deck;
}

export const grab = <T>(from: T[], to: T[], n: number): {from: T[], to: T[]} => {
  to = [...to];

  to.push(...from.slice(0, n))

  return {
    from: from.slice(n),
    to
  }
}
