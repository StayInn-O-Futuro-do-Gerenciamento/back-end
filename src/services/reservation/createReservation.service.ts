import { DeepPartial, Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import {
  Reservations,
  Attendant,
  Guest,
  Room,
  ReservationsHistory,
  wppConnect,
  Hotel,
} from "../../entities";
import { tReservationReq } from "../../interfaces";
import axios from "axios";

export const createReservationService = async (
  reservationData: tReservationReq,
  attendantId: string
): Promise<any> => {
  const reservationsRepository: Repository<Reservations> =
    AppDataSource.getRepository(Reservations);

  const attendantRepository: Repository<Attendant> =
    AppDataSource.getRepository(Attendant);

  const guestRepository: Repository<Guest> = AppDataSource.getRepository(Guest);

  const roomRepository: Repository<Room> = AppDataSource.getRepository(Room);

  const reservationsHistoryRepository: Repository<ReservationsHistory> =
    AppDataSource.getRepository(ReservationsHistory);

  const hotelRepository: Repository<Hotel> = AppDataSource.getRepository(Hotel);

  const wppInstanceRepo: Repository<wppConnect> =
    AppDataSource.getRepository(wppConnect);

  const {
    room: roomId,
    guest: guestId,
    ...reservationRequest
  } = reservationData;

  const findHotel = await hotelRepository.find();

  const findRoom = await roomRepository.findOne({
    where: {
      id: roomId,
    },
    relations: {
      typeRoom: {
        offer: true,
      },
    },
  });

  const findGuest = await guestRepository.findOne({
    where: {
      id: guestId,
    },
    relations: {
      address: true,
    },
  });

  const findAttendant = await attendantRepository.findOne({
    where: {
      id: attendantId,
    },
  });

  findRoom!.available = false;

  roomRepository.save(findRoom!);

  const newReservation = reservationsRepository.create({
    ...reservationRequest,
    rooms: findRoom!,
    attendant: findAttendant!,
    guests: [findGuest!],
  } as DeepPartial<Reservations>);

  await reservationsRepository.save(newReservation);

  const history = reservationsHistoryRepository.create({
    ...reservationRequest,
    feedBack: newReservation.feedBack,
    guestId: findGuest!.id,
    roomID: findRoom!.id,
    attendantId: findAttendant!.id,
  });
  await reservationsHistoryRepository.save(history);

  const formatarDataHora = (data: any) => {
    const dia = String(data.getDate()).padStart(2, "0");
    const mes = String(data.getMonth() + 1).padStart(2, "0"); // Mês é baseado em zero
    const ano = data.getFullYear();

    return `${dia}/${mes}/${ano} ${10}:${30}`;
  };

  const priceCalculator = (room: any) => {
    const basePrice = parseFloat(room.typeRoom.price);

    if (room.typeRoom.offer) {
      const discount = parseFloat(room.typeRoom.offer.discount);
      const discountPrice = basePrice - (basePrice * discount) / 100;
      return discountPrice;
    } else {
      return basePrice;
    }
  };

  // SEND MESSAGE
  const findInstance: Array<wppConnect> | null = await wppInstanceRepo.find();

  if (findInstance) {
    const baseUrl = "https://api.dietia.com.br/message/sendText";
    const instanceName = findInstance[0].instanceName;
    const token = findInstance[0].token;
    const number = findGuest?.phoneNumbers[0];

    const headers = {
      "Content-Type": "application/json",
      apikey: token,
    };
    try {
      const responseWpp = await axios.post(
        `${baseUrl}/${instanceName}`,

        {
          number: number,
          options: {
            delay: 1200,
            presence: "composing",
            linkPreview: false,
          },
          textMessage: {
            text: `🛎️ Checkin e Checkout Confirmados! 🏨

            Olá ${findGuest?.name}! 😊

            É um prazer receber você no ${
              findHotel[0].name
            }! Seu checkin foi concluído com sucesso. 🎉

            ⏰Detalhes do Checkin:

            Data e Hora: ${formatarDataHora(reservationData.checkin)}
            Número do Quarto: ${findRoom?.roomNumber}
            Estamos aqui para tornar sua estadia incrível! Aproveite cada momento conosco.

            ⏰Detalhes do Checkout:

            Data e Hora: ${formatarDataHora(reservationData.checkin)}
            Valor Total: ${priceCalculator(findRoom)}
            Agradecemos por escolher ${
              findHotel[0].name
            }. Esperamos que tenha tido uma estadia excepcional. Até a próxima visita! 👋`,
          },
        },
        {
          headers: {
            "Content-Type": "application/json",
            apikey: token,
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
  }

  const responseReservation: any = { ...newReservation };
  delete responseReservation.attendant.password;
  const emergencyContacts = responseReservation.guests[0].emergencyContacts;
  const objectEmergency = emergencyContacts.map((contact: any) => {
    return JSON.parse(contact);
  });
  responseReservation.guests[0].emergencyContacts = objectEmergency;

  return responseReservation;
};
