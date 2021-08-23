import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../../services/user.service";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  constructor(private router: ActivatedRoute,
              private userService: UserService,
              private fb: FormBuilder,
              private route: Router) { }
  formEditUser: FormGroup | undefined;
  // @ts-ignore
  id = +this.router.snapshot.paramMap.get('id');

  ngOnInit(): void {
    // @ts-ignore
    let userEdit = this.userService.findByIndex(this.id);
    this.formEditUser = this.fb.group({
      name: [userEdit.name],
      email: [userEdit.email],
      address: [userEdit.address],
      avatar: [userEdit.avatar],
      phone: [userEdit.phone]
    })
  }

  submitForm() {
      let data= this.formEditUser?.value;
      this.userService.updateUser(this.id, data);
      this.route.navigate(['admin/users']).then()
  }

  get name() {
    return this.formEditUser?.get('name');
  }

  get email() {
    return this.formEditUser?.get('email');
  }

  get address() {
    return this.formEditUser?.get('address');
  }

  get phone() {
    return this.formEditUser?.get('phone');
  }
}
