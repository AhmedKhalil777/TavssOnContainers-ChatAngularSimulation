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
    AppComponent,
    LoginComponent,
    ChannelsListComponent,
    ChatRegionComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent , LoginComponent , ChatComponent]
})
export class AppModule { }
