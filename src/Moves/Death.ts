import { indexFromXY, indexToXY } from '../Base/Board'
import { getPlayer, Move, MoveType } from './Util'

const deathMove: Move<any, any> = (board, from) => {
  return board.map((tile, to) => {
    if (tile === null) {
      return { from, to, eats: null, continues: MoveType.FINISH }
    }
    return null
  })
}

export const DeathMove = () => deathMove
