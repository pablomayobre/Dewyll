import { indexFromXY, indexToXY } from '../Base/Board'
import { getPlayer, MoveOverlay, MoveType, standardDirection } from './Util'

interface DraughtProps {
  killOnly: boolean
}

export const DraughtMove = (props: DraughtProps): MoveOverlay<any, any> => {
  return (board, from) => {
    const [player] = getPlayer(board, from)

    const [fromx, fromy] = indexToXY(8, from)
    const overlay = new Array(board.length)

    let eat = null
    let count = 0

    // Do a Bishop move
    for (let j = 0; j < 4; j++) {
      for (let i = 1; i < 7; i++) {
        const x = fromx + standardDirection.x[j] * i
        const y = fromy + standardDirection.y[j] * i

        if (x > 8 || x < 1 || y > 8 || y < 1) {
          break
        }

        const to = indexFromXY(8, x, y)
        const tile = board[to]

        // From here it's different, we only check for empty tiles
        if (tile === null) {
          // If we already passed over an enemy token then it's a killing move
          if (eat !== null) {
            overlay[to] = { from, to, eat, continues: MoveType.KILLER_DRAUGHT }
            count++

            break // And you can't go forward anymore
          } else if (!props.killOnly) {
            // We only care about empty tiles before the first kill
            overlay[to] = { from, to, eat: null, continues: MoveType.FINISH }
            count++
          }
        } else {
          if (tile.owner !== player && eat === null) {
            // When the tile is not empty, and it's an enemy token, it can be a killing move
            eat = to
          } else {
            // If it's one of our own tokens, we can't go forward
            break
          }
        }
      }

      eat = null // Reset eat for next iteration
    }

    return count > 0 ? null : overlay
  }
}
