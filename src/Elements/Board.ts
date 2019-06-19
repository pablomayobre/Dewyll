import { Board, Direction, Pieces, Player, TileType } from "../Base/Pieces";

const pieces: Array<Pieces<TileType,Player>> = [
  {type: TileType.PAWN, owner: Player.FIRST, direction: Direction.UP},
  {type: TileType.CROWNED, owner: Player.FIRST, direction: Direction.UP},
  {type: TileType.PAWN, owner: Player.SECOND, direction: Direction.DOWN},
  {type: TileType.CROWNED, owner: Player.SECOND, direction: Direction.DOWN},
]

const piece = (id:number):(Pieces<TileType,Player>|null) => {
  return id !== 0 ? {...pieces[id - 1]} : null
}

const board = [
  1,1,1,2,2,1,1,1,
  1,1,1,1,1,1,1,1,
  0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,
  3,3,3,3,3,3,3,3,
  3,3,3,4,4,3,3,3
]

export const createBoard = (): Board<TileType,Player> => {
  return board.map((id) => {
    return piece(id)
  })
}