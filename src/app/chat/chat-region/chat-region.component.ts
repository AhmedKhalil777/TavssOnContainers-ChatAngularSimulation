import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { User } from '../../Interfaces/user';
import { DomSanitizer } from '@angular/platform-browser';
import {MinChannel} from '../../Interfaces/min-channel';
import { faCloudSun , faPaperPlane, faUserPlus,  faSmile,faPen} from '@fortawesome/free-solid-svg-icons';
import { Channel } from '../../Interfaces/channel';
import { MessageBody } from 'src/app/Interfaces/message-body';
import {ChatReqionServiceService} from '../../Services/char-reqion-service.service';
@Component({
  selector: 'app-chat-region',
  templateUrl: './chat-region.component.html',
  styleUrls: ['./chat-region.component.css']
})
export class ChatRegionComponent implements OnInit {

  Channels :  MinChannel[];
  Channel : Channel;
  faclod = faCloudSun;
  paper = faPaperPlane;
  plus = faUserPlus;
  smile= faSmile;
 fapen = faPen;
  public messageBody = '';

public _url :string ="https://localhost:5001/api/v1/";
  constructor(private http:HttpClient , private dom : DomSanitizer) { }
  public base64Image; 
 public user : User;
 public message : {body:any , cid : any , uid :any };

  ngOnInit() {
    this.getUser(localStorage.getItem('Id'));
    this.getChannels();
    this.getChannel();
  }
  
 public getUser =(Id) => {
    this.http.get(this._url+'GetUser/'+Id).subscribe((res : User) =>{
       this.user = res;
       
    });
 };

 public getChannel = () =>{
   this.http.get(this._url+'chat/GetChannel/'+localStorage.getItem("CID")).subscribe((res :Channel)=>{
     this.Channel = res;
     console.log(this.Channel);
     
   });
 };

public check(){
  console.log(this.messageBody);
  console.log(this.message);
};

 public send() {
   
  this.message = {body: this.messageBody ,cid : this.Channel.channelId ,uid : this.user.userId };

   this.http.put(this._url + 'chat/SendMessage' ,this.message  ).subscribe(res=>{
     console.log(res);
   });
 };

 public getChannels = () =>{
   this.http.get(this._url+'chat/GetUserChannels/'+localStorage.getItem('Id')).subscribe((res : MinChannel[]) =>{
     this.Channels = res;
     localStorage.setItem("CID" ,this.Channel[0].channelId)
     
   });

}
}