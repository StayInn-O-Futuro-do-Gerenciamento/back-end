import { z } from "zod";
import {
  hotelCreateSchema,
  hotelReturnAllSchema,
  hotelReturnSchema,
  hotelUpdateSchema,
} from "../../schemas/hotel/createHotel.schema";

export type tHotelCreate = z.infer<typeof hotelCreateSchema>;
export type tHotelReturn = z.infer<typeof hotelReturnSchema>;
export type tHotelUpdate = z.infer<typeof hotelUpdateSchema>;
export type tHotelAllReturn = z.infer<typeof hotelReturnAllSchema>;

// export type tAttendantReturn = z.infer<typeof returnAttendantSchema>;
// export type tAttendantReturnWithoutPass = z.infer<
//   typeof returnAttendantSchemaWithoutPass
// >;
// export type tAttendantReqLogin = Omit<tAttendantReq, "idManager">;
