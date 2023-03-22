import IVehicle from '../Interfaces/IVehicle';

export default class Vehicle implements IVehicle {
  protected _id: string | undefined;
  protected _model: string;
  protected _year: number;
  protected _color: string;
  protected _buyValue: number;
  protected _status?: boolean;

  constructor(
    model: string,
    year: number,
    color: string,
    buyValue: number,
  ) {
    this._model = model;
    this._year = year;
    this._color = color;
    this._buyValue = buyValue;
    this._status = false;
  }

  public getId() {
    return this._id;
  }

  public set id(value: string) {
    this._id = value;
  }

  public get model(): string {
    return this._model;
  }

  public set model(value: string) {
    this._model = value;
  }

  public get year(): number {
    return this._year;
  }

  public set year(value: number) {
    this._year = value;
  }

  public get color(): string {
    return this._color;
  }

  public set color(value: string) {
    this._color = value;
  }

  public get buyValue(): number {
    return this._buyValue;
  }

  public set buyValue(value: number) {
    this._buyValue = value;
  }

  // getStatus(): boolean {
  //   return this.status;
  // }
}