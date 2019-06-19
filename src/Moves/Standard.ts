import { indexFromXY, indexToXY } from '../Base/Board'
import { getPlayer, Move, MoveType, standardDirection } from './Util'

interface StandardProps {
  start: number
  finish: number
  distance: number
}

export const StandardMove = (props: StandardProps): Move<any, any> => {
  return (board, from) => {
    const [player] = getPlayer(board, from)

    const [fromx, fromy] = indexToXY(8, from)
    const overlay = new Array(board.length)

    for (let j = props.start; j < props.finish; j++) {
      for (let i = 1; i < props.distance; i++) {
        const x = fromx + standardDirection.x[j] * i
        const y = fromy + standardDirection.y[j] * i

        if (x > 8 || x < 1 || y > 8 || y < 1) {
          break
        }

        const to = indexFromXY(8, x, y)
        const tile = board[to]

        if (tile === null || tile.owner !== player) {
          const move = { from, to, eat: null, continues: MoveType.FINISH }
          overlay[to] = tile === null ? move : { ...move, eat: to }
        }

        if (tile !== null) {
          break
        }
      }
    }

    return overlay
  }
}
