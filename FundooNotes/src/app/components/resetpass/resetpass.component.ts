import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/service/userService/user.service';

@Component({
  selector: 'app-resetpass',
  templateUrl: './resetpass.component.html',
  styleUrls: ['./resetpass.component.scss']
})
export class ResetpassComponent implements OnInit {

  resetPassForm!: FormGroup;
  constructor(private formBuilder: FormBuilder, private userservice: UserService) { }

  ngOnInit(): void {
    this.resetPassForm = this.formBuilder.group({
      newPassword: ['', [Validators.required, Validators.minLength(6)]],
      confirmNewPassword: ['', [Validators.required, Validators.minLength(6)]]
  });
}
onSubmit(){
  let data={password:this.resetPassForm.value.newPassword,
    confirmPassword:this.resetPassForm.value.confirmNewPassword}
  this.userservice.reset(data).subscribe((res:any)=>{
    console.log(res);
  })
}
}
