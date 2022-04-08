import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/service/userService/user.service';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.scss']
})
export class RegisterationComponent implements OnInit {
  registerForm!: FormGroup;
  constructor(private formBuilder: FormBuilder, private userservice:UserService) { }

  ngOnInit():void{
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
  });
  }

  onSubmit(){
    if(this.registerForm.valid){
      let data={
        firstName:this.registerForm.value.firstName,
        lastName:this.registerForm.value.lastName,
        email:this.registerForm.value.email,
        password:this.registerForm.value.password
       
      }
        this.userservice.register(data).subscribe((res:any)=>{
          console.log(res);
        })
     
    }else{
      console.log("invalid")
    }

  }
}

