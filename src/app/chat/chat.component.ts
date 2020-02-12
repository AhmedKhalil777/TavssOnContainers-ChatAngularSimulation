import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { User } from '../Interfaces/user';
import { DomSanitizer } from '@angular/platform-browser';
import {MinChannel} from '../Interfaces/min-channel';
import { faCloudSun , faPaperPlane, faUserPlus,  faSmile,faPen} from '@fortawesome/free-solid-svg-icons';
import { Channel } from '../Interfaces/channel';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})


export class ChatComponent implements OnInit {

  Channels :  MinChannel[];
  Channel : Channel;
  faclod = faCloudSun;
  paper = faPaperPlane;
  plus = faUserPlus;
  smile= faSmile;
 fapen = faPen

public _url :string ="https://localhost:5001/api/v1/";
  constructor(private http:HttpClient , private dom : DomSanitizer) { }
  public base64Image; 
 public user : User;

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

 public getChannels = () =>{
   this.http.get(this._url+'chat/GetUserChannels/'+localStorage.getItem('Id')).subscribe((res : MinChannel[]) =>{
     this.Channels = res;
     localStorage.setItem("CID" ,this.Channel[0].channelId)
     
   });
  

 };
}
