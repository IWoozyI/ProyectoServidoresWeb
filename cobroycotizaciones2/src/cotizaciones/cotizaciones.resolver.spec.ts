import { Test, TestingModule } from '@nestjs/testing';
import { CotizacionesResolver } from './cotizaciones.resolver';

describe('CotizacionesResolver', () => {
  let resolver: CotizacionesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CotizacionesResolver],
    }).compile();

    resolver = module.get<CotizacionesResolver>(CotizacionesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
