import { Board, getDirection } from '../Base/Pieces'

export interface Action<M> {
  from: number
  to: number
  eats: number | null
  continues: M
}

export type Overlay = Array<Action<MoveType> | null>

export type MoveOverlay<T, P> = (
  board: Board<T, P>,
  from: number,
) => Overlay | null

/*
  0..3  = (Bishop, Queen, King) down-right, up-right, down-left, up-left
  4..7  = (Rook, Queen, King)   right, left, down, up
  8..15 = (Knight)              all L shapes possible
*/
export const standardDirection = {
  x: [1, 1, -1, -1, 1, -1, 0, 0, 2, -2, -2, 2, 1, -1, -1, 1],
  y: [1, -1, 1, -1, 0, 0, 1, -1, 1, 1, -1, -1, 2, 2, -2, -2],
}

export const getPlayer = <T, P>(
  board: Board<T, P>,
  from: number,
): [P, 1 | -1] => {
  const tile = board[from]
  if (tile === null) {
    throw new Error('Selected tile is empty') // Hopefully this will never happen
  }
  return [tile.owner, getDirection(tile.direction)]
}

export enum MoveType {
  KING = 'King',
  QUEEN = 'Queen',
  BISHOP = 'Bishop',
  ROOK = 'Rook',
  KNIGHT = 'Knight',
  PAWN = 'Pawn',
  DEATH = 'Death',
  DRAUGHT = 'Draught',
  KILLER_DRAUGHT = '!Draught',
  FINISH = '!Finish',
}
