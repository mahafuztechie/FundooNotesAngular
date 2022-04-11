import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/service/userService/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(private formBuilder: FormBuilder, private userservice: UserService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
     
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
  });
}

onSubmit(){
  if(this.loginForm.valid){
    let data={
      email:this.loginForm.value.email,
      password:this.loginForm.value.password
     
    }
      this.userservice.login(data).subscribe((res:any)=>{
        console.log(res);
        localStorage.setItem('token', res.data);
      })
   
  }else{
    console.log("invalid")
  }

}
}
