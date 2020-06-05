import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ChannelsListComponent } from './chat/channels-list/channels-list.component';
import { ChatRegionComponent } from './chat/chat-region/chat-region.component';
import { RouterModule, Routes } from '@angular/router';
import {ChatComponent} from './chat/chat.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconsModule } from './icons/icons.module';
import { PickerModule } from '@ctrl/ngx-emoji-mart';
import  {  NgxEmojiPickerModule  }  from  'ngx-emoji-picker';
import { TestdesignComponent } from './testdesign/testdesign.component';


 const routes: Routes = [
   { path: '', component: LoginComponent },
   { path: 'login', component: LoginComponent },
   { path: 'chat', component: ChatComponent },
   { path: 'chat/{CID}', component: ChatComponent },
   { path: '**', pathMatch:'full', redirectTo: 'routePath' }

 ];

 export const appRouting = RouterModule.forRoot(routes); [

 ];

@NgModule({
  declarations: [
    TestdesignComponent,
    AppComponent,
    LoginComponent,
    ChannelsListComponent,
    ChatRegionComponent,
    ChatComponent,
    TestdesignComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    FontAwesomeModule,
    IconsModule,
    PickerModule,
    NgxEmojiPickerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent , LoginComponent , ChatComponent]
})
export class AppModule { }
