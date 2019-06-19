export const indexToXY = (width: number, index: number): [number, number] => {
  return [ (index % width) + 1, Math.floor(index / width) + 1 ]
}

export const indexFromXY = (width: number, x: number, y: number): number => {
  return (x-1) + (y-1) * width
}