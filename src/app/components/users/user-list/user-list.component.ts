import {Component, OnInit} from '@angular/core';
import {IUser} from "../IUser";
import {MatDialog} from "@angular/material/dialog";
import {UserDetailComponent} from "../user-detail/user-detail.component";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  text: string = '';
  pageTitle: string = 'Quan ly nguoi dung';
  imageSize: number = 100;
  showImage: boolean = false;
  message: string = "";
  users: IUser[] = [
    {
      name: "Pham Van Nam",
      email: "nam@gmail.com",
      phone: "09080090",
      address: "Ha Noi",
      avatar: "https://cdn1.iconfinder.com/data/icons/avatar-97/32/avatar-02-512.png"
    },
    {
      name: "Pham Van Quang",
      email: "quang@gmail.com",
      phone: "09080090",
      address: "Ha Noi",
      avatar: "https://cdn1.iconfinder.com/data/icons/avatar-97/32/avatar-02-512.png"
    },
    {
      name: "Pham Thi Ninh",
      email: "ninh@gmail.com",
      phone: "09080090",
      address: "Ha Noi"
    }
  ];
  userFilter: IUser[] = [];

  constructor(public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.userFilter = this.users;
  }

  showHideImage() {
    this.showImage = !this.showImage;
  }

  searchUser(event: any) {
    let keyword = event.toLowerCase();
    this.userFilter = (keyword) ? this.findUserByKeyword(keyword) : this.users;
  }

  findUserByKeyword(keyword: string) {
    return this.users.filter(user => {
      return (user.name.toLowerCase().indexOf(keyword) != -1
        || user.email.toLowerCase().indexOf(keyword) != -1);
    })
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
      this.users.splice(index, 1);
      this.text = 'Delete user successfully!';
    }
  }

  changeSizeImage(event: any) {
    this.imageSize = event.target.value;
    console.log(event.target)
  }

}
