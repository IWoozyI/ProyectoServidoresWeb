-- CreateTable
CREATE TABLE "IVehiculo" (
    "ID" INTEGER NOT NULL,
    "Descripcion" TEXT NOT NULL,
    "Placa" TEXT NOT NULL,
    "Color" TEXT NOT NULL,

    CONSTRAINT "IVehiculo_pkey" PRIMARY KEY ("ID")
);

-- CreateTable
CREATE TABLE "IEspaciodeParqueo" (
    "ID" INTEGER NOT NULL,
    "Descripcion" TEXT NOT NULL,

    CONSTRAINT "IEspaciodeParqueo_pkey" PRIMARY KEY ("ID")
);

-- CreateTable
CREATE TABLE "IParquear" (
    "ID" INTEGER NOT NULL,
    "ID_Vehiculo" INTEGER NOT NULL,
    "ID_EspaciodeParqueo" INTEGER NOT NULL,
    "FechayHoradeEntrada" TEXT NOT NULL,
    "FechayHoradeSalida" TEXT NOT NULL,

    CONSTRAINT "IParquear_pkey" PRIMARY KEY ("ID")
);

-- AddForeignKey
ALTER TABLE "IParquear" ADD CONSTRAINT "IParquear_ID_Vehiculo_fkey" FOREIGN KEY ("ID_Vehiculo") REFERENCES "IVehiculo"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "IParquear" ADD CONSTRAINT "IParquear_ID_EspaciodeParqueo_fkey" FOREIGN KEY ("ID_EspaciodeParqueo") REFERENCES "IEspaciodeParqueo"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;
