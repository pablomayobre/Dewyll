import { DeathMove } from './Death'
import { DraughtMove } from './Draught'
import { PawnMove } from './Pawn'
import { StandardMove } from './Standard'
import { MoveOverlay, MoveType } from './Util'

type OverlaysMap = Map<MoveType, MoveOverlay<any, any>>
export const Moves: OverlaysMap = new Map()

// Standard Moves
Moves.set(MoveType.KING, StandardMove({ start: 1, finish: 8, distance: 1 }))
Moves.set(MoveType.QUEEN, StandardMove({ start: 1, finish: 8, distance: 7 }))
Moves.set(MoveType.BISHOP, StandardMove({ start: 1, finish: 4, distance: 7 }))
Moves.set(MoveType.ROOK, StandardMove({ start: 5, finish: 8, distance: 7 }))
Moves.set(MoveType.KNIGHT, StandardMove({ start: 9, finish: 16, distance: 1 }))

// Draught Moves
Moves.set(MoveType.DRAUGHT, DraughtMove({ killOnly: false }))
Moves.set(MoveType.KILLER_DRAUGHT, DraughtMove({ killOnly: true }))

// Pawn Move
Moves.set(MoveType.PAWN, PawnMove())
// Death Move
Moves.set(MoveType.DEATH, DeathMove())
// Finish Move
Moves.set(MoveType.FINISH, () => null)

export { Action, MoveOverlay as Move, MoveType, Overlay } from './Util'
