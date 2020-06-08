import { Component, OnInit, ViewChild, ɵɵNgOnChangesFeature } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { User } from '../../Interfaces/user';
import { DomSanitizer } from '@angular/platform-browser';
import {MinChannel} from '../../Interfaces/min-channel';
import { faCloudSun , faPaperPlane, faUserPlus,  faSmile,faPen} from '@fortawesome/free-solid-svg-icons';
import { Channel } from '../../Interfaces/channel';
import { MessageBody } from 'src/app/Interfaces/message-body';
import {ChatsignalrService} from '../../Services/chatsignalr.service'
import {ChatReqionServiceService} from '../../Services/char-reqion-service.service';
import { from } from 'rxjs';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import {RealtimeApi} from '../../../assets/appsetting.json';



@Component({
  selector: 'app-chat-region',
  templateUrl: './chat-region.component.html',
  styleUrls: ['./chat-region.component.css']
})
export class ChatRegionComponent implements OnInit {
  Imageform : File = null;
  ImageUrl :any;
  Channels :  MinChannel[];
  Channel : Channel;
  faclod = faCloudSun;
  paper = faPaperPlane;
  plus = faUserPlus;
  smile= faSmile;
  public fapen = faPen;
  public messageBody = '';
  remessage : any;
  showEmojiPicker = false;
  messageIcon = "";

  toggled: boolean = false;
  handleSelection(event) {
    this.messageBody = this.messageBody+ event.char;
  }

public _asurl = RealtimeApi;
public _url :string = RealtimeApi+ "api/v1/";
  constructor(private http:HttpClient ,private hub : ChatsignalrService) {

   }
  public base64Image;
 public user : User;
 public message : {body:any , cid : any , uid :any };

  ngOnInit() {


    this.getUser(localStorage.getItem('Id'));
    this.getChannels();
    this.getChannel();
    this.hub.startConnection()
    setTimeout(() => {
      this.joinToGroup();
    }, 2000);
  }


  readUrl(event:any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.onload = (event: ProgressEvent) => {
        this.ImageUrl = (<FileReader>event.target).result;
      }
      this.Imageform = event.target.files[0];
      reader.readAsDataURL(event.target.files[0]);
    }
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


addEmoji(event) {
        const { messageIcon } = this;
        const text = `${messageIcon}${event.emoji.native}`;

        this.messageIcon = text;
        this.showEmojiPicker = false;
      }
 public send() {

  this.message = {body: this.messageBody ,cid : this.Channel.channelId ,uid : this.user.userId };

   this.http.put(this._url + 'chat/SendMessage' ,this.message ).subscribe(res=>{
     console.log(res);
   });
   this.hub.sendGroupMessage(localStorage.getItem("CID") ,this.user.userId, this.user.imgPath, this.message.body);
   this.messageBody = "";
   //this.hub.SendBroadCast(this.user.userId , this.message.body);
 };

 public joinToGroup(){
   this.hub.addMesssagesListner(this.Channel, document.getElementById('Body3'));
   this.hub.joinGroup(localStorage.getItem("CID"));

 }

 public gotoBottom(){
  var element = document.getElementById('Body3');
  element.scrollTop = element.scrollHeight - element.clientHeight;
}

toggleEmojiPicker() {
  this.showEmojiPicker = !this.showEmojiPicker;
}
 public leaveFromGroup(){
   this.hub.leaveGroup(localStorage.getItem('CID'));
 }

 public getChannels = () =>{
   this.http.get(this._url+'chat/GetUserChannels/'+localStorage.getItem('Id')).subscribe((res : MinChannel[]) =>{
     this.Channels = res;
     localStorage.setItem("CID" ,this.Channel[0].channelId);

   });}

      /**
    * ChangeImage
    */
   public ChangeImage() {
     const fd =  new FormData();
     fd.append('file', this.Imageform ,  this.Imageform.name)
     this.http.post(this._url+'chat/InsertImgtoChannel/' +this.Channel.channelId,fd)
     .subscribe(res => {
       alert(res);
       this.getChannel();
     });


  }
}
