import IMotorcycle from '../Interfaces/IMotorcycle';
import Category from '../utils/Category';
import Vehicle from './Vehicle';

export default class Motorcycle extends Vehicle {
  private category: Category;
  private engineCapacity: number;

  constructor(motorcycle: IMotorcycle) {
    super(motorcycle);
    this.category = motorcycle.category;
    this.engineCapacity = motorcycle.engineCapacity;
  }
}