import ICar from '../Interfaces/ICar';
import Vehicle from './Vehicle';

export default class Car extends Vehicle {
  private doorsQty: number;
  private seatsQty: number;

  constructor(car: ICar) {
    super({
      model: car.model,
      year: car.year,
      color: car.color,
      buyValue: car.buyValue,
      id: car.id, 
      status: car.status });
    this.doorsQty = car.doorsQty;
    this.seatsQty = car.seatsQty;
  }

  public getDoorsQty(): number {
    return this.doorsQty;
  }

  public setDoorsQty(value: number) {
    this.doorsQty = value;
  }

  public getSeatsQty(): number {
    return this.seatsQty;
  }

  public setSeatsQty(value: number) {
    this.seatsQty = value;
  }
}