import { NextFunction, Request, Response } from 'express';
import ICar from '../Interfaces/ICar';
import CarService from '../Services/CarService';

class CarController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: CarService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new CarService();
  }

  public static isValidId(value: string): boolean {
    if (value.length !== 24) {
      return false;
    }
    return true;
  }

  public async create() {
    const car: ICar = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      buyValue: this.req.body.buyValue,
      doorsQty: this.req.body.doorsQty,
      seatsQty: this.req.body.seatsQty,
      status: this.req.body.status,
    };

    try {
      const newCar = await this.service.create(car);
      return this.res.status(201).json(newCar);
    } catch (error) {
      this.next(error);
    }
  }

  public async find() {
    const allCars = await this.service.find();
    return this.res.status(200).json(allCars);
  }

  public async findById() {
    try {
      const { id } = this.req.params;
      if (!CarController.isValidId(id)) {
        const error = new Error('Invalid mongo id');
        error.name = 'UNPROCESSABLE_ENTITY';
        throw error;
      }

      const car = await this.service.findById(id);
      return this.res.status(200).json(car);
    } catch (error) {
      this.next(error);
    }
  }

  public async update() {
    try {
      const { id } = this.req.params;
      if (!CarController.isValidId(id)) {
        const error = new Error('Invalid mongo id');
        error.name = 'UNPROCESSABLE_ENTITY';
        throw error;
      }
      const car = { ...this.req.body };
      const updatedCar = await this.service.update(id, car);
      return this.res.status(200).json(updatedCar);
    } catch (error) {
      this.next(error);
    }
  }
}

export default CarController;