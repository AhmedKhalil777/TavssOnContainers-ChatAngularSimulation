import { User } from './user';
import { Message } from './message';

export interface Channel {
     channelId :string,
     adminId :string,
     imgPath :string,
     caption : string,
     status :boolean,
     name :string,
     users : User[],
     messages : Message[]
}
