import { Test, TestingModule } from '@nestjs/testing';
import { IvehiculoService } from './ivehiculo.service';

describe('IvehiculoService', () => {
  let service: IvehiculoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IvehiculoService],
    }).compile();

    service = module.get<IvehiculoService>(IvehiculoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
