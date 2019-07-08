import { MoveType } from '../Moves'

// Cards are represented by their numerical id which starts at 1 and goes up to 54
// 0 to 12 are Hearts, 13 to 25 are Diamonds, 26 to 38 are Spades, 39 to 51 are Clubs, 52 and 53 are Jokers

enum Color {
  RED,
  BLACK,
}

enum CardType {
  HEARTS,
  DIAMONDS,
  SPADES,
  CLUBS,
  JOKERS,
}

const validID = (id: number) => {
  if (id > 53) {
    throw new Error(
      'Card is out of bounds, id should be a number between 0 and 53',
    )
  }
}

export const getMoveType = (id: number): MoveType => {
  const value = getCardValue(id)
  switch (value) {
    case 0:
        return MoveType.DRAUGHT
    case 1:
      if (getCardType(id) === CardType.SPADES) {
        return MoveType.DEATH
      } else {
        return MoveType.KING
      }
    case 2:
    case 3:
    case 4:
    case 5:
      return MoveType.PAWN
    case 6:
    case 7:
    case 8:
    case 9:
      if (getCardColor(id) === Color.RED) {
        return MoveType.BISHOP
      } else {
        return MoveType.ROOK
      }
    case 10:
    case 11:
      return MoveType.KNIGHT
    case 12:
      return MoveType.QUEEN
    case 13:
      return MoveType.KING
    default:
      return MoveType.FINISH
  }
}

export const getCardValue = (id: number): number => {
  if (id > 51) {
    return 0
  }

  return Math.floor(id / 13) + 1
}

export const getCardType = (id: number): CardType => {
  validID(id)

  if (id < 13) {
    return CardType.HEARTS
  } else if (id < 26) {
    return CardType.DIAMONDS
  } else if (id < 39) {
    return CardType.SPADES
  } else if (id < 52) {
    return CardType.CLUBS
  }

  return CardType.JOKERS
}

export const getCardColor = (id: number): Color => {
  validID(id)

  if (id < 26) {
    return Color.RED
  } else if (id === 52) {
    return Color.RED
  }

  return Color.BLACK
}

let keys = [...Array(53).keys()]
keys = [...keys, ...keys]

export const newDeck = (): number[] => {
  return [...keys]
}