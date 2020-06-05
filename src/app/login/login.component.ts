import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { FormBuilder, FormControl } from '@angular/forms';
import {Router} from '@angular/router'
import { from } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  checkoutForm;
  _url :string = 'http://localhost:8000/api/v1/chat/';
  constructor(private http : HttpClient , private formBuilder: FormBuilder , private router : Router) {
    this.checkoutForm = this.formBuilder.group({
      id: new FormControl('')
    });
  }

  ngOnInit() {
  }
  public login = (checkoutForm) => {
    this.http.get('https://localhost:5001/api/v1/chat/GetUserChannels/'+checkoutForm.id).subscribe(res =>
    {
      console.log(res);
      if(res != null){
      localStorage.setItem('Id' , checkoutForm.id);
      this.router.navigate(['/chat']);
      console.log(localStorage.getItem('Id'));
    }
    });
  };

}
