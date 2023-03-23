import { expect } from 'chai';
import { Model } from 'mongoose';
import sinon from 'sinon';
import Motorcycle from '../../../src/Domains/Motorcycle';
import IMotorcycle from '../../../src/Interfaces/IMotorcycle';
import MotorcycleService from '../../../src/Services/MotorcycleService';
import outputMotorcycle from './Motorcycle.mock';

describe('Motorcycle Service tests', function () {
  it('Tests if it creates a motorcycle with success', async function () {
    const inputMotorcycle: IMotorcycle = {
      model: 'Honda Cb 600f Hornet',
      year: 2005,
      color: 'Yellow',
      status: true,
      buyValue: 30.000,
      category: 'Street',
      engineCapacity: 600,
    };
    sinon.stub(Model, 'create').resolves(outputMotorcycle);

    const motorcycleService = new MotorcycleService();
    const result = await motorcycleService.create(inputMotorcycle);
    expect(result).to.deep.equal(outputMotorcycle);
  });

  it('Tests if it returns a motorcycles list with success', async function () {
    const outputList: Motorcycle[] = [outputMotorcycle];
    sinon.stub(Model, 'find').resolves(outputList);

    const motorcycleService = new MotorcycleService();
    const result = await motorcycleService.find();
    expect(result).to.deep.equal(outputList);
  });

  it('Tests if it returns a motorcycle by id with success', async function () {
    const inputId = '6348513f34c397abcad040b2';
    sinon.stub(Model, 'findById').resolves(outputMotorcycle);

    const motorcycleService = new MotorcycleService();
    const result = await motorcycleService.findById(inputId);
    expect(result).to.deep.equal(outputMotorcycle);
  });

  it('Tests if it deletes a motorcycle', async function () {
    const inputId = '6348513f34c397abcad040b2';
    sinon.stub(Model, 'findByIdAndDelete').resolves(outputMotorcycle);

    const motorcycleService = new MotorcycleService();
    const result = await motorcycleService.delete(inputId);   
    expect(result).to.deep.equal(outputMotorcycle);
  });
});