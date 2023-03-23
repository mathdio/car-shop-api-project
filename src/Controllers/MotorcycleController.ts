import { NextFunction, Request, Response } from 'express';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleService from '../Services/MotorcycleService';

class MotorcycleController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: MotorcycleService;
  
  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new MotorcycleService();
  }

  public static isValidId(value: string) {
    if (value.length !== 24) {
      const error = new Error('Invalid mongo id');
      error.name = 'UNPROCESSABLE_ENTITY';
      throw error;
    }
  }

  public async create() {
    const motorcycle: IMotorcycle = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      buyValue: this.req.body.buyValue,
      status: this.req.body.status,
      category: this.req.body.category,
      engineCapacity: this.req.body.engineCapacity,
    };

    try {
      const newMotorcycle = await this.service.create(motorcycle);
      return this.res.status(201).json(newMotorcycle);
    } catch (error) {
      this.next(error);
    }
  }

  public async find() {
    const motorcycles = await this.service.find();
    return this.res.status(200).json(motorcycles);
  }

  public async findById() {
    try {
      const { id } = this.req.params;
      MotorcycleController.isValidId(id);
      const motorcycle = await this.service.findById(id);
      return this.res.status(200).json(motorcycle);
    } catch (error) {
      this.next(error);
    }
  }

  public async update() {
    try {
      const { id } = this.req.params;
      const motorcycle = { ...this.req.body };
      MotorcycleController.isValidId(id);
      const updatedMotorcycle = await this.service.update(id, motorcycle);
      return this.res.status(200).json(updatedMotorcycle);
    } catch (error) {
      this.next(error);
    }
  }
}

export default MotorcycleController;