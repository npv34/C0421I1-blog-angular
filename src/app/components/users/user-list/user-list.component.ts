import {Component, OnInit} from '@angular/core';
import {IUser} from "../IUser";
import {MatDialog} from "@angular/material/dialog";
import {UserDetailComponent} from "../user-detail/user-detail.component";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  formAddUser: FormGroup | undefined
  text: string = '';
  pageTitle: string = 'Quan ly nguoi dung';
  imageSize: number = 100;
  showImage: boolean = false;
  message: string = "";
  users: IUser[] = [];
  userFilter: IUser[] = [];

  constructor(public dialog: MatDialog,
              private fb: FormBuilder,
              private userService: UserService) {
  }

  ngOnInit(): void {
    // khoi tao form
    this.formAddUser = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      address: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.pattern('[0-9]{10}')]]
    });
    this.users = this.userService.getAll();
    this.userFilter = this.users;
  }

  showHideImage() {
    this.showImage = !this.showImage;
  }

  searchUser(event: any) {
    let keyword = event.toLowerCase();
    this.userFilter = (keyword) ? this.userService.findUserByKeyword(keyword) : this.users;
  }

  shoDetail(index: number) {
    let user = this.users[index];
    const dialogRef = this.dialog.open(UserDetailComponent, {
      width: '250px',
      data: user
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }


  deleteUser(index: number) {
    if (confirm('Are you sure?')) {
      this.userService.destroyUser(index);
      this.users = this.userService.getAll();
      this.text = 'Delete user successfully!';
    }
  }

  changeSizeImage(event: any) {
    this.imageSize = event.target.value;
    console.log(event.target)
  }

  submitForm()  {
    let data = this.formAddUser?.value;
    this.users.push(data);
    this.formAddUser?.reset();
  }

  get name() {
    return this.formAddUser?.get('name');
  }

  get email() {
    return this.formAddUser?.get('email');
  }

  get address() {
    return this.formAddUser?.get('address');
  }

  get phone() {
    return this.formAddUser?.get('phone');
  }

}
