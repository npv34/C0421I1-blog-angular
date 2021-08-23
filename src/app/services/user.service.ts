import { Injectable } from '@angular/core';
import {IUser} from "../components/users/IUser";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: IUser[] = [
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

  getAll() {
    return this.users;
  }

  findUserByKeyword(keyword: string) {
    return this.users.filter(user => {
      return (user.name.toLowerCase().indexOf(keyword) != -1
        || user.email.toLowerCase().indexOf(keyword) != -1);
    })
  }

  destroyUser(index: number) {
    this.users.splice(index, 1);
  }
}
