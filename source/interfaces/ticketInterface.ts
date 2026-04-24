export interface ITicket {
  ticketTitle: string;
  ticketStatus: number;
  ticketPriority: number;
  ticketDescription: string;
  ticketCategory: number;
  ticketDateOpen: Date;
  ticketDateClose: Date | null;
  ticketSolicitant: number;
  ticketAgent: number;
}