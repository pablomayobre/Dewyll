export enum TileType {
  PAWN = 0,
  CROWNED
}

export enum Player {
  FIRST = 1,
  SECOND
}

export enum Direction {
  UP = -1,
  DOWN = 1
}

export interface Pieces <T,P> {
  type: T
  owner: P
  direction: Direction
}

export const getDirection = (d: Direction): 1|-1 => {
  return Direction.UP ? -1 : 1
}

export type Board <T,P> = Array<(Pieces<T,P> | null)>