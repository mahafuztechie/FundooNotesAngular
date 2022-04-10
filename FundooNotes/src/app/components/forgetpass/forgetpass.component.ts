import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/service/userService/user.service';

@Component({
  selector: 'app-forgetpass',
  templateUrl: './forgetpass.component.html',
  styleUrls: ['./forgetpass.component.scss']
})
export class ForgetpassComponent implements OnInit {
  forgetPassForm!: FormGroup;
  constructor(private formBuilder: FormBuilder, private userservice: UserService) { }

  ngOnInit(): void {
    this.forgetPassForm = this.formBuilder.group({
     
      email: ['', [Validators.required, Validators.email]]
     
  });
}

onSubmit(){
  let data={email:this.forgetPassForm.value.email}
  this.userservice.forget(data).subscribe((res:any)=>{
    console.log(res);
  })
}


}
