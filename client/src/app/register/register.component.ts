import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Output() CancelRegister = new EventEmitter();
  model:any = {};
  constructor(private accountService: AccountService,private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  Register(){
    this.accountService.register(this.model).subscribe(response=>{
      console.log(response);
      this.Cancel();
    }, error =>{
      console.log(error);
      this.toastr.error(error.error);
    });    
  }

  Cancel(){
    this.CancelRegister.emit(false);
  }
}
