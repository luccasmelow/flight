export interface ticketDTO {
    id: string;
    flightId: string;
    userId: string;
    namePassenger: string;
    seat: string;
    statu: 'reservado' | 'confirmado' | 'cancelado';
}