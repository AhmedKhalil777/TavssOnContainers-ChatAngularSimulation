import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Channel } from '../Interfaces/channel';
import { MinChannel } from '../Interfaces/min-channel';
import { MessageBody } from 'src/app/Interfaces/message-body';
import { User } from '../Interfaces/user';
import { UrlSegment } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class ChatReqionServiceService {
  public _url :string ="https://localhost:5001/api/v1/";

  constructor(private http:HttpClient ) { }
  user :User;
  Channels : MinChannel[];
  Channel : Channel;
  public  getUser  =(Id)=>{
    this.http.get(this._url+'GetUser/'+Id).subscribe((res : User) =>{
      this.user = res;
  })
   return this.user;
};
  

   public SendMessage =(body : MessageBody) =>{
    this.http.put(this._url + 'chat/SendMessage' ,body ).subscribe(res=>{
      console.log(res);});
  };


  /**
   * getChannel
   */
  public getChannel() {
    this.http.get(this._url+'chat/GetChannel/'+localStorage.getItem("CID")).subscribe((res :Channel)=>{
      this.Channel = res;
      console.log(this.Channel);
      
    });
    return this.Channel;
  }
  /**
   * getChannel
   */
  public getChannels(CID:string) {
    this.http.get(this._url+'chat/GetUserChannels/'+localStorage.getItem('Id')).subscribe((res : MinChannel[]) =>{
      this.Channels = res;
      localStorage.setItem("CID" ,CID)
      
    });
    return this.Channels;
  }
}

