import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { User } from '../../Interfaces/user';
import {MinChannel} from '../../Interfaces/min-channel';
import { faCloudSun , faPaperPlane, faUserPlus,  faSmile,faPen} from '@fortawesome/free-solid-svg-icons';
import { Channel } from '../../Interfaces/channel';
import { ChatRegionComponent } from '../chat-region/chat-region.component';
import {Router} from '@angular/router'
import { Location } from '@angular/common';
import { RealtimeApi} from '../../../assets/appsetting.json'
@Component({
  selector: 'app-channels-list',
  templateUrl: './channels-list.component.html',
  styleUrls: ['./channels-list.component.css']
})
export class ChannelsListComponent implements OnInit {

  constructor(private http:HttpClient , private router : Router , private Location : Location) {


   }
  Realtime = RealtimeApi;
  logo = 'assets/TAVSSv1.png';
  channelu : MinChannel;
  Channels :  MinChannel[];
  public caption = "";
  public channelName  = "";
  Channel : Channel;
  faclod = faCloudSun;
  paper = faPaperPlane;
  plus = faUserPlus;
  smile= faSmile;
 fapen = faPen
  public _url :string = RealtimeApi +"api/v1/";
  public base64Image;
 public user : User;
  public Chatre :ChatRegionComponent;
  ngOnInit() {
    this.getUser(localStorage.getItem('Id'));
    this.getChannels();

  }

  public choosegroup= (CID) =>{
    localStorage.setItem("CID" ,CID);
    location.reload();
  };

 public getUser =(Id) => {
    this.http.get(this._url+'GetUser/'+Id).subscribe((res : User) =>{
       this.user = res;

    });
 };


 public CreateChannel= (caption , channelName) => {
   console.log(caption);
   console.log(channelName);
  ;
  this.http.post(this._url+'chat/CreateChannel' ,
    {
      "adminId": localStorage.getItem("Id"),
      "caption": caption,
      "name": channelName
    }
   ).subscribe((res : any)=>{
    alert(res);
  });


};



 public getChannels = () =>{
   this.http.get(this._url+'chat/GetUserChannels/'+localStorage.getItem('Id')).subscribe((res : MinChannel[]) =>{
     this.Channels= res;
     localStorage.setItem("CID" ,this.Channel[0].channelId)

   });


     /**
   * name
   */


  }



}



