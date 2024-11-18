import { Test, TestingModule } from '@nestjs/testing';
import { IvehiculoController } from './ivehiculo.controller';

describe('IvehiculoController', () => {
  let controller: IvehiculoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IvehiculoController],
    }).compile();

    controller = module.get<IvehiculoController>(IvehiculoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
