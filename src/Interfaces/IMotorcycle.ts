import Category from '../utils/Category';
import IVehicle from './IVehicle';

export default interface IMotorcycle extends IVehicle {
  category: Category;
  engineCapacity: number;
}