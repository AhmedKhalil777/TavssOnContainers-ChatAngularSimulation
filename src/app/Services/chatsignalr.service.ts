import { Injectable } from '@angular/core';
import * as  signalr from '@aspnet/signalr';
import {Message} from '../Interfaces/message'
import { Channel } from '../Interfaces/channel';
@Injectable({
  providedIn: 'root'
})
export class ChatsignalrService {

  private hub : signalr.HubConnection;
  public data : Message;
  constructor() { }
  public startConnection = () => {
    this.hub = new signalr.HubConnectionBuilder()
                                    .withUrl('https://localhost:5001/ChatHub')
                                    .build();
    
    this.hub
        .start()
        .then(() => console.log('The Connection started'))
        .catch(err => console.log('There are an error :' + err)  );



  };

  /**
   * addMesssagesListner
   */
  public addMesssagesListner =(channel : Channel) => {
    
      this.hub.on('RecievedMessageFromGroup', (data : Message) => {
        this.data = data;
        channel.messages.push(data);
        console.log(data); 
        
      }); 
      return  channel;
  };

 /**
  * SendBroadCast
  */
 public SendBroadCast( Id , message) {
   this.hub.
   invoke("BroadCast" , Id , message)
   .then(()=> console.log(message))
   .catch(err => console.error(err));
 }

  public sendGroupMessage(CID  , Id,imgPath , message) {
    this.hub
      .invoke("GroupCast", Id , CID, imgPath ,message )
      .then(()=> console.log("sended successfully"))
      .catch(err => console.error(err));
    
  }

  public joinGroup(CID : string) {
    this.hub
    .invoke('JoinGroup', CID)
    .then(() =>console.log('Added to Group'))
    .catch(err => console.error(err));

  };


}
