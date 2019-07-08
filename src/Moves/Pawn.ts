import { indexFromXY, indexToXY } from '../Base/Board'
import { getPlayer, MoveOverlay, MoveType } from './Util'

const pawnMove: MoveOverlay<any, any> = (board, from) => {
  const [player, direction] = getPlayer(board, from)

  const [fromx, fromy] = indexToXY(8, from)
  const overlay = new Array(board.length)

  // Forward
  for (let i = 1; i <= 2; i++) {
    const y = fromy + i * direction
    const to = indexFromXY(8, fromx, y)

    if (y < 1 || y > 8 || board[to] !== null) {
      break
    }
    overlay[to] = { from, to, eats: null, continues: MoveType.FINISH }
  }

  // Kill moves
  const killy = fromy + direction
  if (killy >= 1 && killy <= 8) {
    for (let i = -1; i <= 1; i += 2) {
      const x = fromx + i
      const to = indexFromXY(8, x, killy)

      const tile = board[to]
      if (x >= 1 && x <= 8 && tile !== null && tile.owner !== player) {
        overlay[to] = { from, to, eats: to, continues: MoveType.FINISH }
      }
    }
  }

  return overlay
}

export const PawnMove = () => pawnMove
