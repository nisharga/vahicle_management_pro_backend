import { z } from 'zod';

const VehicleType = z.enum(['AC', 'NonAC', 'SlippingBus']);
const FuelType = z.enum(['Petrol', 'Diesel', 'Electric', 'Hybrid']);

const createVehicle = z.object({
 body:z.object({
  registrationNo: z.string(),
  purchaseDate: z.string(), // Change to DateTime if necessary
  registrationDate: z.string().optional(), // Change to DateTime if necessary
  color: z.string(),
  mileage: z.number(),
  price: z.number(),
  tax: z.number(),
  seatCapacity: z.number(), // Corrected typo: 'seatCapacity' instead of 'seatCapacicty'
  vehicleType: VehicleType,
  brand: z.string(),
  model: z.string(),
  fuelType: FuelType,
  // trips: z.array(z.object({
  //   // Assuming Trip is an object
  //   // Define validation for Trip if needed
  //   tripId: z.string(),
  //   startDate: z.string(), // Change to DateTime if necessary
  //   endDate: z.string(), // Change to DateTime if necessary
  //   distance: z.number(),
  // })).optional(),

 })
});

export const vehicleValidation = {
  createVehicle,
};