import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/MotorcycleODM';

class MotorcycleService {
  private createMotorcycleDomain(motorcycle: IMotorcycle | null): Motorcycle | null {
    if (motorcycle) {
      return new Motorcycle(motorcycle);
    }
    return null;
  }

  public async create(motorcycle: IMotorcycle) {
    const motorcycleODM = new MotorcycleODM();
    const newMotorcycle = await motorcycleODM.create(motorcycle);
    return this.createMotorcycleDomain(newMotorcycle);
  }

  public async find() {
    const motorcycleODM = new MotorcycleODM();
    const allMotorcycles = await motorcycleODM.find();
    const motorcyclesArray = allMotorcycles
      .map((motorcycle) => this.createMotorcycleDomain(motorcycle));
    return motorcyclesArray;
  }

  public async findById(id: string) {
    const motorcycleODM = new MotorcycleODM();
    const motorcycle = await motorcycleODM.findById(id);
    if (!motorcycle) {
      const error = new Error('Motorcycle not found');
      error.name = 'NOT_FOUND';
      throw error;
    }
    return this.createMotorcycleDomain(motorcycle);
  }
}

export default MotorcycleService;