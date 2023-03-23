import { expect } from 'chai';
import { Model } from 'mongoose';
import sinon from 'sinon';
import Car from '../../../src/Domains/Car';
import CarService from '../../../src/Services/CarService';

describe('Car Service tests', function () {
  it('Tests if it creates a car with success', async function () {
    const inputCar = {
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
});