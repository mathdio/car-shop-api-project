import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';

class CarService {
  private createCarDomain(car: ICar | null): Car | null {
    if (car) {
      return new Car(car);
    }
    return null;
  }

  public async create(car: ICar) {
    const carODM = new CarODM();
    const newCar = await carODM.create(car);
    return this.createCarDomain(newCar);
  }

  public async find() {
    const carODM = new CarODM();
    const allCars = await carODM.find();
    const allCarsArray = allCars.map((car) => this.createCarDomain(car));
    return allCarsArray;
  }

  public async findById(id: string) {
    const carODM = new CarODM();
    const car = await carODM.findById(id);
    if (!car) {
      const error = new Error('Car not found');
      error.name = 'NOT_FOUND';
      throw error;
    }

    return this.createCarDomain(car);
  }

  public async update(id: string, car: ICar) {
    const carODM = new CarODM();
    const updatedCar = await carODM.update(id, car);
    if (!updatedCar) {
      const error = new Error('Car not found');
      error.name = 'NOT_FOUND';
      throw error;
    }
    return this.createCarDomain(updatedCar);
  }
}

export default CarService;