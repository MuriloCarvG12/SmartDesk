
import { AppDataSource } from '../data-source';
import { Ticket } from '../entities/entity_Ticket';
import { ITicket } from '../interfaces/ticketInterface';
import { GenericController } from './genericController';

export class TicketController extends GenericController<Ticket> {
  constructor() {
    super(AppDataSource.getRepository(Ticket));
  }

  
 post = async (req: Request, res  :Response) => {
   {
     
      let BodyTicket : ITicket;
      if( req.body.ticketStatus == null || typeof req.body.ticketStatus !== "number"){}
      if( req.body.ticketPriority == null || typeof req.body.ticketPriority !== "number"){}
      if( req.body.ticketDescription.trim() == "" || typeof req.body.ticketDescription !== "string"){}      
      if( req.body.ticketCategory == null || typeof req.body.ticketCategory !== "number" ){}
      if( req.body.ticketDateOpen.trim() == "" || isNaN(req.body.ticketDateOpen.getTime())){}
      if( req.body.ticketSolicitant == null || typeof req.body.ticketSolicitant !== "number"){}
      if( req.body.ticketAgent == null || typeof req.body.ticketAgent !== "number"){}
        
      Body
         try 
         {   
             const entity = this.repository.create();
             return res.status(200).json(await this.repository.save(entity));
         } 
 
         catch (error) 
         {
             return error
         }
   }
 }
 
}