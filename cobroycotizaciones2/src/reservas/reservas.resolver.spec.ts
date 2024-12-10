import { Test, TestingModule } from '@nestjs/testing';
import { ReservasResolver } from './reservas.resolver';

describe('ReservasResolver', () => {
  let resolver: ReservasResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReservasResolver],
    }).compile();

    resolver = module.get<ReservasResolver>(ReservasResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
