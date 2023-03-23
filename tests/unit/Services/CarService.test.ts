import { expect } from 'chai';
import { Model } from 'mongoose';
import sinon from 'sinon';
import Car from '../../../src/Domains/Car';
import ICar from '../../../src/Interfaces/ICar';
import CarService from '../../../src/Services/CarService';

describe('Car Service tests', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('Tests if it creates a car with success', async function () {
    const inputCar: ICar = {
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.990,
      doorsQty: 4,
      seatsQty: 5,
    };
    const outputCar: Car = new Car({
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.990,
      doorsQty: 4,
      seatsQty: 5,
    });
    sinon.stub(Model, 'create').resolves(outputCar);

    const carService = new CarService();
    const result = await carService.create(inputCar);
    expect(result).to.deep.equal(outputCar);
  });

  it('Tests if it returns a list of cars with success', async function () {
    const outputList: Car[] = [new Car({
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.990,
      doorsQty: 4,
      seatsQty: 5,
    })];
    sinon.stub(Model, 'find').resolves(outputList);

    const carService = new CarService();
    const result = await carService.find();
    expect(result).to.deep.equal(outputList);
  });

  it('Tests if it returns a car by id with success', async function () {
    const inputId = '634852326b35b59438fbea2f';
    const outputCar: Car = new Car({
      model: 'Marea',
      year: 1992,
      color: 'Red',
      status: true,
      buyValue: 12.000,
      doorsQty: 2,
      seatsQty: 5,
    });
    sinon.stub(Model, 'findById').resolves(outputCar);

    const carService = new CarService();
    const result = await carService.findById(inputId);
    expect(result).to.deep.equal(outputCar);
  });

  it('Tests if it returns an "Car not found" error (findById function)', async function () {
    const inputId = 'invalid_id';
    sinon.stub(Model, 'findById').resolves(null);

    try {
      const carService = new CarService();
      await carService.findById(inputId);
    } catch (error) {
      expect((error as Error).message).to.be.equal('Car not found');
    }
  });

  it('Tests if it returns an updated car with success', async function () {
    const inputId = '634852326b35b59438fbea2f';
    const inputCar: ICar = {
      model: 'Marea',
      year: 1992,
      color: 'Red',
      status: true,
      buyValue: 12.000,
      doorsQty: 2,
      seatsQty: 5,
    };
    const outputUpdatedCar: Car = new Car({
      id: '634852326b35b59438fbea2f',
      model: 'Marea',
      year: 1992,
      color: 'Red',
      status: true,
      buyValue: 12.000,
      doorsQty: 2,
      seatsQty: 5,
    });
    sinon.stub(Model, 'findById').resolves(outputUpdatedCar);
    sinon.stub(Model, 'findByIdAndUpdate').resolves();

    const carService = new CarService();
    const result = await carService.update(inputId, inputCar);
    expect(result).to.deep.equal(outputUpdatedCar);
  });

  it('Tests if it returns an "Car not found" error (update function)', async function () {
    const inputId = 'invalid_id';
    const inputCar: ICar = {
      model: 'Marea',
      year: 1992,
      color: 'Red',
      status: true,
      buyValue: 12.000,
      doorsQty: 2,
      seatsQty: 5,
    };
    sinon.stub(Model, 'findById').resolves(null);

    try {
      const carService = new CarService();
      await carService.update(inputId, inputCar);
    } catch (error) {
      expect((error as Error).message).to.be.equal('Car not found');
    }
  });
});