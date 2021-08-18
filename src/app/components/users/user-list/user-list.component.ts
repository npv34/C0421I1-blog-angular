import { Component, OnInit, OnChanges } from '@angular/core';
import {IUser} from "../IUser";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
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
  constructor() { }

  ngOnInit(): void {

  }

  ngOnChanges() {

  }

  ngDoCheck() {

  }

  showHideImage() {
    this.showImage = !this.showImage;
  }

  searchUser(event: any) {
    let keyword = event.target.value;
    console.log(keyword)
    // search trong  mang users
  }

  deleteUser(index: number) {
    if (confirm('Are you sure?')) {
      this.users.splice(index, 1)
    }
  }

  changeSizeImage(event: any) {
    this.imageSize = event.target.value;
    console.log(event.target)
  }

}
