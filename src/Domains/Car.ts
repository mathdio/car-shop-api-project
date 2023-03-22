import ICar from '../Interfaces/ICar';
import Vehicle from './Vehicle';

export default class Car extends Vehicle implements ICar {
  protected _doorsQty: number;
  protected _seatsQty: number;

  constructor(
    model: string,
    year: number,
    color: string,
    buyValue: number,
    doorsQty: number,
    seatsQty: number,
  ) {
    super(model, year, color, buyValue);
    this._doorsQty = doorsQty;
    this._seatsQty = seatsQty;
  }

  public get doorsQty(): number {
    return this._doorsQty;
  }

  public set doorsQty(value: number) {
    this._doorsQty = value;
  }

  public get seatsQty(): number {
    return this._seatsQty;
  }

  public set seatsQty(value: number) {
    this._seatsQty = value;
  }
}