import { indexFromXY, indexToXY } from '../Base/Board'
import { getPlayer, MoveOverlay, MoveType } from './Util'

const deathMove: MoveOverlay<any, any> = (board, from) => {
  return board.map((tile, to) => {
    if (tile === null) {
      return { from, to, eats: null, continues: MoveType.FINISH }
    }
    return null
  })
}

export const DeathMove = () => deathMove
