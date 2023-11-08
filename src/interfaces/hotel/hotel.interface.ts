import { z } from "zod";
import { hotelCreateSchema } from "../../schemas/hotel/createHotel.schema";

export type tHotelCreate = z.infer<typeof hotelCreateSchema>;

// export type tAttendantUpdateReq = z.infer<typeof attendantUpdateSchema>;
// export type tAttendantReturn = z.infer<typeof returnAttendantSchema>;
// export type tAttendantReturnWithoutPass = z.infer<
//   typeof returnAttendantSchemaWithoutPass
// >;
// export type tAttendantReqLogin = Omit<tAttendantReq, "idManager">;
