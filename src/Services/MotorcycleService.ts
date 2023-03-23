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

  public static idNotFoundError() {
    const error = new Error('Motorcycle not found');
    error.name = 'NOT_FOUND';
    throw error;
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
    if (!motorcycle) MotorcycleService.idNotFoundError();
    return this.createMotorcycleDomain(motorcycle);
  }

  public async update(id: string, motorcycle: IMotorcycle) {
    const motorcycleODM = new MotorcycleODM();
    const updatedMotorcycle = await motorcycleODM.update(id, motorcycle);
    if (!updatedMotorcycle) MotorcycleService.idNotFoundError();
    return this.createMotorcycleDomain(updatedMotorcycle);
  }

  public async delete(id: string) {
    const motorcycleODM = new MotorcycleODM();
    const deleted = await motorcycleODM.delete(id);
    if (!deleted) MotorcycleService.idNotFoundError();
    return deleted;
  }
}

export default MotorcycleService;