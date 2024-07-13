"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vehicleValidation = void 0;
const zod_1 = require("zod");
const VehicleType = zod_1.z.enum(['AC', 'NonAC', 'SlippingBus']);
const FuelType = zod_1.z.enum(['Petrol', 'Diesel', 'Electric', 'Hybrid']);
const createVehicle = zod_1.z.object({
    body: zod_1.z.object({
        registrationNo: zod_1.z.string(),
        purchaseDate: zod_1.z.string(), // Change to DateTime if necessary
        registrationDate: zod_1.z.string().optional(), // Change to DateTime if necessary
        color: zod_1.z.string(),
        mileage: zod_1.z.number(),
        price: zod_1.z.number(),
        tax: zod_1.z.number(),
        seatCapacity: zod_1.z.number(), // Corrected typo: 'seatCapacity' instead of 'seatCapacicty'
        vehicleType: VehicleType,
        brand: zod_1.z.string(),
        model: zod_1.z.string(),
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
exports.vehicleValidation = {
    createVehicle,
};
