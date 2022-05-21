type _NumbersFrom0ToN<Nr extends number> = Nr extends Nr
  ? number extends Nr
    ? number
    : Nr extends 0
    ? never
    : _NumbersFrom0ToNRec<Nr, [], 0>
  : never;

type _NumbersFrom0ToNRec<
  Nr extends number,
  Counter extends any[],
  Accumulator extends number
> = Counter["length"] extends Nr
  ? Accumulator
  : _NumbersFrom0ToNRec<Nr, [any, ...Counter], Accumulator | Counter["length"]>;

type HealthRange<Start extends number, End extends number> = Exclude<
  _NumbersFrom0ToN<End>,
  _NumbersFrom0ToN<Start>
>;

interface IPlayer extends ISprite {
  health: HealthRange<0, 10>;
}

class Player implements IPlayer {
  width: number;
  height: number;
  health: HealthRange<0, 10>;
  position: IPosition;

  constructor({ width, height, health, position }: IPlayer) {
    this.width = width || 25;
    this.height = height || 75;
    this.health = health || 3;
    this.position = position || { x: 0, y: 0 };
  }
}

export default Player;
