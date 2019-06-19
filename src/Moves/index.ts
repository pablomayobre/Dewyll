import { DeathMove } from './Death';
import { DraughtMove } from './Draught'
import { PawnMove } from './Pawn'
import { StandardMove } from './Standard'
import { Move, MoveType } from './Util'

type MoveMap = Map<MoveType, Move<any, any>>
export const Moves: MoveMap = new Map()

Moves.set(MoveType.KING, StandardMove({ start: 1, finish: 8, distance: 1 }))
Moves.set(MoveType.QUEEN, StandardMove({ start: 1, finish: 8, distance: 7 }))
Moves.set(MoveType.BISHOP, StandardMove({ start: 1, finish: 4, distance: 7 }))
Moves.set(MoveType.ROOK, StandardMove({ start: 5, finish: 8, distance: 7 }))
Moves.set(MoveType.KNIGHT, StandardMove({ start: 9, finish: 16, distance: 1 }))

Moves.set(MoveType.DRAUGHT, DraughtMove({ killOnly: false }))
Moves.set(MoveType.KILLER_DRAUGHT, DraughtMove({ killOnly: true }))

Moves.set(MoveType.PAWN, PawnMove())
Moves.set(MoveType.DEATH, DeathMove())

Moves.set(MoveType.FINISH, () => null)

export { Action, Move, MoveType, Overlay } from './Util'
