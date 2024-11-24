import { Test, TestingModule } from '@nestjs/testing';
import { PaqueteResolver } from './paquete.resolver';
import { PaqueteService } from './paquete.service';

describe('PaqueteResolver', () => {
  let resolver: PaqueteResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PaqueteResolver, PaqueteService],
    }).compile();

    resolver = module.get<PaqueteResolver>(PaqueteResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
